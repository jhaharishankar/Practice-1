const mongoose = require('mongoose')
const Local_Url = 'mongodb://127.0.0.1:27017/PracticeExpressJS'
const Live_Url ='mongodb+srv://harishankarjha21:AFWftejYb5luHTXs@cluster0.n0i7p.mongodb.net/PracticeExpressJS?retryWrites=true&w=majority&appName=Cluster0'

const connectDb =()=>{
    return mongoose.connect(Live_Url)
    .then(()=>{
        console.log('connect db')
    }).catch((error)=>{
        console.log(error)
    })
}
module.exports =connectDb