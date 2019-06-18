const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');


/* GET users listing. */
router.get('/', function(req, res, next) {
    var test = 'ddd';
    console.log(test);
    res.send('respond with a resource');
});

router.post('/authenticate', userController.postAuthenticate);

module.exports = router;