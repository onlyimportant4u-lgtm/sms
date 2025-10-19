// src/routes/student/studentRoutes.ts

import { Router } from 'express';
import { requireAuth } from '../../middleware/auth.js';
import {
  getStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
  promoteStudents,
  generateTC,
  getReportCard
} from '../../controllers/student/studentController.js';

const router = Router();
router.use(requireAuth);

router.get('/', getStudents);
router.get('/:id', getStudent);
router.post('/', createStudent);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);
router.post('/promote', promoteStudents);
router.post('/:id/tc', generateTC);
router.get('/:id/report-card', getReportCard);

export default router;
