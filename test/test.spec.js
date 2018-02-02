/*
* @Author: Mengwei Choong
* @Date:   2018-01-31 17:41:16
* @Last Modified by:   Mengwei Choong
* @Last Modified time: 2018-01-31 18:57:34
*/

const should = require('chai').should()

module.exports = function() {
	describe('1 + 1', () => {
		it('should be 2', () => {
			(1 + 1).should.equal(2)
		})
	})	
} 
