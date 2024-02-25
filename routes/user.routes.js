module.exports = app => {
	const user = require('../controllers/user.controller');
	const router = require('express').Router();

	router.get('/', user.findByID);

	app.use('/api/user', router);
}