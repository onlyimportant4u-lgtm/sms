import type { Request, Response } from 'express';

let settings = {
  id: 'settings_1',
  schoolName: 'Your School',
};

export const getSettings = async (_: Request, res: Response) => res.json({ success: true, data: settings });
export const updateSettings = async (req: Request, res: Response) => {
  settings = { ...settings, ...req.body };
  res.json({ success: true, data: settings });
};
export const uploadLogo = async (_: Request, res: Response) => res.json({ success: true, data: { url: 'https://example.com/logo.png' } });

