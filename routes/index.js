const express = require('express')
const router = express.Router()

router.use('/', require('./homepage'))
router.use('/problems', require('./problems'))
router.use('/solution', require('./solution'))
//router.use('/user', require('./user'))
module.exports = router