const {loginUser} = require('./user.controller')
const router = require('express').Router()

router.post('/', loginUser)

module.exports = router;