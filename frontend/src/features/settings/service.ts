import { http } from '@/core/services/http';

export interface SchoolSettings {
  id: string;
  schoolName: string;
  address: string;
  phone: string;
  email: string;
  website?: string;
  logo?: string;
  establishedYear: string;
  principalName: string;
  academicYearStart: string;
  academicYearEnd: string;
  currency: string;
  timezone: string;
  dateFormat: string;
  timeFormat: string;
}

export const settingsService = {
  getSettings: async (): Promise<SchoolSettings> => {
    return http.get<SchoolSettings>('/settings');
  },

  updateSettings: async (data: Partial<SchoolSettings>): Promise<SchoolSettings> => {
    return http.put<SchoolSettings>('/settings', data);
  },

  uploadLogo: async (file: File): Promise<{ url: string }> => {
    const formData = new FormData();
    formData.append('logo', file);
    return http.post<{ url: string }>('/settings/logo', formData);
  },
};
