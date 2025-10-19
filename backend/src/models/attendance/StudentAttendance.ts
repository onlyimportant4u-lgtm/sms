import mongoose, { Schema, Types } from 'mongoose';

const studentAttendanceSchema = new Schema({
  studentId: { type: Types.ObjectId, ref: 'Student', required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ['Present', 'Absent', 'Late', 'Half Day', 'Leave'], required: true },
  remarks: { type: String },
}, { timestamps: true });

export default mongoose.model('StudentAttendance', studentAttendanceSchema);

