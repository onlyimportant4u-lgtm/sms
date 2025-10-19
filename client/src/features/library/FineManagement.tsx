import { useState } from 'react';
import { DataTable } from '@/core/ui/Table';
import { TableColumn } from '@/types/common';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const columns: TableColumn[] = [
  { key: 'memberId', label: 'Member ID', sortable: true },
  { key: 'memberName', label: 'Member Name', sortable: true },
  { key: 'bookTitle', label: 'Book Title', sortable: true },
  { key: 'dueDate', label: 'Due Date', sortable: true },
  { key: 'returnDate', label: 'Return Date', sortable: true },
  { key: 'overdueDays', label: 'Overdue Days', sortable: true },
  { key: 'fineAmount', label: 'Fine Amount', sortable: true },
  { key: 'status', label: 'Status', sortable: true },
];

const mockFines = [
  {
    id: '1',
    memberId: 'ST001',
    memberName: 'Rahul Sharma',
    bookId: 'BK001',
    bookTitle: 'Mathematics Class 10',
    dueDate: '2024-10-01',
    returnDate: '2024-10-10',
    overdueDays: 9,
    fineAmount: 45,
    status: 'Pending',
  },
  {
    id: '2',
    memberId: 'ST002',
    memberName: 'Priya Singh',
    bookId: 'BK002',
    bookTitle: 'Physics Fundamentals',
    dueDate: '2024-10-05',
    returnDate: '2024-10-08',
    overdueDays: 3,
    fineAmount: 15,
    status: 'Paid',
  },
];

export default function FineManagement() {
  const [fines] = useState(mockFines);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Fine Management</h1>
        <p className="text-muted-foreground mt-1">Manage library fines and penalties</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Fine Configuration</CardTitle>
          <CardDescription>Set fine calculation rules</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="finePerDay">Fine per Day (₹)</Label>
              <Input id="finePerDay" type="number" defaultValue="5" />
            </div>
            <div>
              <Label htmlFor="gracePeriod">Grace Period (days)</Label>
              <Input id="gracePeriod" type="number" defaultValue="0" />
            </div>
            <div>
              <Label htmlFor="maxFine">Maximum Fine (₹)</Label>
              <Input id="maxFine" type="number" defaultValue="500" />
            </div>
          </div>
          <Button className="mt-4">Save Configuration</Button>
        </CardContent>
      </Card>

      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Total Overdue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Total Fine Amount</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹245</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Pending Collection</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">₹185</div>
          </CardContent>
        </Card>
      </div>

      <DataTable
        columns={columns}
        data={fines}
        searchPlaceholder="Search fines..."
      />
    </div>
  );
}
