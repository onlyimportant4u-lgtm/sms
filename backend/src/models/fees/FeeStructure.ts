import mongoose, { Schema } from 'mongoose';

const feeStructureSchema = new Schema({
  className: { type: String, required: true },
  components: [{ name: String, amount: Number }],
}, { timestamps: true });

export default mongoose.model('FeeStructure', feeStructureSchema);

