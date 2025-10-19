import { Router } from 'express';
import { getSettings, updateSettings, uploadLogo } from '../../controllers/settings/settingsController.js';
import { requireAuth } from '../../middleware/auth.js';

const router = Router();
router.use(requireAuth);

router.get('/', getSettings);
router.put('/', updateSettings);
router.post('/logo', uploadLogo);

export default router;

