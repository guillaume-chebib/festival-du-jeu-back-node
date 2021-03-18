const jwt = require('jsonwebtoken');
require('dotenv').config()

function verifyJWT(req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.JWTKEY );
        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId) {
            console.log('Invalid user ID');
        } else {
            next();
        }
    } catch {
        res.status(401).json({
            error: new Error('Invalid request!')
        });
    }
}

module.exports = {verifyJWT}
