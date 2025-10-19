import { Router } from 'express';
import { getAttendanceSummary, getStudentAttendance, markAttendanceBulk } from '../../controllers/attendance/attendanceController.js';
import { validate } from '../../middleware/validate.js';
import { markAttendanceBulkSchema } from '../../validators/attendance.js';
import { requireAuth } from '../../middleware/auth.js';

const router = Router();
router.use(requireAuth);

router.get('/students', getStudentAttendance);
router.post('/students/bulk', validate(markAttendanceBulkSchema), markAttendanceBulk);
router.get('/students/:id/summary', getAttendanceSummary);

export default router;

