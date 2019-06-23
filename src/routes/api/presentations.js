var express = require('express');
var router = express.Router();
var presentationsController = require('../../controllers/presentationController');
const { check } = require('express-validator/check');

router.post('/', [
    check('firstName').exists(),
    check('lastName').exists(),
    check('summary').exists(),
    check('country').exists()
], presentationsController.create);

router.get('/:id', presentationsController.read);

module.exports = router;