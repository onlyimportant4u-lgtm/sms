import { http } from '@/core/services/http';
import { Staff, StaffFormData } from '@/types/staff';

export const staffService = {
  getAll: async (): Promise<Staff[]> => {
    return http.get<Staff[]>('/staff');
  },

  getById: async (id: string): Promise<Staff> => {
    return http.get<Staff>(`/staff/${id}`);
  },

  create: async (data: StaffFormData): Promise<Staff> => {
    return http.post<Staff>('/staff', data);
  },

  update: async (id: string, data: Partial<StaffFormData>): Promise<Staff> => {
    return http.put<Staff>(`/staff/${id}`, data);
  },

  delete: async (id: string): Promise<void> => {
    return http.delete(`/staff/${id}`);
  },
};
