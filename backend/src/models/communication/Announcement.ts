import mongoose, { Schema } from 'mongoose';

const announcementSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  targetAudience: { type: String, enum: ['All', 'Students', 'Staff', 'Parents'], default: 'All' },
  priority: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Low' },
  publishDate: { type: Date, default: Date.now },
  expiryDate: { type: Date },
  status: { type: String, enum: ['Draft', 'Published', 'Expired'], default: 'Draft' },
  createdBy: { type: String },
}, { timestamps: true });

export default mongoose.model('Announcement', announcementSchema);

