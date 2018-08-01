const express = require('express')
const router = express.Router();

router.use('/', require('./homepage'));
router.use('/problems', require('./problems'));
// router.use('/solutions', require('./solutions'));

module.exports = router