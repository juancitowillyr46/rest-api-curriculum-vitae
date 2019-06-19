var express = require('express');
var router = express.Router();
var userController = require('../../controllers/user.controller');

router.post('/login', userController.postLogin);
router.post('/register', userController.postRegister);

router.get('/users', function(req, res, next) {
    var test = 'ddd';
    console.log(test);
    res.send('respond with a resource');
});

module.exports = router;