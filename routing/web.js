const express = require('express')
const FrontController = require("../Controller/FrontController")
const AdminController = require('../Controller/AdminController')
const route = express.Router()

// routing
route.get('/home',FrontController.home) //path
route.get('/about',FrontController.about)
route.get('/',FrontController.login)
route.get('/register',FrontController.register)
route.get('/contact',FrontController.contact)

// AdminController
route.get('/admin/dashboard',AdminController.dashboard)
route.get('/admin/studentDisplay',AdminController.studentDisplay)


module.exports = route
