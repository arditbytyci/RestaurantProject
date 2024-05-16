

const db = require('../models')
const bcrypt = require('bcryptjs');


exports.signupController = async (req, res) => {

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