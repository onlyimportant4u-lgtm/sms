import mongoose, { Schema, Types } from 'mongoose';

const examResultSchema = new Schema({
  examId: { type: Types.ObjectId, ref: 'Exam', required: true },
  studentId: { type: Types.ObjectId, ref: 'Student', required: true },
  subject: { type: String, required: true },
  marks: { type: Number, required: true },
}, { timestamps: true });

export default mongoose.model('ExamResult', examResultSchema);

