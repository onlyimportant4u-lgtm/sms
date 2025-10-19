import { Router } from 'express';
import { getCollections, getStructures, getTypes, collectFee, getReceipt } from '../../controllers/fees/feeController.js';
import { validate } from '../../middleware/validate.js';
import { requireAuth } from '../../middleware/auth.js';
import { collectFeeSchema } from '../../validators/fees.js';

const router = Router();
router.use(requireAuth);

router.get('/collections', getCollections);
router.get('/structures', getStructures);
router.get('/types', getTypes);
router.post('/collect', validate(collectFeeSchema), collectFee);
router.get('/receipt/:id', getReceipt);

export default router;

