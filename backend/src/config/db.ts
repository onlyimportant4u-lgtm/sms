// src/config/db.js

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/sms-jkg";
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    if (err instanceof Error) {
      console.error(`MongoDB Connection Error: ${err.message}`);
    } else {
      console.error(`MongoDB Connection Error: ${JSON.stringify(err)}`);
    }
    process.exit(1);
  }
};

export default connectDB;
