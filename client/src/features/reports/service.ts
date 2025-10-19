import { http } from '@/core/services/http';

export interface ReportData {
  labels: string[];
  values: number[];
}

export interface FeeReport {
  totalExpected: number;
  totalCollected: number;
  totalPending: number;
  collectionRate: number;
  monthlyData: ReportData;
}

export interface AttendanceReport {
  averageAttendance: number;
  totalPresent: number;
  totalAbsent: number;
  monthlyData: ReportData;
}

export const reportService = {
  getFeeReport: async (startDate: string, endDate: string): Promise<FeeReport> => {
    return http.get<FeeReport>(`/reports/fees?start=${startDate}&end=${endDate}`);
  },

  getAttendanceReport: async (startDate: string, endDate: string): Promise<AttendanceReport> => {
    return http.get<AttendanceReport>(`/reports/attendance?start=${startDate}&end=${endDate}`);
  },

  exportReport: async (type: string, format: 'pdf' | 'excel'): Promise<Blob> => {
    const response = await http.get(`/reports/export?type=${type}&format=${format}`);
    return response as unknown as Blob;
  },
};
