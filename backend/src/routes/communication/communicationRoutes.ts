import { Router } from 'express';
import { createAnnouncement, deleteAnnouncement, getAnnouncements, sendEmail, sendSMS, updateAnnouncement } from '../../controllers/communication/communicationController.js';
import { requireAuth } from '../../middleware/auth.js';

const router = Router();
router.use(requireAuth);

// Announcements
router.get('/announcements', getAnnouncements);
router.post('/announcements', createAnnouncement);
router.put('/announcements/:id', updateAnnouncement);
router.delete('/announcements/:id', deleteAnnouncement);

// Email
router.post('/email/send', sendEmail);

// SMS
router.post('/sms/send', sendSMS);

export default router;

