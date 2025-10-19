import type { Request, Response } from 'express';
import FeeCollection from '../../models/fees/FeeCollection.js';
import FeeStructure from '../../models/fees/FeeStructure.js';
import FeeType from '../../models/fees/FeeType.js';

export const getCollections = async (_: Request, res: Response) => {
  const data = await FeeCollection.find();
  res.json({ success: true, data });
};

export const getStructures = async (_: Request, res: Response) => {
  const data = await FeeStructure.find();
  res.json({ success: true, data });
};

export const getTypes = async (_: Request, res: Response) => {
  const data = await FeeType.find();
  res.json({ success: true, data });
};

export const collectFee = async (req: Request, res: Response) => {
  const created = await FeeCollection.create(req.body);
  res.json({ success: true, data: created });
};

export const getReceipt = async (_: Request, res: Response) => {
  res.setHeader('Content-Type', 'application/pdf');
  res.send('%PDF-1.4\n% Stub receipt');
};

