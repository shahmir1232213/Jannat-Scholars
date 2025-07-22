import mongoose, { mongo } from "mongoose";

const subjectSchema = new mongoose.Schema({
    subjectID:String,
    subjectName:String,
})

const Subjects = mongoose.model('subjects',subjectSchema)
export default Subjects;