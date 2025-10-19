import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/core/ui/Table';
import { Modal } from '@/core/ui/Modal';
import { useModal } from '@/core/hooks/useModal';
import { TableColumn } from '@/types/common';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const columns: TableColumn[] = [
  { key: 'admissionNo', label: 'Admission No', sortable: true },
  { key: 'studentName', label: 'Student Name', sortable: true },
  { key: 'className', label: 'Class', sortable: true },
  { key: 'routeNo', label: 'Route', sortable: true },
  { key: 'stopName', label: 'Stop', sortable: true },
  { key: 'pickupTime', label: 'Pickup Time', sortable: true },
  { key: 'feeAmount', label: 'Fee Amount', sortable: true },
  { key: 'status', label: 'Status', sortable: true },
];

const mockAssignments = [
  {
    id: '1',
    studentId: 'ST001',
    studentName: 'Rahul Sharma',
    admissionNo: 'ADM-2024-001',
    className: 'Class 10-A',
    routeId: '1',
    routeNo: 'R-001',
    stopId: '1',
    stopName: 'Stop 1 - Main Gate',
    pickupTime: '07:30 AM',
    feeAmount: 2000,
    status: 'Active',
  },
  {
    id: '2',
    studentId: 'ST002',
    studentName: 'Priya Singh',
    admissionNo: 'ADM-2024-002',
    className: 'Class 9-B',
    routeId: '2',
    routeNo: 'R-002',
    stopId: '2',
    stopName: 'Stop 2 - Market',
    pickupTime: '07:45 AM',
    feeAmount: 1800,
    status: 'Active',
  },
];

export default function StudentRouteAssignment() {
  const [assignments, setAssignments] = useState(mockAssignments);
  const modal = useModal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    modal.close();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Student Route Assignment</h1>
          <p className="text-muted-foreground mt-1">Assign students to transport routes</p>
        </div>
        <Button onClick={() => modal.open()} className="gap-2">
          <Plus className="h-4 w-4" />
          Assign Student
        </Button>
      </div>

      <DataTable
        columns={columns}
        data={assignments}
        searchPlaceholder="Search assignments..."
        onEdit={(assignment) => modal.open(assignment)}
        onDelete={(assignment) => setAssignments(assignments.filter(a => a.id !== assignment.id))}
      />

      <Modal
        isOpen={modal.isOpen}
        onClose={modal.close}
        title={modal.data ? 'Edit Assignment' : 'Assign Student to Route'}
        size="lg"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="student">Student *</Label>
              <Select defaultValue={modal.data?.studentId}>
                <SelectTrigger>
                  <SelectValue placeholder="Select student" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ST001">Rahul Sharma (ADM-2024-001)</SelectItem>
                  <SelectItem value="ST002">Priya Singh (ADM-2024-002)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="route">Route *</Label>
              <Select defaultValue={modal.data?.routeId}>
                <SelectTrigger>
                  <SelectValue placeholder="Select route" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">R-001 - Route A North</SelectItem>
                  <SelectItem value="2">R-002 - Route B South</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="stop">Stop Point *</Label>
              <Select defaultValue={modal.data?.stopId}>
                <SelectTrigger>
                  <SelectValue placeholder="Select stop" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Stop 1 - Main Gate</SelectItem>
                  <SelectItem value="2">Stop 2 - Market</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="pickupTime">Pickup Time *</Label>
              <Input id="pickupTime" type="time" defaultValue={modal.data?.pickupTime} required />
            </div>
            <div>
              <Label htmlFor="feeAmount">Fee Amount *</Label>
              <Input id="feeAmount" type="number" defaultValue={modal.data?.feeAmount} required />
            </div>
            <div>
              <Label htmlFor="status">Status *</Label>
              <Select defaultValue={modal.data?.status || 'Active'}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
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
