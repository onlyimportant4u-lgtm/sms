import { http } from '@/core/services/http';

export interface Class {
  id: string;
  className: string;
  sections: string[];
  totalStudents: number;
  classTeacher: string;
  academicYear: string;
  subjects: string[];
}

export interface Section {
  id: string;
  classId: string;
  sectionName: string;
  capacity: number;
  currentStrength: number;
  classTeacher: string;
}

export const academicService = {
  getAllClasses: async (): Promise<Class[]> => {
    return http.get<Class[]>('/academics/classes');
  },

  getClassById: async (id: string): Promise<Class> => {
    return http.get<Class>(`/academics/classes/${id}`);
  },

  createClass: async (data: Partial<Class>): Promise<Class> => {
    return http.post<Class>('/academics/classes', data);
  },

  updateClass: async (id: string, data: Partial<Class>): Promise<Class> => {
    return http.put<Class>(`/academics/classes/${id}`, data);
  },

  deleteClass: async (id: string): Promise<void> => {
    return http.delete(`/academics/classes/${id}`);
  },

  getSections: async (classId: string): Promise<Section[]> => {
    return http.get<Section[]>(`/academics/classes/${classId}/sections`);
  },
};
