import { Router } from 'express';
import { exportReport, getAttendanceReport, getFeeReport } from '../../controllers/reports/reportController.js';
import { requireAuth } from '../../middleware/auth.js';

const router = Router();
router.use(requireAuth);

router.get('/fees', getFeeReport);
router.get('/attendance', getAttendanceReport);
router.get('/export', exportReport);

export default router;

