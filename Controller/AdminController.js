const UserModel = require('../models/user')

class AdminController {
    static dashboard = async (req, res) => {
        try {
            res.render('admin/dashboard')
        } catch (error) {
            console.log(error)
        }
    }
    static studentDisplay = async (req, res) => {
        try {
            const data = await UserModel.find()
            // console.log(data)
            res.render('admin/studentDisplay', { d: data })
        } catch (error) {
            console.log(error)
        }
    }
    static studentView = async (req, res) => {
        try {
            // console.log(req.params.id)
            const id = req.params.id
            const data = await UserModel.findById(id)
            // console.log(data)
            res.render('admin/studentView', { d: data })
        } catch (error) {
            console.log(error)
        }
    }
    static studentEdit = async (req, res) => {
        try {
            // console.log(req.params.id)
            const id = req.params.id
            const data = await UserModel.findById(id)
            // console.log(data)
            res.render('admin/studentEdit', { d: data })
        } catch (error) {
            console.log(error)
        }
    }
    static studentUpdate = async (req, res) => {
        try {
            // console.log(req.body)
            let id = req.params.id
            const { name,email,password} = req.body
            await UserModel.findByIdAndUpdate(id,{
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
           const {name,email,password} = req.body
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
}
module.exports = AdminController