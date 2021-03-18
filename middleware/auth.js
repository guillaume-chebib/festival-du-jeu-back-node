const jwt = require('jsonwebtoken');
require('dotenv').config()

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        console.log(token)
        if(!token) return res.status(401).json('Utilisateur non autorisé')
        const decodedToken = jwt.verify(token, process.env.JWTKEY);
        console.log(decodedToken)

        next();

    } catch(e) {
        if (e instanceof jwt.JsonWebTokenError) {
            res.status(401).json('token non autorisé')
        }
        else {
            res.status(400).json('Bad Request')
        }
    }
};
