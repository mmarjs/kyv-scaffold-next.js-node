const express = require('express')
const router = express.Router()

const authRoutes = require('./auth')
const candidateRoutes = require('./candidate')
const eventRoutes = require('./event')
const residentRoutes = require('./resident')

router.use('/auth', authRoutes)
router.use('/candidates', candidateRoutes)
router.use('/events', eventRoutes)
router.use('/residents', residentRoutes)

module.exports = router
