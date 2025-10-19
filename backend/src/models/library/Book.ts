import mongoose, { Schema } from 'mongoose';

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  isbn: { type: String, unique: true, sparse: true },
  category: { type: String },
  copies: { type: Number, default: 1 },
}, { timestamps: true });

bookSchema.index({ title: 1, author: 1 });

export default mongoose.model('Book', bookSchema);

