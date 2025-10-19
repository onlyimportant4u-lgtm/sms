import type { Request, Response } from 'express';

export const getClasses = async (_: Request, res: Response) => res.json({ success: true, data: [] });
export const getClassById = async (_: Request, res: Response) => res.json({ success: true, data: null });
export const createClass = async (req: Request, res: Response) => res.json({ success: true, data: { id: 'class_1', ...req.body } });
export const updateClass = async (req: Request, res: Response) => res.json({ success: true, data: { id: req.params.id, ...req.body } });
export const deleteClass = async (_: Request, res: Response) => res.json({ success: true, data: null });
export const getSections = async (_: Request, res: Response) => res.json({ success: true, data: [] });

