const express = require('express')
const app = express()
const port = 4000
const web = require('./routing/web')
const connectDb = require('./db/connectDb')
// image upload 
const fileUpload = require('express-fileupload')

var cookieParser = require('cookie-parser')
app.use(cookieParser())
// image upload
app.use(fileUpload({
  useTempFiles : true,
  tempFileDir : '/tmp/'
}));

// ejs a.ejs
app.set('view engine', 'ejs')

// connct db
connectDb()

// css image link
app.use(express.static('public'))

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

//connect flash and sessions
const session = require('express-session')
const flash = require('connect-flash');
//messages
app.use(session({
    secret: 'secret',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false,
  }));
//Flash messages
app.use(flash());

// localhost:4000 router load
app.use('/',web)

// server start
app.listen(port,console.log("server start local host 4000"))