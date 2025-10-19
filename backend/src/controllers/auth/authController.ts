import type { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../../models/user/User.js';

const signToken = (user: { id: string; email: string; role: string }) => {
  const secret = process.env.JWT_SECRET || 'dev-secret';
  return jwt.sign(user, secret, { expiresIn: '1h' });
};

export const register = async (req: Request, res: Response) => {
  const { name, email, password, role } = req.body;
  const exists = await User.findOne({ email });
  if (exists) return res.status(409).json({ success: false, message: 'Email already registered', data: null });
  const user = await User.create({ name, email, password, role });
  const token = signToken({ id: user.id, email: user.email, role: user.role });
  res.json({ success: true, data: { user, token, refreshToken: 'stub-refresh' } });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body || {};
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ success: false, message: 'Invalid credentials', data: null });
  const ok = await (user as any).comparePassword(password);
  if (!ok) return res.status(401).json({ success: false, message: 'Invalid credentials', data: null });
  const token = signToken({ id: user.id, email: user.email, role: user.role });
  res.json({ success: true, data: { user, token, refreshToken: 'stub-refresh' } });
};

export const logout = async (_: Request, res: Response) => res.json({ success: true, data: null });
export const me = async (req: Request, res: Response) => {
  const userId = (req as any).user?.id || null;
  const user = userId ? await User.findById(userId).select('-password') : null;
  res.json({ success: true, data: user });
};
export const refresh = async (req: Request, res: Response) => {
  const { token: _old } = req.body || {};
  // In real impl, verify refresh token
  const token = signToken({ id: 'u_1', email: 'demo@example.com', role: 'admin' });
  res.json({ success: true, data: { token } });
};
export const updateProfile = async (req: Request, res: Response) => {
  const userId = (req as any).user?.id;
  const user = await User.findByIdAndUpdate(userId, req.body, { new: true }).select('-password');
  res.json({ success: true, data: user });
};
export const changePassword = async (req: Request, res: Response) => {
  const userId = (req as any).user?.id;
  const { currentPassword, newPassword } = req.body;
  const user: any = await User.findById(userId);
  if (!user) return res.status(404).json({ success: false, message: 'User not found', data: null });
  const ok = await user.comparePassword(currentPassword);
  if (!ok) return res.status(400).json({ success: false, message: 'Current password incorrect', data: null });
  user.password = newPassword;
  await user.save();
  res.json({ success: true, data: null });
};
export const forgotPassword = async (_: Request, res: Response) => res.json({ success: true, data: null });

