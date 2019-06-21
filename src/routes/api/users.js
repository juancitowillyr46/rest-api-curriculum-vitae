var express = require('express');
var router = express.Router();
var userController = require('../../controllers/userController');
const { check } = require('express-validator/check');

router.post('/login', [
    check('username').exists(),
    check('password').exists().isLength({ min: 8, max: 10 })
], userController.postLogin);

router.post('/register', [
    check('email').isEmail(),
    check('username').exists(),
    check('password').exists().isLength({ min: 8, max: 10 }),
    check('verifyPassword').exists().isLength({ min: 8, max: 10 })
], userController.postRegister);

router.get('/users', (req, res, next) => {
    var test = 'ddd';
    console.log(test);
    res.send('respond with a resource');
});

module.exports = router;