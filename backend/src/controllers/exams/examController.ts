import type { Request, Response } from 'express';
import Exam from '../../models/exams/Exam.js';
import ExamResult from '../../models/exams/ExamResult.js';

export const getAll = async (_: Request, res: Response) => {
  const data = await Exam.find();
  res.json({ success: true, data });
};

export const getById = async (req: Request, res: Response) => {
  const data = await Exam.findById(req.params.id);
  res.json({ success: true, data });
};

export const create = async (req: Request, res: Response) => {
  const created = await Exam.create(req.body);
  res.json({ success: true, data: created });
};

export const update = async (req: Request, res: Response) => {
  const updated = await Exam.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ success: true, data: updated });
};

export const remove = async (req: Request, res: Response) => {
  await Exam.findByIdAndDelete(req.params.id);
  res.json({ success: true, data: null });
};

export const getResults = async (req: Request, res: Response) => {
  const data = await ExamResult.find({ examId: req.params.id });
  res.json({ success: true, data });
};

export const submitResult = async (req: Request, res: Response) => {
  const created = await ExamResult.create(req.body);
  res.json({ success: true, data: created });
};

