import { http } from '@/core/services/http';

export interface StudentAttendanceRecord {
  id: string;
  studentId: string;
  studentName: string;
  className: string;
  section: string;
  date: string;
  status: 'Present' | 'Absent' | 'Late' | 'Half Day' | 'Leave';
  remarks?: string;
}

export const attendanceService = {
  getStudentAttendance: async (date?: string): Promise<StudentAttendanceRecord[]> => {
    const url = date ? `/attendance/students?date=${date}` : '/attendance/students';
    return http.get<StudentAttendanceRecord[]>(url);
  },

  markAttendance: async (data: Partial<StudentAttendanceRecord>[]): Promise<void> => {
    return http.post('/attendance/students/bulk', { records: data });
  },

  getAttendanceSummary: async (studentId: string, startDate: string, endDate: string) => {
    return http.get(`/attendance/students/${studentId}/summary?start=${startDate}&end=${endDate}`);
  },
};
