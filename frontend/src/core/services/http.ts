import api from './api';
import { ApiResponse } from '@/types/common';

export const http = {
  async get<T>(url: string): Promise<T> {
    const response = await api.get<ApiResponse<T>>(url);
    return response.data.data;
  },

  async post<T>(url: string, data?: any): Promise<T> {
    const response = await api.post<ApiResponse<T>>(url, data);
    return response.data.data;
  },

  async put<T>(url: string, data?: any): Promise<T> {
    const response = await api.put<ApiResponse<T>>(url, data);
    return response.data.data;
  },

  async patch<T>(url: string, data?: any): Promise<T> {
    const response = await api.patch<ApiResponse<T>>(url, data);
    return response.data.data;
  },

  async delete<T>(url: string): Promise<T> {
    const response = await api.delete<ApiResponse<T>>(url);
    return response.data.data;
  },
};
