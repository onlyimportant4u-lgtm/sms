import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import connectDB from '../config/db.js';
import Student from '../models/student/Student.js';
import Staff from '../models/staff/Staff.js';
import Book from '../models/library/Book.js';
import LibraryMember from '../models/library/Member.js';
import Exam from '../models/exams/Exam.js';
import User from '../models/user/User.js';

async function run() {
  await connectDB();

  await Promise.all([
    Student.deleteMany({}),
    Staff.deleteMany({}),
    Book.deleteMany({}),
    LibraryMember.deleteMany({}),
    Exam.deleteMany({}),
    User.deleteMany({}),
  ]);

  const students = await Student.insertMany([
    { name: 'Alice', class: '10-A', dob: '2009-01-01' },
    { name: 'Bob', class: '10-A', dob: '2009-02-02' },
  ]);

  const staff = await Staff.insertMany([
    { name: 'Mr. Smith', role: 'Teacher', doj: '2018-06-10' },
    { name: 'Ms. Lee', role: 'Librarian', doj: '2019-08-15' },
  ]);

  await Book.insertMany([
    { title: 'Mathematics Grade 10', author: 'Author A', isbn: 'ISBN-001', category: 'Textbook', copies: 5 },
    { title: 'Science Grade 10', author: 'Author B', isbn: 'ISBN-002', category: 'Textbook', copies: 3 },
  ]);

  await LibraryMember.insertMany([
    { name: students[0]?.name || 'Student Member', type: 'Student' },
    { name: staff[1]?.name || 'Staff Member', type: 'Staff' },
  ]);

  await Exam.insertMany([
    { name: 'Midterm', date: new Date(), className: '10-A' },
  ]);

  await User.insertMany([
    { name: 'Admin', email: 'admin@example.com', password: 'Admin@123', role: 'admin' },
    { name: 'Teacher', email: 'teacher@example.com', password: 'Teacher@123', role: 'staff' },
  ]);

  console.log('Seed completed');
  await mongoose.disconnect();
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});

