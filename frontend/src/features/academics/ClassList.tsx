import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/core/ui/Table';
import { TableColumn } from '@/types/common';

const columns: TableColumn[] = [
  { key: 'className', label: 'Class Name', sortable: true },
  { key: 'sections', label: 'Sections', sortable: false },
  { key: 'totalStudents', label: 'Total Students', sortable: true },
  { key: 'classTeacher', label: 'Class Teacher', sortable: true },
  { key: 'academicYear', label: 'Academic Year', sortable: true },
];

const mockClasses = [
  {
    id: '1',
    className: 'Class 10',
    sections: 'A, B, C',
    totalStudents: 150,
    classTeacher: 'John Smith',
    academicYear: '2024-2025',
  },
  {
    id: '2',
    className: 'Class 9',
    sections: 'A, B',
    totalStudents: 100,
    classTeacher: 'Sarah Williams',
    academicYear: '2024-2025',
  },
];

export default function ClassList() {
  const [classes] = useState(mockClasses);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Classes & Sections</h1>
          <p className="text-muted-foreground mt-1">
            Manage academic classes and sections
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Class
        </Button>
      </div>

      <DataTable
        columns={columns}
        data={classes}
        searchPlaceholder="Search classes..."
      />
    </div>
  );
}
