import mongoose, { Schema, Types } from 'mongoose';

const feeCollectionSchema = new Schema({
  studentId: { type: Types.ObjectId, ref: 'Student', required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  receiptNo: { type: String },
}, { timestamps: true });

export default mongoose.model('FeeCollection', feeCollectionSchema);

