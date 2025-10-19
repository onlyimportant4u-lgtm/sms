import mongoose, { Schema } from 'mongoose';

const memberSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String },
  type: { type: String, enum: ['Student', 'Staff', 'External'], default: 'Student' },
}, { timestamps: true });

export default mongoose.model('LibraryMember', memberSchema);

