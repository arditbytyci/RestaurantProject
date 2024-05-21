const express = require('express');
const { signUpValidator} = require('../middleware/validator');
const { signInValidator} = require('../middleware/validator');
const { validatorResult } = require('../middleware/validator');
const router = express.Router();
const {signUpController} = require('../controllers/auth');
const {signInController} = require('../controllers/auth');

router.post('/signup', signUpValidator, validatorResult, signUpController );
router.post('/signin', signInValidator, validatorResult, signInController );


module.exports = router;