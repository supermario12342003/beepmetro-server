

const mongoose = require('mongoose');
const app = require('../app');
const server = app.listen(process.env.PORT || 1234);
const db = mongoose.connection;
mongoose.connect("mongodb://localhost/beepmetro-test");

describe('Main test', () => {

	after((done) => {
		db.close()
		server.close(done)
	});
	require('./test.spec')();
	require('../routes/user.spec')(server, db);

})
/*

*/




