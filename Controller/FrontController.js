const UserModel = require('../models/user')
const bcrypt = require("bcrypt");
const cloudinary = require("cloudinary");
const jwt = require('jsonwebtoken');

// cloudinary configration
cloudinary.config({
    cloud_name:"dqioctehh",
    api_key:"358269223623469",
    api_secret:"hamPoLZxC70MqYSjzwlJiQxo6Lk",
});

class FrontController {

    static home = async (req, res) => {
        try {
            res.render("home")
        } catch (error) {
            console.log(error)
        }
    }
    static about = async (req, res) => {
        try {
            res.render("about")
        } catch (error) {
            console.log(error)
        }
    }
    static login = async (req, res) => {
        try {
            res.render("login", { message: req.flash("Success"), msg: req.flash("error") });
        } catch (error) {
            console.log(error)
        }
    }
    static register = async (req, res) => {
        try {
            res.render("register", { message: req.flash("error") });
        } catch (error) {
            console.log(error)
        }
    }
    static contact = async (req, res) => {
        try {
            res.render("contact")
        } catch (error) {
            console.log(error)
        }
    }

    // insert student
    static studentInsert = async (req, res) => {
        try {

            const { name, email, password, confirmpassword } = req.body;
            if (!name || !email || !password || !confirmpassword) {
                req.flash("error", "All Fields are Required.");
                return res.redirect("/register");
            }

            const isEmail = await UserModel.findOne({ email });
            console.log(isEmail)
            if (isEmail) {
                req.flash("error", "Email Already Exists");
                return res.redirect("/register");
            }

            if (password != confirmpassword) {
                req.flash("error", "Password does not match");
                return res.redirect("/register");
            }

            // console.log(req.files) // to check image
            const file =req.files.image
            const imageUpload = await cloudinary.uploader.upload(
                file.tempFilePath,
                {
                    folder: "userprofile",
                }
            );
            // console.log(imageUpload);
            const hashpassword =await bcrypt.hash(password,10)
            const data = await UserModel.create({
                name,
                email,
                password:hashpassword,
                image:{
                    public_id:imageUpload.public_id,
                    url: imageUpload.secure_url
                }
            });
            req.flash("Success", "Register Success! Please Login");
            res.redirect("/") /// route ** web
        } catch (error) {
            console.log(error)
        }
    }

    static verifyLogin = async (req, res) => {
        try {
            // console.log(req.body)
            const { email, password } = req.body;
            const user = await UserModel.findOne({ email: email})
            if (user != null){
                const isMatched = await bcrypt.compare(password, user.password)
                // console.log(isMatched)
                if (isMatched) {
                    // token generate
                    var token = jwt.sign({ ID: user._id }, 'abdbasdbhjb');
                    // console.log(token)
                    res.cookie('token',token)
                    res.redirect('/home')
                } else {
                    req.flash('error', 'Email or password is not valid')
                    return res.redirect('/')
                }
            }
            else{
                req.flash('error', 'You are not a registered user. Please register!')
                return res.redirect('/')
            }
        } catch (error) { 
            console.log(error);
        }
    }

    static logout = async (req, res) => {
        try {
            res.redirect('/')
        } catch(error) {
            console.log(error)
        }
    }
}

module.exports = FrontController