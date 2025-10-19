import type { Request, Response } from 'express';

export const getAnnouncements = async (_: Request, res: Response) => res.json({ success: true, data: [] });
export const createAnnouncement = async (req: Request, res: Response) => res.json({ success: true, data: { id: 'ann_1', ...req.body } });
export const updateAnnouncement = async (req: Request, res: Response) => res.json({ success: true, data: { id: req.params.id, ...req.body } });
export const deleteAnnouncement = async (_: Request, res: Response) => res.json({ success: true, data: null });
export const sendEmail = async (_: Request, res: Response) => res.json({ success: true, data: null });
export const sendSMS = async (_: Request, res: Response) => res.json({ success: true, data: null });

