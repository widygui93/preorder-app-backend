const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    // check jwt is exists & is verified
    if(token){
        jwt.verify(token, process.env.secretJWT, ( err, decodeToken ) => {
            if(err){
                console.log(err.message);
                res.json({ isSuccess: false, message: 'You need to login' });
            } else {
                console.log(decodeToken);
                next();
            }
        })
    } else {
        res.json({ isSuccess: false, message: 'You need to login' });
    }
}

module.exports = { requireAuth };