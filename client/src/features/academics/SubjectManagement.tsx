import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/core/ui/Table';
import { TableColumn } from '@/types/common';

const columns: TableColumn[] = [
  { key: 'subjectCode', label: 'Subject Code', sortable: true },
  { key: 'subjectName', label: 'Subject Name', sortable: true },
  { key: 'type', label: 'Type', sortable: true },
  { key: 'teacher', label: 'Teacher', sortable: true },
  { key: 'maxMarks', label: 'Max Marks', sortable: true },
];

interface SubjectItem {
  id: string;
  subjectCode: string;
  subjectName: string;
  type: string;
  teacher: string;
  maxMarks: number;
}

const mockSubjects: SubjectItem[] = [
  {
    id: '1',
    subjectCode: 'MATH-10',
    subjectName: 'Mathematics',
    type: 'Core',
    teacher: 'John Smith',
    maxMarks: 100,
  },
  {
    id: '2',
    subjectCode: 'SCI-10',
    subjectName: 'Science',
    type: 'Core',
    teacher: 'Sarah Williams',
    maxMarks: 100,
  },
  {
    id: '3',
    subjectCode: 'ENG-10',
    subjectName: 'English',
    type: 'Core',
    teacher: 'Michael Brown',
    maxMarks: 100,
  },
  {
    id: '4',
    subjectCode: 'HIN-10',
    subjectName: 'Hindi',
    type: 'Language',
    teacher: 'Priya Sharma',
    maxMarks: 100,
  },
  {
    id: '5',
    subjectCode: 'SST-10',
    subjectName: 'Social Studies',
    type: 'Core',
    teacher: 'Robert Johnson',
    maxMarks: 100,
  },
];

export default function SubjectManagement() {
  const [subjects] = useState<SubjectItem[]>(mockSubjects);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Subject Management</h1>
          <p className="text-muted-foreground mt-1">
            Manage subjects and assignments
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Subject
        </Button>
      </div>

      <DataTable
        columns={columns}
        data={subjects}
        searchPlaceholder="Search subjects..."
      />
    </div>
  );
}
