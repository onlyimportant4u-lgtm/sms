import mongoose, { Schema } from 'mongoose';

const examSchema = new Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  className: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('Exam', examSchema);

