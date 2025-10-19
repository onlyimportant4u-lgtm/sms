import { Router } from 'express';
import { changePassword, forgotPassword, login, logout, me, refresh, register, updateProfile } from '../../controllers/auth/authController.js';
import { requireAuth } from '../../middleware/auth.js';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/me', requireAuth, me);
router.post('/refresh', refresh);
router.put('/profile', requireAuth, updateProfile);
router.post('/change-password', requireAuth, changePassword);
router.post('/forgot-password', forgotPassword);

export default router;

