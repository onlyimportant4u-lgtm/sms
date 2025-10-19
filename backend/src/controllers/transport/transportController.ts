import type { Request, Response } from 'express';

export const getRoutes = async (_: Request, res: Response) => res.json({ success: true, data: [] });
export const getVehicles = async (_: Request, res: Response) => res.json({ success: true, data: [] });
export const getStops = async (_: Request, res: Response) => res.json({ success: true, data: [] });

