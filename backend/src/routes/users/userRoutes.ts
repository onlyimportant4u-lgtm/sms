import { Router } from 'express';
import User from '../../models/user/User.js';
import { requireAuth, requireRole } from '../../middleware/auth.js';

const router = Router();

router.use(requireAuth, requireRole('admin'));

router.get('/', async (_req, res) => {
  const users = await User.find().select('-password');
  res.json({ success: true, data: users });
});

router.post('/', async (req, res) => {
  const u = await User.create(req.body);
  res.json({ success: true, data: u });
});

router.put('/:id', async (req, res) => {
  const u = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }).select('-password');
  res.json({ success: true, data: u });
});

router.delete('/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ success: true, data: null });
});

export default router;

