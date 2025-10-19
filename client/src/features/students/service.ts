// src/features/students/service.ts

import api from '@/core/services/api';
import { Student, StudentFormData } from '@/types/student';
import { ApiResponse } from '@/types/common';

export const studentService = {
  getAll: async (): Promise<Student[]> => {
    const response = await api.get<ApiResponse<Student[]>>('/students');
    return response.data.data;
  },

  getById: async (id: string): Promise<Student> => {
    const response = await api.get<ApiResponse<Student>>(`/students/${id}`);
    return response.data.data;
  },

  create: async (data: StudentFormData): Promise<Student> => {
    const response = await api.post<ApiResponse<Student>>('/students', data);
    return response.data.data;
  },

  update: async (id: string, data: Partial<StudentFormData>): Promise<Student> => {
    const response = await api.put<ApiResponse<Student>>(`/students/${id}`, data);
    return response.data.data;
  },

  delete: async (id: string): Promise<void> => {
    await api.delete(`/students/${id}`);
  },
};
