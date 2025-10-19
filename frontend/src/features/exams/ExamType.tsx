import { useState } from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/core/ui/Table';
import { TableColumn } from '@/types/common';

interface ExamTypeData {
  id: string;
  examType: string;
  description: string;
  isActive: boolean;
}

const columns: TableColumn[] = [
  { key: 'examType', label: 'Exam Type', sortable: true },
  { key: 'description', label: 'Description', sortable: false },
  { key: 'isActive', label: 'Status', sortable: true },
];

const mockExamTypes: ExamTypeData[] = [
  {
    id: '1',
    examType: 'Mid-Term',
    description: 'Mid-term examination conducted twice a year',
    isActive: true,
  },
  {
    id: '2',
    examType: 'Final',
    description: 'Final examination at the end of academic year',
    isActive: true,
  },
  {
    id: '3',
    examType: 'Unit Test',
    description: 'Monthly unit tests for continuous evaluation',
    isActive: true,
  },
];

export default function ExamType() {
  const [examTypes] = useState<ExamTypeData[]>(mockExamTypes);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Exam Types</h1>
          <p className="text-muted-foreground mt-1">
            Manage different types of examinations
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Exam Type
        </Button>
      </div>

      <DataTable
        columns={columns}
        data={examTypes.map(type => ({
          ...type,
          isActive: type.isActive ? 'Active' : 'Inactive'
        }))}
        searchPlaceholder="Search exam types..."
        onEdit={(item) => console.log('Edit:', item)}
        onDelete={(item) => console.log('Delete:', item)}
      />
    </div>
  );
}
