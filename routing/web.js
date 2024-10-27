const express = require('express')
const FrontController = require("../Controller/FrontController")
const AdminController = require('../Controller/AdminController')
const route = express.Router()
const checkAuth = require('../middleware/auth')

// routing
route.get('/home', checkAuth, FrontController.home) //path
route.get('/about', checkAuth, FrontController.about)
route.get('/',FrontController.login)
route.get('/register',FrontController.register)
route.get('/contact', checkAuth, FrontController.contact)

// insert data
route.post('/insertStudent',FrontController.studentInsert)
// verifyLogin
route.post('/verifyLogin',FrontController.verifyLogin)
route.get('/logout',FrontController.logout)



// AdminController
route.get('/admin/dashboard',AdminController.dashboard)
route.get('/admin/studentDisplay',AdminController.studentDisplay)
route.get('/admin/studentView/:id',AdminController.studentView)
route.get('/admin/studentDelete/:id',AdminController.studentDelete)
route.get('/admin/studentEdit/:id',AdminController.studentEdit)

route.post('/admin/studentUpdate/:id',AdminController.studentUpdate)
route.post('/admin/insertStudent',AdminController.studentInsert)



module.exports = route
