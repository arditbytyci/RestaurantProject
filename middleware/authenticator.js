const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/keys');



exports.jwAuth = (req, res, next) => {
    const token = req.cookies.token;

    if(!token) {
        return res.status(401).json({
            errorMessage: 'Invalid token. Authorization denied',
        });
    }

    try {
         
        const decoded = jwt.verify(token, jwtSecret);

        req.User = decoded.User;
        
        

        next();
        
    } catch (err) 
    {
        console.log('jwt error' , err);
         res.status(401).json({
            errorMessage : 'Invalid token'
        });
    }





}