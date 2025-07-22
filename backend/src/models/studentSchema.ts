import mongoose, { Schema } from "mongoose";

const studentSchema = new mongoose.Schema({
    studentId:{
        type:Number,
        required:true,
        unique:true
    },
    studentName:{
        type:String,
        required:true
    },
    fatherName:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    className:{
        type:String,
        required:true
    },
    classId:{
        type:Schema.Types.ObjectId,
        ref:'Class',
    },
     gender:{
        type:String,
        required:true
    },

})

const Student = mongoose.model('Student',studentSchema)
export default Student;
