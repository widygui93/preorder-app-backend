module.exports = app => {
	const petrol = require('../controllers/petrol.controller');
	const { requireAuth } = require('../middleware/auth.middleware');
	const router = require('express').Router();

	// app.get('/preorder', requireAuth, (req, res) => res.render('smoothies'));

	// router.post('/', expenses.create)
	router.get('/', petrol.findAll);
	router.post(
		'/preorder', 
		requireAuth, 
		petrol.saveOrders, 
		(req, res) => res.json({ isSuccess: true, message: 'Your order need to be reviewed' })
	);
	// router.put('/:id', expenses.update)
	// router.delete('/:id', expenses.delete)
	// router.get('/:id', expenses.findOne)

	app.use('/api/petrol', router);
}