import mongoose, { Schema, Types } from 'mongoose';

const issueSchema = new Schema({
  bookId: { type: Types.ObjectId, ref: 'Book', required: true },
  memberId: { type: Types.ObjectId, ref: 'LibraryMember', required: true },
  issueDate: { type: Date, default: Date.now },
  returnDate: { type: Date },
  status: { type: String, enum: ['issued', 'returned'], default: 'issued' },
}, { timestamps: true });

export default mongoose.model('BookIssue', issueSchema);

