const express = require('express')
const router = express.Router()
const adminRouter = require('./admin/admin.router')
const doctorRouter = require('./doctor/doctor.router')
const clientRouter = require('./clients/client.router')

// http://localhost:5000/user
router.use('/admin' , adminRouter)

// http://localhost:5000/doctor
router.use('/doctor' , doctorRouter)

// http://localhost:5000/client
router.use('/client' , clientRouter)

module.exports = router