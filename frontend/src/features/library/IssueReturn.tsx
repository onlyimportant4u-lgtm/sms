import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/core/ui/Table';
import { TableColumn } from '@/types/common';
import { Badge } from '@/components/ui/badge';

const columns: TableColumn[] = [
  { key: 'bookTitle', label: 'Book Title', sortable: true },
  { key: 'memberName', label: 'Member Name', sortable: true },
  { key: 'memberType', label: 'Member Type', sortable: true },
  { key: 'issueDate', label: 'Issue Date', sortable: true },
  { key: 'dueDate', label: 'Due Date', sortable: true },
  { key: 'status', label: 'Status', sortable: true },
];

interface IssueItem {
  id: string;
  bookTitle: string;
  memberName: string;
  memberType: string;
  issueDate: string;
  dueDate: string;
  status: 'Issued' | 'Returned' | 'Overdue';
}

const mockIssues: IssueItem[] = [
  {
    id: '1',
    bookTitle: 'Mathematics Class 10',
    memberName: 'Rahul Kumar',
    memberType: 'Student',
    issueDate: '2024-01-10',
    dueDate: '2024-01-24',
    status: 'Issued',
  },
  {
    id: '2',
    bookTitle: 'Physics Fundamentals',
    memberName: 'Priya Sharma',
    memberType: 'Student',
    issueDate: '2024-01-08',
    dueDate: '2024-01-22',
    status: 'Returned',
  },
  {
    id: '3',
    bookTitle: 'Chemistry Handbook',
    memberName: 'John Smith',
    memberType: 'Staff',
    issueDate: '2024-01-05',
    dueDate: '2024-01-19',
    status: 'Overdue',
  },
];

export default function IssueReturn() {
  const [issues] = useState<IssueItem[]>(mockIssues);

  const enhancedData = issues.map((issue) => ({
    ...issue,
    status: (
      <Badge
        variant={
          issue.status === 'Returned'
            ? 'default'
            : issue.status === 'Overdue'
            ? 'destructive'
            : 'secondary'
        }
      >
        {issue.status}
      </Badge>
    ),
  }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Book Issue & Return</h1>
          <p className="text-muted-foreground mt-1">
            Manage book circulation
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Issue Book
        </Button>
      </div>

      <DataTable
        columns={columns}
        data={enhancedData}
        searchPlaceholder="Search by book or member..."
      />
    </div>
  );
}
