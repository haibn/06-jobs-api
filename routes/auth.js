const express = require('express')
const router = express.Router()

const { login, register, getCurrentUser } = require('../controllers/auth')

router.post('/register', register)
router.post('./login', login)
router.get('./current-user', getCurrentUser)

module.exports = router