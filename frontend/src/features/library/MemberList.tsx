import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/core/ui/Table';
import { TableColumn } from '@/types/common';
import { Badge } from '@/components/ui/badge';

const columns: TableColumn[] = [
  { key: 'memberId', label: 'Member ID', sortable: true },
  { key: 'name', label: 'Name', sortable: true },
  { key: 'type', label: 'Type', sortable: true },
  { key: 'email', label: 'Email', sortable: false },
  { key: 'phone', label: 'Phone', sortable: false },
  { key: 'booksIssued', label: 'Books Issued', sortable: true },
  { key: 'status', label: 'Status', sortable: true },
];

interface MemberItem {
  id: string;
  memberId: string;
  name: string;
  type: string;
  email: string;
  phone: string;
  booksIssued: number;
  status: 'Active' | 'Inactive';
}

const mockMembers: MemberItem[] = [
  {
    id: '1',
    memberId: 'LM001',
    name: 'Rahul Kumar',
    type: 'Student',
    email: 'rahul@school.com',
    phone: '9876543210',
    booksIssued: 2,
    status: 'Active',
  },
  {
    id: '2',
    memberId: 'LM002',
    name: 'Priya Sharma',
    type: 'Student',
    email: 'priya@school.com',
    phone: '9876543211',
    booksIssued: 1,
    status: 'Active',
  },
  {
    id: '3',
    memberId: 'LM003',
    name: 'John Smith',
    type: 'Staff',
    email: 'john@school.com',
    phone: '9876543212',
    booksIssued: 3,
    status: 'Active',
  },
  {
    id: '4',
    memberId: 'LM004',
    name: 'Sarah Williams',
    type: 'Staff',
    email: 'sarah@school.com',
    phone: '9876543213',
    booksIssued: 0,
    status: 'Inactive',
  },
];

export default function MemberList() {
  const [members] = useState<MemberItem[]>(mockMembers);

  const enhancedData = members.map((member) => ({
    ...member,
    status: (
      <Badge variant={member.status === 'Active' ? 'default' : 'secondary'}>
        {member.status}
      </Badge>
    ),
  }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Library Members</h1>
          <p className="text-muted-foreground mt-1">
            Manage library membership
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Member
        </Button>
      </div>

      <DataTable
        columns={columns}
        data={enhancedData}
        searchPlaceholder="Search members..."
      />
    </div>
  );
}
