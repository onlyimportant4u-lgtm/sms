import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/core/ui/Table';
import { TableColumn } from '@/types/common';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';

const columns: TableColumn[] = [
  { key: 'sectionName', label: 'Section', sortable: true },
  { key: 'classTeacher', label: 'Class Teacher', sortable: true },
  { key: 'capacity', label: 'Capacity', sortable: true },
  { key: 'currentStrength', label: 'Current Strength', sortable: true },
];

interface SectionItem {
  id: string;
  sectionName: string;
  classTeacher: string;
  capacity: number;
  currentStrength: number;
}

const mockSections: SectionItem[] = [
  {
    id: '1',
    sectionName: 'Section A',
    classTeacher: 'John Smith',
    capacity: 50,
    currentStrength: 48,
  },
  {
    id: '2',
    sectionName: 'Section B',
    classTeacher: 'Sarah Williams',
    capacity: 50,
    currentStrength: 45,
  },
  {
    id: '3',
    sectionName: 'Section C',
    classTeacher: 'Michael Brown',
    capacity: 50,
    currentStrength: 50,
  },
];

export default function SectionManagement() {
  const [sections] = useState<SectionItem[]>(mockSections);
  const [selectedClass, setSelectedClass] = useState('10');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Section Management</h1>
          <p className="text-muted-foreground mt-1">
            Manage class sections and assignments
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Section
        </Button>
      </div>

      <div className="w-64">
        <Label htmlFor="class-select">Select Class</Label>
        <Select value={selectedClass} onValueChange={setSelectedClass}>
          <SelectTrigger id="class-select" className="mt-1">
            <SelectValue placeholder="Select class" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10">Class 10</SelectItem>
            <SelectItem value="9">Class 9</SelectItem>
            <SelectItem value="8">Class 8</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <DataTable
        columns={columns}
        data={sections}
        searchPlaceholder="Search sections..."
      />
    </div>
  );
}
