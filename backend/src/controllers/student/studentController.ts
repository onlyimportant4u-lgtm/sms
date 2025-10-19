// src/controllers/student/studentController.ts

import Student from '../../models/student/Student.js';
import type { Request, Response } from 'express';

export const getStudents = async (_: Request, res: Response) => {
  const students = await Student.find();
  res.json({ success: true, data: students });
};

export const getStudent = async (req: Request, res: Response) => {
  const student = await Student.findById(req.params.id);
  res.json({ success: true, data: student });
};

export const createStudent = async (req: Request, res: Response) => {
  const student = new Student(req.body);
  await student.save();
  res.json({ success: true, data: student });
};

export const updateStudent = async (req: Request, res: Response) => {
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ success: true, data: student });
};

export const deleteStudent = async (req: Request, res: Response) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ success: true, data: null });
};

export const promoteStudents = async (req: Request, res: Response) => {
  await Student.updateMany({ _id: { $in: req.body.ids } }, { promoted: true });
  res.json({ success: true, data: null });
};

export const generateTC = async (req: Request, res: Response) => {
  await Student.findByIdAndUpdate(req.params.id, { tcIssued: true });
  res.json({ success: true, data: null });
};

export const getReportCard = async (req: Request, res: Response) => {
  res.json({ success: true, data: { studentId: req.params.id, exams: [] } });
};
