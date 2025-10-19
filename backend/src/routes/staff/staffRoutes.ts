// src/routes/staff/staffRoutes.ts

import { Router } from 'express';
import { requireAuth } from '../../middleware/auth.js';
import {
  getStaff,
  getStaffMember,
  createStaff,
  updateStaff,
  deleteStaff,
  recordAttendance,
  processPayroll
} from '../../controllers/staff/staffController.js';

const router = Router();
router.use(requireAuth);

router.get('/', getStaff);
router.get('/:id', getStaffMember);
router.post('/', createStaff);
router.put('/:id', updateStaff);
router.delete('/:id', deleteStaff);
router.post('/:id/attendance', recordAttendance);
router.post('/:id/payroll', processPayroll);

export default router;
