// models/student/Student.ts

import mongoose, { Schema } from 'mongoose';

const studentSchema = new Schema({
  name: { type: String, required: true },
  class: { type: String, required: true },
  dob: { type: String, required: true },
  promoted: { type: Boolean, default: false },
  tcIssued: { type: Boolean, default: false }
});

studentSchema.index({ name: 'text', class: 1 });

export default mongoose.model('Student', studentSchema);
