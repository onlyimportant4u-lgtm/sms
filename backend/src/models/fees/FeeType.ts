import mongoose, { Schema } from 'mongoose';

const feeTypeSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
}, { timestamps: true });

export default mongoose.model('FeeType', feeTypeSchema);

