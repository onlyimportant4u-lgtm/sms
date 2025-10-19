export interface Staff {
  id: string;
  employeeId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: 'Male' | 'Female' | 'Other';
  address: string;
  designation: string;
  department: string;
  joinDate: string;
  qualification: string;
  experience: string;
  salary: number;
  status: 'Active' | 'Inactive' | 'On Leave';
  photoUrl?: string;
  emergencyContact?: string;
  emergencyContactName?: string;
}

export interface StaffFormData extends Omit<Staff, 'id'> {}

export interface StaffAttendance {
  id: string;
  staffId: string;
  staffName: string;
  date: string;
  status: 'Present' | 'Absent' | 'Late' | 'Half Day' | 'Leave';
  checkIn?: string;
  checkOut?: string;
  notes?: string;
}
