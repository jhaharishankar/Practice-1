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

// insert data
route.post('/insertStudent',FrontController.studentInsert)
// verifyLogin
route.post('/verifyLogin',FrontController.verifyLogin)



// AdminController
route.get('/admin/dashboard',AdminController.dashboard)
route.get('/admin/studentDisplay',AdminController.studentDisplay)
route.get('/admin/studentView/:id',AdminController.studentView)
route.get('/admin/studentDelete/:id',AdminController.studentDelete)
route.get('/admin/studentEdit/:id',AdminController.studentEdit)

route.post('/admin/studentUpdate/:id',AdminController.studentUpdate)
route.post('/admin/insertStudent',AdminController.studentInsert)



module.exports = route
