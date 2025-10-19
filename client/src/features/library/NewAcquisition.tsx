import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/core/ui/Table';
import { Modal } from '@/core/ui/Modal';
import { useModal } from '@/core/hooks/useModal';
import { TableColumn } from '@/types/common';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const columns: TableColumn[] = [
  { key: 'requestDate', label: 'Request Date', sortable: true },
  { key: 'bookTitle', label: 'Book Title', sortable: true },
  { key: 'author', label: 'Author', sortable: true },
  { key: 'isbn', label: 'ISBN', sortable: true },
  { key: 'requestedBy', label: 'Requested By', sortable: true },
  { key: 'priority', label: 'Priority', sortable: true },
  { key: 'status', label: 'Status', sortable: true },
];

const mockRequests = [
  {
    id: '1',
    requestDate: '2024-10-15',
    bookTitle: 'Advanced Physics',
    author: 'Dr. Kumar',
    isbn: '978-1234567890',
    requestedBy: 'Physics Department',
    priority: 'High',
    estimatedCost: 1200,
    quantity: 5,
    status: 'Pending',
    notes: 'Required for new curriculum',
  },
  {
    id: '2',
    requestDate: '2024-10-12',
    bookTitle: 'Modern Chemistry',
    author: 'Prof. Singh',
    isbn: '978-0987654321',
    requestedBy: 'Chemistry Department',
    priority: 'Medium',
    estimatedCost: 950,
    quantity: 3,
    status: 'Approved',
    notes: 'Reference book for lab',
  },
];

export default function NewAcquisition() {
  const [requests, setRequests] = useState(mockRequests);
  const modal = useModal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    modal.close();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">New Acquisition Requests</h1>
          <p className="text-muted-foreground mt-1">Manage book acquisition requests</p>
        </div>
        <Button onClick={() => modal.open()} className="gap-2">
          <Plus className="h-4 w-4" />
          New Request
        </Button>
      </div>

      <DataTable
        columns={columns}
        data={requests}
        searchPlaceholder="Search requests..."
        onEdit={(request) => modal.open(request)}
        onDelete={(request) => setRequests(requests.filter(r => r.id !== request.id))}
        onView={(request) => modal.open(request)}
      />

      <Modal
        isOpen={modal.isOpen}
        onClose={modal.close}
        title={modal.data ? 'View/Edit Request' : 'New Acquisition Request'}
        size="lg"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="bookTitle">Book Title *</Label>
              <Input id="bookTitle" defaultValue={modal.data?.bookTitle} required />
            </div>
            <div>
              <Label htmlFor="author">Author *</Label>
              <Input id="author" defaultValue={modal.data?.author} required />
            </div>
            <div>
              <Label htmlFor="isbn">ISBN</Label>
              <Input id="isbn" defaultValue={modal.data?.isbn} />
            </div>
            <div>
              <Label htmlFor="requestedBy">Requested By *</Label>
              <Input id="requestedBy" defaultValue={modal.data?.requestedBy} required />
            </div>
            <div>
              <Label htmlFor="priority">Priority *</Label>
              <Select defaultValue={modal.data?.priority || 'Medium'}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="High">High</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="quantity">Quantity *</Label>
              <Input id="quantity" type="number" defaultValue={modal.data?.quantity || 1} required />
            </div>
            <div>
              <Label htmlFor="estimatedCost">Estimated Cost (₹)</Label>
              <Input id="estimatedCost" type="number" defaultValue={modal.data?.estimatedCost} />
            </div>
            <div>
              <Label htmlFor="status">Status *</Label>
              <Select defaultValue={modal.data?.status || 'Pending'}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="Approved">Approved</SelectItem>
                  <SelectItem value="Ordered">Ordered</SelectItem>
                  <SelectItem value="Received">Received</SelectItem>
                  <SelectItem value="Rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" defaultValue={modal.data?.notes} rows={3} />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={modal.close}>Cancel</Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
