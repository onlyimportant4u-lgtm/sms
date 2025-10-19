import api from '@/core/services/api';
import { FeeCollection, FeeStructure, FeeType } from '@/types/fee';
import { ApiResponse } from '@/types/common';

export const feeService = {
  getFeeCollections: async (): Promise<FeeCollection[]> => {
    const response = await api.get<ApiResponse<FeeCollection[]>>('/fees/collections');
    return response.data.data;
  },

  getFeeStructures: async (): Promise<FeeStructure[]> => {
    const response = await api.get<ApiResponse<FeeStructure[]>>('/fees/structures');
    return response.data.data;
  },

  getFeeTypes: async (): Promise<FeeType[]> => {
    const response = await api.get<ApiResponse<FeeType[]>>('/fees/types');
    return response.data.data;
  },

  collectFee: async (data: Partial<FeeCollection>): Promise<FeeCollection> => {
    const response = await api.post<ApiResponse<FeeCollection>>('/fees/collect', data);
    return response.data.data;
  },

  generateReceipt: async (collectionId: string): Promise<Blob> => {
    const response = await api.get(`/fees/receipt/${collectionId}`, {
      responseType: 'blob',
    });
    return response.data;
  },
};
