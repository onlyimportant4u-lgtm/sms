import { useState } from 'react';
import { Plus, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/core/ui/Table';
import { TableColumn } from '@/types/common';
import { FeeCollection as FeeCollectionType } from '@/types/fee';
import { Badge } from '@/components/ui/badge';

const columns: TableColumn[] = [
  { key: 'admissionNo', label: 'Admission No', sortable: true },
  { key: 'studentName', label: 'Student Name', sortable: true },
  { key: 'className', label: 'Class', sortable: true },
  { key: 'feeType', label: 'Fee Type', sortable: true },
  { key: 'amount', label: 'Total Amount', sortable: true },
  { key: 'paidAmount', label: 'Paid', sortable: true },
  { key: 'dueAmount', label: 'Due', sortable: true },
  { key: 'status', label: 'Status', sortable: true },
];

const mockFeeCollections: FeeCollectionType[] = [
  {
    id: '1',
    studentId: '1',
    studentName: 'John Doe',
    admissionNo: 'ADM001',
    className: 'Class 10 A',
    feeType: 'Tuition Fee',
    amount: 5000,
    paidAmount: 5000,
    dueAmount: 0,
    paymentDate: '2024-01-05',
    paymentMode: 'Online',
    status: 'Paid',
    receiptNo: 'REC001',
  },
  {
    id: '2',
    studentId: '2',
    studentName: 'Jane Smith',
    admissionNo: 'ADM002',
    className: 'Class 10 B',
    feeType: 'Tuition Fee',
    amount: 5000,
    paidAmount: 3000,
    dueAmount: 2000,
    paymentDate: '2024-01-08',
    paymentMode: 'Cash',
    status: 'Partial',
  },
  {
    id: '3',
    studentId: '3',
    studentName: 'Alice Johnson',
    admissionNo: 'ADM003',
    className: 'Class 9 A',
    feeType: 'Tuition Fee',
    amount: 4500,
    paidAmount: 0,
    dueAmount: 4500,
    status: 'Pending',
  },
];

export default function FeeCollection() {
  const [feeCollections] = useState<FeeCollectionType[]>(mockFeeCollections);

  const enhancedData = feeCollections.map((fee) => ({
    ...fee,
    status: (
      <Badge
        variant={
          fee.status === 'Paid'
            ? 'default'
            : fee.status === 'Partial'
            ? 'secondary'
            : 'destructive'
        }
      >
        {fee.status}
      </Badge>
    ),
    amount: `₹${fee.amount}`,
    paidAmount: `₹${fee.paidAmount}`,
    dueAmount: `₹${fee.dueAmount}`,
  }));

  const handleCollectFee = (fee: any) => {
    console.log('Collect fee:', fee);
  };

  const handleViewReceipt = (fee: any) => {
    console.log('View receipt:', fee);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Fee Collection</h1>
          <p className="text-muted-foreground mt-1">
            Collect and manage student fee payments
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Collect Fee
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-card border rounded-lg p-4">
          <p className="text-sm text-muted-foreground">Total Collected</p>
          <p className="text-2xl font-bold text-foreground mt-1">₹8,000</p>
        </div>
        <div className="bg-card border rounded-lg p-4">
          <p className="text-sm text-muted-foreground">Total Due</p>
          <p className="text-2xl font-bold text-destructive mt-1">₹6,500</p>
        </div>
        <div className="bg-card border rounded-lg p-4">
          <p className="text-sm text-muted-foreground">This Month</p>
          <p className="text-2xl font-bold text-foreground mt-1">₹8,000</p>
        </div>
        <div className="bg-card border rounded-lg p-4">
          <p className="text-sm text-muted-foreground">Pending Receipts</p>
          <p className="text-2xl font-bold text-accent mt-1">2</p>
        </div>
      </div>

      <DataTable
        columns={columns}
        data={enhancedData}
        onEdit={handleCollectFee}
        onView={handleViewReceipt}
        searchPlaceholder="Search by student name, admission no..."
      />
    </div>
  );
}
