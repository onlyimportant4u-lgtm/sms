// src/controllers/staff/staffController.ts

import Staff from '../../models/staff/Staff.js';
import type { Request, Response } from 'express';

export const getStaff = async (_: Request, res: Response) => {
  const staff = await Staff.find();
  res.json({ success: true, data: staff });
};

export const getStaffMember = async (req: Request, res: Response) => {
  const staff = await Staff.findById(req.params.id);
  res.json({ success: true, data: staff });
};

export const createStaff = async (req: Request, res: Response) => {
  const staff = new Staff(req.body);
  await staff.save();
  res.json({ success: true, data: staff });
};

export const updateStaff = async (req: Request, res: Response) => {
  const staff = await Staff.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ success: true, data: staff });
};

export const deleteStaff = async (req: Request, res: Response) => {
  await Staff.findByIdAndDelete(req.params.id);
  res.json({ success: true, data: null });
};

export const recordAttendance = async (req: Request, res: Response) => {
  await Staff.findByIdAndUpdate(req.params.id, { $push: { attendance: { date: req.body.date } } });
  res.json({ success: true, data: null });
};

export const processPayroll = async (req: Request, res: Response) => {
  await Staff.findByIdAndUpdate(req.params.id, { payrollProcessed: true });
  res.json({ success: true, data: null });
};
