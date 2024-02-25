const db = require('../models');
const Petrol = db.petrol;

exports.findAll = async (req, res) => {
    const petrols = await Petrol.findAll({ attributes: ['id_petrol','name_petrol', 'cost_petrol', 'path_img_petrol'] });
	
	res.json(petrols);
}

exports.saveOrders = async (req, res, next) => {
    // save orders into database
    console.log('save orders into database');
    console.log(req.body);
	
	next();
}