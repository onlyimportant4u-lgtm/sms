import { Router } from 'express';
import { createClass, deleteClass, getClassById, getClasses, getSections, updateClass } from '../../controllers/academics/academicController.js';

const router = Router();

router.get('/classes', getClasses);
router.get('/classes/:id', getClassById);
router.post('/classes', createClass);
router.put('/classes/:id', updateClass);
router.delete('/classes/:id', deleteClass);
router.get('/classes/:id/sections', getSections);

export default router;

