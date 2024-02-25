module.exports = app => {
	const authController = require('../controllers/auth.controller');
	const router = require('express').Router();


	// router.get('/signup', notRequireAuth, authController.signup_get);
	router.post('/signup', authController.signup_post);
	// router.get('/login', notRequireAuth, authController.login_get);
	router.post('/login', authController.login_post);
	router.get('/logout', authController.logout_get);

	app.use(router);
}