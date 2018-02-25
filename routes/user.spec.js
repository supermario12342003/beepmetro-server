var should = require('chai').should();
const axios = require('axios');
var User = require('../models/user')

module.exports = function (server, db) {
	const HOST = 'http://localhost:' + server.address().port
	var user;
	var normalUser;
	var token;

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
					username: "test2",
				})
				.then(res => {
					should.exist(res.data.errors.email);
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
		describe('authenticate with correct info', () => {
			it('should return a valid token', (done) => {
				axios.post(HOST + '/api/user/authenticate', {
					email: "test@gmail.com",
					password: "ad123456",
				})
				.then(res => {
					res.data.success.should.equal(true)
					should.exist(res.data.token)
					token = res.data.token
					done()
				})
				.catch(done)
			})
		})
		describe('access my detail with valid token', () => {
			it('should return success and obj', (done) => {
				axios.post(HOST + '/api/user/me', {}, {
					headers: {'x-access-token': token},
				})
				.then(res => {
					res.data.success.should.equal(true)
					res.data.obj.email.should.equal(user.email)
					done()
				})
				.catch(done)
			})
		})
		describe('access my detail without valid token', () => {
			it('should return success = false and message', (done) => {
				axios.post(HOST + '/api/user/me', {}, {
					headers: {'x-access-token': "xxx"},
				})
				.catch((err) => {
					err.response.data.success.should.equal(false)
					should.exist(err.response.data.message)
					done()
				})
			})
		})
		describe('update user with bad password', () => {
			it('should return password error', (done) => {
				axios.put(HOST + '/api/user/' + user._id, {
					password: "1234",
				}, {
					headers: {'x-access-token': token},
				})
				.then(res => {
					should.exist(res.data.errors.password);
					done()
				})
				.catch(done)
			})
		})
		describe('update user with good password', () => {
			it('should return success and obj', (done) => {
				axios.put(HOST + '/api/user/' + user._id, {
					password: "ad1234a",
				}, {
					headers: {'x-access-token': token},
				})
				.then(res => {
					res.data.success.should.equal(true)
					should.exist(res.data.obj)
					done()
				})
				.catch(done)
			})
		})
		describe('update user firstName', () => {
			it('should return success and obj', (done) => {
				axios.put(HOST + '/api/user/' + user._id, {
					firstName: "new name here",
				}, {
					headers: {'x-access-token': token},
				})
				.then(res => {
					res.data.success.should.equal(true)
					res.data.obj.firstName.should.equal("new name here")
					done()
				})
				.catch(done)
			})
		})
		describe('update user isAdmin without admin privilege', () => {
			it('should return success and obj but isAdmin unchanged, not shown', (done) => {
				axios.put(HOST + '/api/user/' + user._id, {
					isAdmin: true,
				}, {
					headers: {'x-access-token': token},
				})
				.then(res => {
					res.data.success.should.equal(true)
					should.not.exist(res.data.obj.isAdmin)
					done()
				})
				.catch(done)
			})
		})
		describe('update user emailVerified with admin privilege', () => {
			it('should return success and obj updated, emailVerified shown', (done) => {
				User.findOne({_id: user._id})
				.then((user) => {
					user.setData({isAdmin: true}, true)
					.then(ret => {
						token = user.getToken()
						axios.put(HOST + '/api/user/' + user._id, {
							firstName: "Admin",
							emailVerified: true,
						}, {
							headers: {'x-access-token': token},
						})
						.then(res => {
							res.data.success.should.equal(true)
							res.data.obj.emailVerified.should.equal(true)
							res.data.obj.firstName.should.equal("Admin")
							done()
						})
						.catch(done)
					})
					.catch(done)
				})
				.catch(done)
			})
		})
		describe('update normal user with admin', () => {
			it('should return success and obj updated', (done) => {
				var normalUser = new User()
				normalUser.setData({
					firstName: "normal user",
					lastName: "choong",
					email: "whatever@gmail.com",
					password: "asdasd11233",
				})
				normalUser.validateAndSave()
				.then(res => {
					normalUser = res.obj;
					normalUser.firstName.should.equal("normal user")
					axios.put(HOST + "/api/user/" + normalUser._id, {
						emailVerified: true,
						lastName: "Frank", 
					}, {
						headers: {'x-access-token': token},
					})
					.then(res => {
						res.data.obj.firstName.should.equal("normal user")
						res.data.obj.emailVerified.should.equal(true)
						done()
					})
					.catch(done) 
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