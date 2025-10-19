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
  { key: 'routeNo', label: 'Route No', sortable: true },
  { key: 'academicYear', label: 'Academic Year', sortable: true },
  { key: 'feeAmount', label: 'Fee Amount', sortable: true },
  { key: 'effectiveFrom', label: 'Effective From', sortable: true },
  { key: 'status', label: 'Status', sortable: true },
];

const mockFees = [
  {
    id: '1',
    routeId: '1',
    routeNo: 'R-001',
    feeAmount: 2000,
    academicYear: '2024-2025',
    effectiveFrom: '2024-04-01',
    status: 'Active',
  },
  {
    id: '2',
    routeId: '2',
    routeNo: 'R-002',
    feeAmount: 1800,
    academicYear: '2024-2025',
    effectiveFrom: '2024-04-01',
    status: 'Active',
  },
];

export default function TransportFee() {
  const [fees, setFees] = useState(mockFees);
  const modal = useModal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    modal.close();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Transport Fee</h1>
          <p className="text-muted-foreground mt-1">Manage transport fee structure</p>
        </div>
        <Button onClick={() => modal.open()} className="gap-2">
          <Plus className="h-4 w-4" />
          Add Fee
        </Button>
      </div>

      <DataTable
        columns={columns}
        data={fees}
        searchPlaceholder="Search fees..."
        onEdit={(fee) => modal.open(fee)}
        onDelete={(fee) => setFees(fees.filter(f => f.id !== fee.id))}
      />

      <Modal
        isOpen={modal.isOpen}
        onClose={modal.close}
        title={modal.data ? 'Edit Transport Fee' : 'Add Transport Fee'}
        size="md"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-4">
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
              <Label htmlFor="academicYear">Academic Year *</Label>
              <Input id="academicYear" defaultValue={modal.data?.academicYear} placeholder="2024-2025" required />
            </div>
            <div>
              <Label htmlFor="feeAmount">Fee Amount *</Label>
              <Input id="feeAmount" type="number" defaultValue={modal.data?.feeAmount} required />
            </div>
            <div>
              <Label htmlFor="effectiveFrom">Effective From *</Label>
              <Input id="effectiveFrom" type="date" defaultValue={modal.data?.effectiveFrom} required />
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
