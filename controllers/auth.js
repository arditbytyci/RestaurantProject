const db = require('../models')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {jwtSecret, jwtExpire} = require('../config/keys')
exports.signUpController = async (req, res) => {

    const {username, email, password} = req.body;

   try {

    const User = await  db.user.findOne({where : {email: email}});
    

    if(User) {
        return res.status(400).json({
            errorMessage: 'Email already exists',
        });
    }

    const newUser = new db.user();

    newUser.username = username;
    newUser.email = email;
    
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);


    await newUser.save();

    res.json({
        successMessage: 'Successfully registered!'
    })

   } catch(err) {
    console.log('signUpController error', err);
    res.status(500).json({
        errorMessage: 'Server error'
    })
   }



    



}


exports.signInController = async (req, res) => {

   
    const {email, password} = req.body;

    try {
        
        const User = await  db.user.findOne({where : {email: email}});

        if(!User) {
            return res.status(400).json({
                errorMessage: 'Invalid credentials',
            });
        }

        const isMatch = await bcrypt.compare(password, User.password);

        if(!isMatch) {
            return res.status(400).json({
                errorMessage: 'Invalid credentials',
            });
        }

        const payload = {
            User: {
                _id: User._id,
            }
        };


       await jwt.sign(payload, jwtSecret, {expiresIn: jwtExpire}, (err, token) => {
            if(err) console.log('jwt err' , err);
            const {_id, username, email, role} = User;


            res.json({
                token,
                User: { _id, username, email, role },
            });
        });

    } catch (err) {
        console.log('signInController error', err);
        res.status(500).json({
            errorMessage: 'Server error',
        })
    }
    



}