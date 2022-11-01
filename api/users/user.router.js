const {loginUser,updateUser} = require('./user.controller')
const router = require('express').Router()

router.post('/', loginUser)
router.patch('/', updateUser)

module.exports = router;