import { http } from '@/core/services/http';

export interface Announcement {
  id: string;
  title: string;
  content: string;
  targetAudience: 'All' | 'Students' | 'Staff' | 'Parents';
  priority: 'Low' | 'Medium' | 'High';
  publishDate: string;
  expiryDate?: string;
  status: 'Draft' | 'Published' | 'Expired';
  createdBy: string;
}

export interface EmailMessage {
  to: string[];
  subject: string;
  body: string;
  attachments?: File[];
}

export const communicationService = {
  // Announcements
  getAllAnnouncements: async (): Promise<Announcement[]> => {
    return http.get<Announcement[]>('/communication/announcements');
  },

  createAnnouncement: async (data: Partial<Announcement>): Promise<Announcement> => {
    return http.post<Announcement>('/communication/announcements', data);
  },

  updateAnnouncement: async (id: string, data: Partial<Announcement>): Promise<Announcement> => {
    return http.put<Announcement>(`/communication/announcements/${id}`, data);
  },

  deleteAnnouncement: async (id: string): Promise<void> => {
    return http.delete(`/communication/announcements/${id}`);
  },

  // Email
  sendEmail: async (data: EmailMessage): Promise<void> => {
    return http.post('/communication/email/send', data);
  },

  // SMS
  sendSMS: async (data: { to: string[]; message: string }): Promise<void> => {
    return http.post('/communication/sms/send', data);
  },
};
