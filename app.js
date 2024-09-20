const express = require('express')
const app = express()
const port = 4000
const web = require('./routing/web')
const connectDb = require('./db/connectDb')

// ejs a.ejs
app.set('view engine', 'ejs')

// connct db
connectDb()

// css image link
app.use(express.static('public'))


// localhost:4000 router load
app.use('/',web)

// server start
app.listen(port,console.log("server start local host 4000"))