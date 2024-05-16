const express = require('express');
const { signUpValidator} = require('../middleware/validator');
const { validatorResult } = require('../middleware/validator');
const router = express.Router();
const {signupController} = require('../controllers/auth');

router.post('/signup', signUpValidator, validatorResult, signupController );



module.exports = router;