// models/staff/staff.ts

import mongoose, { Schema } from 'mongoose';

const staffSchema = new Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  doj: { type: String, required: true },
  attendance: [{ date: String }],
  payrollProcessed: { type: Boolean, default: false }
});

staffSchema.index({ name: 'text', role: 1 });

export default mongoose.model('Staff', staffSchema);
