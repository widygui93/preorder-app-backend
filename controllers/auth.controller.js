const jwt = require('jsonwebtoken');
const db = require('../models');
const User = db.user;
const Address_shipping = db.address_shipping;

// handle errors
const handleErrors = (err) => {
    const results = {};

    if (err.name === "SequelizeUniqueConstraintError"){
        results[err.errors[0].path] = err.errors[0].message;
    }

    if(err.name === "SequelizeValidationError"){
        err.errors.forEach(error => {
            results[error.path] = error.message;
        });
    }

    // incorrect email
    if(err.message === 'incorrect email'){
        results["message"] = 'that email is not registered';
    }

    // incorrect password
    if(err.message === 'incorrect password'){
        results["message"] = 'that password is incorrect';
    }

    return results;
};

const maxAge = 3 * 24 * 60 * 60; // 3 days
const createToken = (id) => {
    return jwt.sign({id}, process.env.secretJWT, {
        expiresIn: maxAge
    });
}

const isNotMatch = (password, confirmPassword) => {
    return password !== confirmPassword ? true : false;
}

// module.
exports.signup_post = async (req, res) => {
    const transaction = await db.sequelize.transaction();

    const { 
        name, 
        email, 
        password, 
        confirmPassword,
        province,
        city,
        district,
        village,
        code_post,
        detail_address,
        nickname_address,
        latitude,
        longitude
    } = req.body;

    try {
        if( isNotMatch(password, confirmPassword) ) {
            res.status(200).json({
                errors : {
                    password: "Password does not match with Confirm Password"
                }
            });
        } 
        else {
            const user = await User.create({ name, email, password }, { transaction });
            const address_shipping = await Address_shipping.create({ id_user: user.id, province, city, province, district, village, code_post, detail_address, nickname_address, latitude, longitude}, { transaction });
            await transaction.commit();
            const token = createToken(user.id);
            res.cookie("jwt", token, { 
                    httpOnly: true, 
                    maxAge: maxAge * 1000 
                }
            );
            res.status(201).json({ user: user.id });
        }
    } catch (error) {
        await transaction.rollback();
        const errors = handleErrors(error);
        res.status(400).json({errors});
    }
}

exports.login_post = async (req, res) => {
    const { email, password } = req.body;

    try{
        const user = await User.login(email,password);
        const token = createToken(user.id);
        res.cookie('jwt', token, { 
                httpOnly: true, 
                maxAge: maxAge * 1000 
            }
        );
        res.status(200).json({user: user.id});
    } catch(error){
        const errors = handleErrors(error);
        res.status(400).json({ errors });
    }
}

exports.logout_get = (req, res) => {
    res.cookie('jwt', '', { maxAge : 1});
    res.status(200).end();
}