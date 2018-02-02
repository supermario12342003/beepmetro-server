var should = require('chai').should();
const axios = require('axios');

module.exports = function (server, db) {
	const HOST = 'http://localhost:' + server.address().port
	var user;

	describe('user routes', () => {
		before((done) => {
			db.dropDatabase()
			.then(() => {
				//init db here
			})
			.then(done)
		})

		describe('database', () => {
			it('should be empty', (done) => {
				axios.get(HOST + '/api/user')
				.then(res => {
					(res.data).should.deep.equal([])
					done()
				})
				.catch(done)
			})
		}) 
		describe('create user without anything', () => {
			it('should give success false', (done) => {
				axios.post(HOST + '/api/user', {})
				.then(res => {
					(res.data.success).should.equal(false)
					done()
				})
				.catch(done)
			})
		})
		describe('create user with correct info', () => {
			it('should return a user json', (done) => {
				axios.post(HOST + '/api/user', {
					email: "test@gmail.com",
					password: "ad123456",
					passwordConf: "ad123456",
					firstName: "Mengwei",
					lastName: "Choong",
					username: "test",
				})
				.then(res => {
					should.exist(res.data.obj);
					user = res.data.obj;
					done()
				})
				.catch(done)
			})
		})
		describe('create user without email', () => {
			it('should return email error', (done) => {
				axios.post(HOST + '/api/user', {
					password: "1234",
					passwordConf: "1234",
					username: "test2",
				})
				.then(res => {
					should.exist(res.data.errors.email);
					done()
				})
				.catch(done)
			})
		})
		describe('create user with same email', () => {
			it('should return emaill error', (done) => {
				axios.post(HOST + '/api/user', {
					email: "test@gmail.com",
					password: "ad123456",
					passwordConf: "ad123456",
					username: "test2",
				})
				.then(res => {
					should.exist(res.data.errors.email);
					done()
				})
				.catch(done)
			})
		})
		describe('create user with different password', () => {
			it('should return passwordConf error', (done) => {
				axios.post(HOST + '/api/user', {
					email: "test@gmail.com",
					password: "ad123456",
					passwordConf: "123444",
					username: "test2",
				})
				.then(res => {
					should.exist(res.data.errors.passwordConf);
					done()
				})
				.catch(done)
			})
		})
		describe('create user with password length less than 6', () => {
			it('should return password error', (done) => {
				axios.post(HOST + '/api/user', {
					email: "test@gmail.com",
					password: "a2345",
					passwordConf: "a2345",
					username: "test2",
				})
				.then(res => {
					should.exist(res.data.errors.password);
					done()
				})
				.catch(done)
			})
		})
		describe('create user with password no alphabet', () => {
			it('should return password error', (done) => {
				axios.post(HOST + '/api/user', {
					email: "test@gmail.com",
					password: "123456",
					passwordConf: "123456",
					username: "test2",
				})
				.then(res => {
					should.exist(res.data.errors.password);
					done()
				})
				.catch(done)
			})
		})
		describe('create user with password no digit', () => {
			it('should return password error', (done) => {
				axios.post(HOST + '/api/user', {
					email: "test@gmail.com",
					password: "abcdefg",
					passwordConf: "abcdefg",
					username: "test2",
				})
				.then(res => {
					should.exist(res.data.errors.password);
					done()
				})
				.catch(done)
			})
		})
		describe('user can be removed?', () => {
			it('yes', (done) => {
				axios.delete(HOST + '/api/user/' + user._id)
				.then(res => {
					(res.data.success).should.equal(true)
					done()
				})
				.catch(done)
			})
		})
		describe('user can be removed again?', () => {
			it('yes but success = false', (done) => {
				axios.delete(HOST + '/api/user/' + user._id)
				.then(res => {
					(res.data.success).should.equal(false)
					done()
				})
				.catch(done)
			})
		})
	})
}