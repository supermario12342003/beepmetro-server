/*
* @Author: Mengwei Choong
* @Date:   2018-01-31 17:41:16
* @Last Modified by:   Mengwei Choong
* @Last Modified time: 2018-03-15 14:31:36
*/


const should = require('chai').should();
const axios = require('axios');
const i18nConfig = require('../config.js').i18nConfig;

module.exports = function(server, db) {
	const HOST = 'http://localhost:' + server.address().port
	
	describe('1 + 1', () => {
		it('should be 2', () => {
			(1 + 1).should.equal(2)
		})
	});	

	describe("translation", () => {
		describe('any initial request', () => {
			it('should be response in english', (done) => {
				axios.get(HOST + '/api/testLang')
				.then(res => {
					(res.data).should.equal("hello world en");
					done();
				})
				.catch(done);
			})
		})

		describe('request with cookie ' + i18nConfig.cookie + '=fr', () => {
			it('should be response in french', (done) => {
				axios.get(HOST + '/api/testLang', {
					headers: {
						Cookie: i18nConfig.cookie + "=fr",
					}
				})
				.then(res => {
					(res.data).should.equal("hello world fr");
					done();
				})
				.catch(done);
			})
		})

		describe('request with param ' + i18nConfig.queryParameter + '=fr', () => {
			it('should be response in french', (done) => {
				axios.get(HOST + '/api/testLang?' + i18nConfig.queryParameter + '=fr')
				.then(res => {
					(res.data).should.equal("hello world fr");
					done();
				})
				.catch(done);
			})
		})
	});
	
} 
