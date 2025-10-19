import { useState } from 'react';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/core/ui/Table';
import { TableColumn } from '@/types/common';
import { Card } from '@/components/ui/card';

const columns: TableColumn[] = [
  { key: 'name', label: 'Fee Type Name', sortable: true },
  { key: 'description', label: 'Description', sortable: false },
  { key: 'amount', label: 'Amount (₹)', sortable: true },
  { key: 'isRecurring', label: 'Recurring', sortable: true },
];

interface FeeTypeItem {
  id: string;
  name: string;
  description: string;
  amount: number;
  isRecurring: string;
}

const mockFeeTypes: FeeTypeItem[] = [
  {
    id: '1',
    name: 'Tuition Fee',
    description: 'Monthly tuition charges',
    amount: 5000,
    isRecurring: 'Yes',
  },
  {
    id: '2',
    name: 'Admission Fee',
    description: 'One-time admission charges',
    amount: 10000,
    isRecurring: 'No',
  },
  {
    id: '3',
    name: 'Examination Fee',
    description: 'Exam related charges',
    amount: 1500,
    isRecurring: 'Yes',
  },
  {
    id: '4',
    name: 'Transport Fee',
    description: 'Monthly transportation charges',
    amount: 2000,
    isRecurring: 'Yes',
  },
];

export default function FeeType() {
  const [feeTypes] = useState<FeeTypeItem[]>(mockFeeTypes);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Fee Types</h1>
          <p className="text-muted-foreground mt-1">
            Manage different types of fees
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Fee Type
        </Button>
      </div>

      <DataTable
        columns={columns}
        data={feeTypes}
        searchPlaceholder="Search fee types..."
      />
    </div>
  );
}
