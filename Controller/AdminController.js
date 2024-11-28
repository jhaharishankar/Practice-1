const CourseModel = require('../models/course')
const UserModel = require('../models/user')
const nodemailer = require('nodemailer')

class AdminController {
    static dashboard = async (req, res) => {
        try {
            const { name, image } = req.userdata
            res.render('admin/dashboard', { n: name, i: image })
        } catch (error) {
            console.log(error)
        }
    }
    static studentDisplay = async (req, res) => {
        try {
            const { name, image, } = req.userdata
            const data = await UserModel.find()
            // console.log(data)
            res.render('admin/studentDisplay', { d: data, n: name, i: image })
        } catch (error) {
            console.log(error)
        }
    }
    static studentView = async (req, res) => {
        try {
            const { name, image, } = req.userdata
            // console.log(req.params.id)
            const id = req.params.id
            const data = await UserModel.findById(id)
            // console.log(data)
            res.render('admin/studentView', { d: data, n: name, i: image })
        } catch (error) {
            console.log(error)
        }
    }
    static studentEdit = async (req, res) => {
        try {
            const { name, image, } = req.userdata
            // console.log(req.params.id)
            const id = req.params.id
            const data = await UserModel.findById(id)
            // console.log(data)
            res.render('admin/studentEdit', { d: data, n: name, i: image })
        } catch (error) {
            console.log(error)
        }
    }
    static studentUpdate = async (req, res) => {
        try {
            // console.log(req.body)
            let id = req.params.id
            const { name, email, password } = req.body
            await UserModel.findByIdAndUpdate(id, {
                name,
                email,
                password
            })
            res.redirect('/admin/studentDisplay')
        } catch (error) {
            console.log(error)
        }
    }
    static studentDelete = async (req, res) => {
        try {
            // console.log(req.params.id)
            const id = req.params.id
            const data = await UserModel.findByIdAndDelete(id)
            res.redirect('/admin/studentDisplay')
        } catch (error) {
            console.log(error)
        }
    }
    static studentInsert = async (req, res) => {
        try {
            // console.log(req.params.id)
            const { name, email, password } = req.body
            await UserModel.create({
                name,
                email,
                password
            })
            res.redirect("/admin/studentDisplay")
        } catch (error) {
            console.log(error)
        }
    }
    static courseDisplay = async (req, res) => {
        try {
            const { name, image } = req.userdata
            const course = await CourseModel.find()
            res.render('admin/courseDisplay', { c: course, n: name, i: image })
        } catch (error) {
            console.log(error)
        }
    }
    static update_status = async (req, res) => {
        try {
            let id = req.params.id
            const { name, email, status, comment } = req.body
            await CourseModel.findByIdAndUpdate(id, {
                status,
                comment
            })
            res.redirect('/admin/courseDisplay')

        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = AdminController