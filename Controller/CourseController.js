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
    static coursedisplay = async(req,res)=>{
        try {
            const {name,image,id}=req.userdata
            const course = await CourseModel.find({user_id:id})
            // console.log(course)
            res.render('course/display',{c:course,n:name,i:image})
        } catch (error) {
            console.log(error)
        }
    }
    static courseView =async(req,res)=>{
        try{
            //console.log(req.params.id)
            const { name, image ,role} = req.userdata
            const data =await CourseModel.findById(req.params.id)
            //console.log(data)
            res.render('course/view',{n:name,i:image,d:data,r:role})
        }catch(error){
            console.log(error)
        }
    }

    static courseEdit =async(req,res)=>{
        try{
            //console.log(req.params.id)
            const { name, image,role } = req.userdata
            const data =await CourseModel.findById(req.params.id)
            //console.log(data)
            res.render('course/edit',{n:name,i:image,d:data,r:role})
        }catch(error){
            console.log(error)
        }
    }
}

module.exports = CourseController