const express = require('express')
const FrontController = require("../Controller/FrontController")
const AdminController = require('../Controller/AdminController')
const route = express.Router()
const checkAuth = require('../middleware/auth')
const CourseController = require('../Controller/CourseController')
const ContactContoller = require('../Controller/ContactController')

// Frontcontroller routing
route.get('/home', checkAuth, FrontController.home) //path
route.get('/about', checkAuth, FrontController.about)
route.get('/', FrontController.login)
route.get('/register', FrontController.register)
route.get('/contact', checkAuth, FrontController.contact)

// insert data
route.post('/insertStudent', FrontController.studentInsert)
// verifyLogin
route.post('/verifyLogin', FrontController.verifyLogin)
route.get('/logout', FrontController.logout)
// profile
route.get('/profile', checkAuth, FrontController.profile)
route.post('/changePassword',checkAuth,FrontController.changePassword)
route.post('/updateProfile',checkAuth,FrontController.updateProfile)



// AdminController
route.get('/admin/dashboard',checkAuth, AdminController.dashboard)
route.get('/admin/studentDisplay',checkAuth, AdminController.studentDisplay)
route.get('/admin/studentView/:id',checkAuth, AdminController.studentView)
route.get('/admin/studentDelete/:id',checkAuth, AdminController.studentDelete)
route.get('/admin/studentEdit/:id',checkAuth, AdminController.studentEdit)
route.post('/admin/studentUpdate/:id',checkAuth, AdminController.studentUpdate)
route.post('/admin/insertStudent',checkAuth, AdminController.studentInsert)
route.get('/admin/courseDisplay',checkAuth, AdminController.courseDisplay)
route.post('/update_status/:id', checkAuth, AdminController.update_status)
route.get('/admin/profile', checkAuth, AdminController.profile)
route.post('/admin/updateProfile', checkAuth, AdminController.updateProfile)
route.get('/admin/password', checkAuth, AdminController.password)
route.post('/admin/changePassword', checkAuth, AdminController.changePassword)
route.get('/admin/contactdisplay', checkAuth, AdminController.contactdisplay)



// CourseController
route.post('/course_insert', checkAuth, CourseController.courseinsert)
route.get('/coursedisplay', checkAuth, CourseController.coursedisplay)
route.get("/courseView/:id",checkAuth,CourseController.courseView)
route.get("/courseEdit/:id",checkAuth,CourseController.courseEdit)
route.post("/courseUpdate/:id",checkAuth,CourseController.courseUpdate)
route.get("/courseDelete/:id",checkAuth,CourseController.courseDelete)

// contactcontoller
route.post('/contact_insert', checkAuth, ContactContoller.contactinsert)

module.exports = route
