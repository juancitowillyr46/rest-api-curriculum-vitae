var router = require('express').Router();
router.use('/', require('./users'));
router.use('/presentations', require('./presentations'));
module.exports = router;