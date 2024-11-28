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
            res.redirect('/coursedisplay')
            
        } catch (error) {
            console.log(error)
        }
    }
    static coursedisplay = async(req,res)=>{
        try {
            const {name,image,id}=req.userdata
            const course = await CourseModel.find({user_id:id})
            // console.log(course)
            res.render('course/display',{c:course,n:name,i:image, message:req.flash('success')})
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
    static courseUpdate = async (req, res) => {
        try {
            //console.log(req.params.id)
            const { name, email, phone, dob, address, gender, education, course } = req.body
            await CourseModel.findByIdAndUpdate(req.params.id, {
                name: name,
                email: email,
                phone: phone,
                dob: dob,
                gender: gender,
                address: address,
                education: education,
                course: course
            })
            //console.log(data)
            req.flash('success', 'Course Update Successfully.')
            res.redirect('/coursedisplay')
        } catch (error) {
            console.log(error)
        }
    }
    static courseDelete = async (req, res) => {
        try {
            //console.log(req.params.id)
            const { name, image } = req.userdata
            await CourseModel.findByIdAndDelete(req.params.id)
            //console.log(data)
            req.flash('success', 'Course Delete Successfully.')
            res.redirect('/coursedisplay')
        } catch (error) {
            console.log(error)
        }
    }
    
}

module.exports = CourseController