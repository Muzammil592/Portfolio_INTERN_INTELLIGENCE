const express = require('express');
const { submitContactForm } = require('../controllerFuncs/contactcontroller');

const router = express.Router();

router.post('/',submitContactForm);

module.exports = router;
