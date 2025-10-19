import { Router } from 'express';
import { getRoutes, getStops, getVehicles } from '../../controllers/transport/transportController.js';
import { requireAuth } from '../../middleware/auth.js';

const router = Router();
router.use(requireAuth);

router.get('/routes', getRoutes);
router.get('/vehicles', getVehicles);
router.get('/stops', getStops);

export default router;

