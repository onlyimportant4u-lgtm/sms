// src/features/students/StudentList.tsx

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/core/ui/Table';
import { TableColumn } from '@/types/common';
import { Student } from '@/types/student';
import { useNavigate } from 'react-router-dom';

const columns: TableColumn[] = [
  { key: 'admissionNo', label: 'Admission No', sortable: true },
  { key: 'firstName', label: 'First Name', sortable: true },
  { key: 'lastName', label: 'Last Name', sortable: true },
  { key: 'className', label: 'Class', sortable: true },
  { key: 'section', label: 'Section', sortable: true },
  { key: 'rollNo', label: 'Roll No', sortable: true },
  { key: 'status', label: 'Status', sortable: true },
];

const mockStudents: Student[] = [
  {
    id: '1',
    admissionNo: 'ADM001',
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: '2010-05-15',
    gender: 'Male',
    email: 'john.doe@example.com',
    phone: '1234567890',
    address: '123 Main St, City',
    className: 'Class 10',
    section: 'A',
    rollNo: '15',
    admissionDate: '2024-04-01',
    status: 'Active',
    guardianName: 'Robert Doe',
    guardianPhone: '9876543210',
    guardianEmail: 'robert.doe@example.com',
  },
  {
    id: '2',
    admissionNo: 'ADM002',
    firstName: 'Jane',
    lastName: 'Smith',
    dateOfBirth: '2010-08-22',
    gender: 'Female',
    email: 'jane.smith@example.com',
    phone: '1234567891',
    address: '456 Oak Ave, City',
    className: 'Class 10',
    section: 'B',
    rollNo: '12',
    admissionDate: '2024-04-01',
    status: 'Active',
    guardianName: 'Michael Smith',
    guardianPhone: '9876543211',
    guardianEmail: 'michael.smith@example.com',
  },
  {
    id: '3',
    admissionNo: 'ADM003',
    firstName: 'Alice',
    lastName: 'Johnson',
    dateOfBirth: '2011-03-10',
    gender: 'Female',
    email: 'alice.johnson@example.com',
    phone: '1234567892',
    address: '789 Pine Rd, City',
    className: 'Class 9',
    section: 'A',
    rollNo: '8',
    admissionDate: '2024-04-01',
    status: 'Active',
    guardianName: 'David Johnson',
    guardianPhone: '9876543212',
    guardianEmail: 'david.johnson@example.com',
  },
];

export default function StudentList() {
  const [students] = useState<Student[]>(mockStudents);
  const navigate = useNavigate();
  
  const handleEdit = (student: Student) => {
    console.log('Edit student:', student);
  };

  const handleDelete = (student: Student) => {
    console.log('Delete student:', student);
  };

  const handleView = (student: Student) => {
    console.log('View student:', student);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Students</h1>
          <p className="text-muted-foreground mt-1">
            Manage student records and information
          </p>
        </div>
        <Button className="gap-2" onClick={() => navigate('/students/admission')}>
          <Plus className="h-4 w-4" />
          Add Student
        </Button>
      </div>

      <DataTable
        columns={columns}
        data={students}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
        searchPlaceholder="Search by name, admission no..."
      />
    </div>
  );
}
