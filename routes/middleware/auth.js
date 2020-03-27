const jwt = require('jsonwebtoken')
const config = require('../../config/keys')

var auth = function (req, res, next) {
    let token = req.headers.x_auth
    
    // invalid token - synchronous
    try {
        jwt.verify(token, config.jwt , function(err , decoded){
            if (err) throw err

            req.user = decoded
            next()
        });
    } catch(err) {
        // err
        return res.status(400).json({"message" : "Authentication Failed , Try Logging in"})
    }
}

module.exports = auth