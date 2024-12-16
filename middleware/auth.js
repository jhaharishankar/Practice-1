const jwt = require('jsonwebtoken')
const userModel = require('../models/user')
const checkAuth = async (req, res, next) => {
    // console.log("hello auth")
    const {token}= req.cookies
    // console.log(token)
    if (!token) {
        // res.flash('error', 'Unauthoried User, Please login')
        req.flash('error', 'Unauthorised user please login')
        
        res.redirect('/')
    } else {
        const verifyToken = jwt.verify(token,'abdbasdbhjb') //abdbasdbhjb secret key
        // console.log(verifyToken)
        const data =  await userModel.findOne({_id:verifyToken.ID})
        // console.log(data)
        req.userdata = data
        next()
    }

}
module.exports = checkAuth