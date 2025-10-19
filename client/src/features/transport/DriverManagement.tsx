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
  { key: 'name', label: 'Name', sortable: true },
  { key: 'licenseNo', label: 'License No', sortable: true },
  { key: 'licenseExpiry', label: 'License Expiry', sortable: true },
  { key: 'phone', label: 'Phone', sortable: true },
  { key: 'experience', label: 'Experience (years)', sortable: true },
  { key: 'assignedVehicle', label: 'Assigned Vehicle', sortable: true },
  { key: 'status', label: 'Status', sortable: true },
];

const mockDrivers = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    licenseNo: 'DL-2020-12345',
    licenseExpiry: '2026-12-31',
    phone: '+91 9876543210',
    email: 'rajesh@school.com',
    address: 'Delhi',
    experience: 10,
    status: 'Active',
    assignedVehicle: 'DL-1234',
  },
  {
    id: '2',
    name: 'Amit Singh',
    licenseNo: 'DL-2019-67890',
    licenseExpiry: '2027-06-30',
    phone: '+91 9876543211',
    email: 'amit@school.com',
    address: 'Delhi',
    experience: 8,
    status: 'Active',
    assignedVehicle: 'DL-5678',
  },
];

export default function DriverManagement() {
  const [drivers, setDrivers] = useState(mockDrivers);
  const modal = useModal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    modal.close();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Drivers</h1>
          <p className="text-muted-foreground mt-1">Manage transport drivers</p>
        </div>
        <Button onClick={() => modal.open()} className="gap-2">
          <Plus className="h-4 w-4" />
          Add Driver
        </Button>
      </div>

      <DataTable
        columns={columns}
        data={drivers}
        searchPlaceholder="Search drivers..."
        onEdit={(driver) => modal.open(driver)}
        onDelete={(driver) => setDrivers(drivers.filter(d => d.id !== driver.id))}
      />

      <Modal
        isOpen={modal.isOpen}
        onClose={modal.close}
        title={modal.data ? 'Edit Driver' : 'Add Driver'}
        size="lg"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Name *</Label>
              <Input id="name" defaultValue={modal.data?.name} required />
            </div>
            <div>
              <Label htmlFor="licenseNo">License Number *</Label>
              <Input id="licenseNo" defaultValue={modal.data?.licenseNo} required />
            </div>
            <div>
              <Label htmlFor="licenseExpiry">License Expiry *</Label>
              <Input id="licenseExpiry" type="date" defaultValue={modal.data?.licenseExpiry} required />
            </div>
            <div>
              <Label htmlFor="phone">Phone *</Label>
              <Input id="phone" defaultValue={modal.data?.phone} required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue={modal.data?.email} />
            </div>
            <div>
              <Label htmlFor="experience">Experience (years) *</Label>
              <Input id="experience" type="number" defaultValue={modal.data?.experience} required />
            </div>
            <div className="col-span-2">
              <Label htmlFor="address">Address *</Label>
              <Input id="address" defaultValue={modal.data?.address} required />
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
