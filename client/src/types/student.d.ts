export interface Student {
  id: string;
  admissionNo: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: 'Male' | 'Female' | 'Other';
  email?: string;
  phone?: string;
  address: string;
  className: string;
  section: string;
  rollNo: string;
  admissionDate: string;
  status: 'Active' | 'Inactive' | 'Transferred';
  guardianName: string;
  guardianPhone: string;
  guardianEmail?: string;
  photoUrl?: string;
}

export interface StudentFormData extends Omit<Student, 'id'> {}
