const {loginUser,updateUser,getUser} = require('./user.controller')
const router = require('express').Router()

router.post('/', loginUser)
router.patch('/', updateUser)
router.get('/:id', getUser)

module.exports = router;