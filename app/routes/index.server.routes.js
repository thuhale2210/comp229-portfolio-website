// File name: index.server.routes.js
// Student Name: Thu Ha Le
// Student ID: 301259611 
// Date: September 27, 2023

var express = require('express')
var router = express.Router()

// GET home page
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Home' })
})

router.get('/about', function (req, res, next) {
    res.render('about', { title: 'About' })
})

router.get('/services', function (req, res, next) {
    res.render('services', { title: 'Services' })
})

router.get('/projects', function (req, res, next) {
    res.render('projects', { title: 'Projects' })
})

router.get('/contact', function (req, res, next) {
    res.render('contact', { title: 'Contact' })
})

module.exports = router