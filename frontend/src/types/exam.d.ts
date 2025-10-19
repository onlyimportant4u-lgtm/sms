export interface Exam {
  id: string;
  examType: string;
  className: string;
  section: string;
  subject: string;
  date: string;
  startTime: string;
  endTime: string;
  maxMarks: number;
  passingMarks: number;
  room: string;
  invigilator: string;
  status: 'Scheduled' | 'Ongoing' | 'Completed' | 'Cancelled';
}

export interface ExamResult {
  id: string;
  examId: string;
  studentId: string;
  studentName: string;
  admissionNo: string;
  marksObtained: number;
  maxMarks: number;
  percentage: number;
  grade: string;
  remarks?: string;
}

export interface ReportCard {
  studentId: string;
  studentName: string;
  className: string;
  section: string;
  examType: string;
  subjects: {
    name: string;
    marks: number;
    maxMarks: number;
    grade: string;
  }[];
  totalMarks: number;
  maxTotalMarks: number;
  percentage: number;
  overallGrade: string;
  rank: number;
  attendance: string;
}
