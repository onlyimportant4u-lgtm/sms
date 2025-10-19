import type { Request, Response } from 'express';
import StudentAttendance from '../../models/attendance/StudentAttendance.js';

export const getStudentAttendance = async (req: Request, res: Response) => {
  const { date } = req.query as { date?: string };
  const filter = date ? { date: new Date(date) } : {};
  const data = await StudentAttendance.find(filter);
  res.json({ success: true, data });
};

export const markAttendanceBulk = async (req: Request, res: Response) => {
  const { records } = req.body as { records: Array<{ studentId: string; date: string; status: string; remarks?: string }> };
  if (Array.isArray(records) && records.length > 0) {
    await StudentAttendance.insertMany(records.map(r => ({ ...r, date: new Date(r.date) })));
  }
  res.json({ success: true, data: null });
};

export const getAttendanceSummary = async (req: Request, res: Response) => {
  const { start, end } = req.query as { start: string; end: string };
  const studentId = req.params.id;
  const startDate = new Date(start);
  const endDate = new Date(end);
  const data = await StudentAttendance.find({ studentId, date: { $gte: startDate, $lte: endDate } });
  const total = data.length;
  const present = data.filter(d => d.status === 'Present').length;
  const averageAttendance = total ? Math.round((present / total) * 100) : 0;
  res.json({ success: true, data: { averageAttendance, totalPresent: present, totalAbsent: total - present } });
};

