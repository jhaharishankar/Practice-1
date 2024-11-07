const CourseModel = require('../models/course')
class CourseController{

    static courseinsert = async(req,res)=>{
        try {
            // console.log(req.body)
            const { id } = req.userdata
            const {name,email,phone,dob,address,gender,education,course} =req.body
            const result =new CourseModel({
                name:name,
                email:email,
                phone:phone,
                dob:dob,
                gender:gender,
                address:address,
                education:education,
                course:course,
                user_id:id

            })
            await result.save()
            res.redirect('/home')
            
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = CourseController