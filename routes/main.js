const path = require('path')

const express = require('express')

const controller = require('../controllers/main')

const router = express.Router()

router.get('/', controller.getIndex)

router.get('/gallery', controller.getGallery)

router.get('/about', controller.getAboutPage)

router.get('/contact', controller.getContactPage)

router.post('/contact', controller.postContactPage)

module.exports = router
