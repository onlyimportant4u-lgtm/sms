import { http } from '@/core/services/http';
import { Exam, ExamResult, ReportCard } from '@/types/exam';

export const examService = {
  getAll: async (): Promise<Exam[]> => {
    return http.get<Exam[]>('/exams');
  },

  getById: async (id: string): Promise<Exam> => {
    return http.get<Exam>(`/exams/${id}`);
  },

  create: async (data: Partial<Exam>): Promise<Exam> => {
    return http.post<Exam>('/exams', data);
  },

  update: async (id: string, data: Partial<Exam>): Promise<Exam> => {
    return http.put<Exam>(`/exams/${id}`, data);
  },

  delete: async (id: string): Promise<void> => {
    return http.delete(`/exams/${id}`);
  },

  getResults: async (examId: string): Promise<ExamResult[]> => {
    return http.get<ExamResult[]>(`/exams/${examId}/results`);
  },

  submitResult: async (data: Partial<ExamResult>): Promise<ExamResult> => {
    return http.post<ExamResult>('/exams/results', data);
  },

  getReportCard: async (studentId: string, examType: string): Promise<ReportCard> => {
    return http.get<ReportCard>(`/students/${studentId}/report-card?examType=${examType}`);
  },
};
