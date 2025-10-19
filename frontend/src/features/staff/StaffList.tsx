import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/core/ui/Table';
import { TableColumn } from '@/types/common';
import { Staff } from '@/types/staff';
import { useNavigate } from 'react-router-dom';

const columns: TableColumn[] = [
  { key: 'employeeId', label: 'Employee ID', sortable: true },
  { key: 'firstName', label: 'First Name', sortable: true },
  { key: 'lastName', label: 'Last Name', sortable: true },
  { key: 'designation', label: 'Designation', sortable: true },
  { key: 'department', label: 'Department', sortable: true },
  { key: 'phone', label: 'Phone', sortable: false },
  { key: 'email', label: 'Email', sortable: false },
  { key: 'status', label: 'Status', sortable: true },
];

const mockStaff: Staff[] = [
  {
    id: '1',
    employeeId: 'EMP001',
    firstName: 'Sarah',
    lastName: 'Williams',
    designation: 'Principal',
    department: 'Administration',
    phone: '9876543210',
    email: 'sarah.williams@school.com',
    dateOfBirth: '1975-02-20',
    gender: 'Female',
    address: '123 School St.',
    joinDate: '2010-01-15',
    qualification: 'Ph.D. Education',
    experience: '15 years',
    salary: 90000,
    status: 'Active',
  },
  {
    id: '2',
    employeeId: 'EMP002',
    firstName: 'John',
    lastName: 'Smith',
    designation: 'Math Teacher',
    department: 'Academics',
    phone: '9876543211',
    email: 'john.smith@school.com',
    dateOfBirth: '1980-06-12',
    gender: 'Male',
    address: '456 Maple Ave',
    joinDate: '2015-08-20',
    qualification: 'M.Sc. Mathematics',
    experience: '10 years',
    salary: 60000,
    status: 'Active',
  },
];

export default function StaffList() {
  const [staff] = useState<Staff[]>(mockStaff);
  const navigate = useNavigate();
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Staff</h1>
          <p className="text-muted-foreground mt-1">Manage teaching and non-teaching staff</p>
        </div>
        <Button className="gap-2" onClick={() => navigate('/staff/admission')}>
          <Plus className="h-4 w-4" />
          Add Staff
        </Button>
      </div>

      <DataTable
        columns={columns}
        data={staff}
        searchPlaceholder="Search by name, employee ID..."
      />
    </div>
  );
}
