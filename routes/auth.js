const express = require('express');
const { signUpValidator} = require('../middleware/validator');
const { validatorResult } = require('../middleware/validator');
const router = express.Router();


router.post('/signup', signUpValidator, validatorResult );



module.exports = router;