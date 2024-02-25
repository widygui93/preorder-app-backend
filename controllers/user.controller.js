const jwt = require('jsonwebtoken');
const db = require('../models');
const User = db.user;

exports.findByID = async (req, res) => {
    const token = req.cookies.jwt;

    if(token){
        jwt.verify(token, process.env.secretJWT, async ( err, decodeToken ) => {
            if(err){
                res.json(null);
            } else {
                let {name, email} = await User.findByPk(decodeToken.id);
                
                res.json({ user: {name, email} });
            }
        })
    } else {
        res.json(null);
    }
}