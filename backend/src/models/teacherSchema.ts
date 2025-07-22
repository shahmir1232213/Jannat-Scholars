const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: String,
  hire_date: { type: Date },
  qualification: String,
  experience_years: Number,
  subject_specialization: String,
  status: {
    type: String,
    enum: ['active', 'inactive', 'on_leave'],
    default: 'active',
  },
});

const Teacher = mongoose.model('Teacher', teacherSchema);
export default Teacher