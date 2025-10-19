import { Router } from 'express';
import { create, getAll, getById, getResults, remove, submitResult, update } from '../../controllers/exams/examController.js';
import { validate } from '../../middleware/validate.js';
import { createExamSchema, submitResultSchema } from '../../validators/exams.js';
import { requireAuth } from '../../middleware/auth.js';

const router = Router();
router.use(requireAuth);

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', validate(createExamSchema), create);
router.put('/:id', update);
router.delete('/:id', remove);

router.get('/:id/results', getResults);
router.post('/results', validate(submitResultSchema), submitResult);

export default router;

