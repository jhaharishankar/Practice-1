const jwt = require('jsonwebtoken')
const checkAuth = (req, res, next) => {
    // console.log("hello auth")
    const {token}= req.cookies
    // console.log(token)
    if (!token) {
        res.flash('error', 'Unauthoried User, Please login')
        res.redirect('/')
    } else {
        const verifyToken = jwt.verify(token,'abdbasdbhjb') //abdbasdbhjb secret key
        // console.log(verifyToken)
        next()
    }

}
module.exports = checkAuth