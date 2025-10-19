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
  { key: 'vehicleNo', label: 'Vehicle No', sortable: true },
  { key: 'type', label: 'Type', sortable: true },
  { key: 'model', label: 'Model', sortable: true },
  { key: 'capacity', label: 'Capacity', sortable: true },
  { key: 'driverName', label: 'Driver', sortable: true },
  { key: 'insuranceNo', label: 'Insurance No', sortable: true },
  { key: 'insuranceExpiry', label: 'Insurance Expiry', sortable: true },
  { key: 'status', label: 'Status', sortable: true },
];

const mockVehicles = [
  {
    id: '1',
    vehicleNo: 'DL-1234',
    type: 'Bus',
    model: 'Tata LP 1512',
    capacity: 50,
    driverName: 'Rajesh Kumar',
    insuranceNo: 'INS-2024-001',
    insuranceExpiry: '2025-12-31',
    pucExpiry: '2025-06-30',
    registrationDate: '2020-01-15',
    status: 'Active',
  },
  {
    id: '2',
    vehicleNo: 'DL-5678',
    type: 'Van',
    model: 'Force Traveller',
    capacity: 15,
    driverName: 'Amit Singh',
    insuranceNo: 'INS-2024-002',
    insuranceExpiry: '2025-10-31',
    pucExpiry: '2025-05-31',
    registrationDate: '2021-03-20',
    status: 'Active',
  },
];

export default function VehicleList() {
  const [vehicles, setVehicles] = useState(mockVehicles);
  const modal = useModal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    modal.close();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Vehicles</h1>
          <p className="text-muted-foreground mt-1">Manage school transport vehicles</p>
        </div>
        <Button onClick={() => modal.open()} className="gap-2">
          <Plus className="h-4 w-4" />
          Add Vehicle
        </Button>
      </div>

      <DataTable
        columns={columns}
        data={vehicles}
        searchPlaceholder="Search vehicles..."
        onEdit={(vehicle) => modal.open(vehicle)}
        onDelete={(vehicle) => setVehicles(vehicles.filter(v => v.id !== vehicle.id))}
      />

      <Modal
        isOpen={modal.isOpen}
        onClose={modal.close}
        title={modal.data ? 'Edit Vehicle' : 'Add Vehicle'}
        size="lg"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="vehicleNo">Vehicle Number *</Label>
              <Input id="vehicleNo" defaultValue={modal.data?.vehicleNo} required />
            </div>
            <div>
              <Label htmlFor="type">Type *</Label>
              <Select defaultValue={modal.data?.type}>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Bus">Bus</SelectItem>
                  <SelectItem value="Van">Van</SelectItem>
                  <SelectItem value="Car">Car</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="model">Model *</Label>
              <Input id="model" defaultValue={modal.data?.model} required />
            </div>
            <div>
              <Label htmlFor="capacity">Capacity *</Label>
              <Input id="capacity" type="number" defaultValue={modal.data?.capacity} required />
            </div>
            <div>
              <Label htmlFor="insuranceNo">Insurance Number *</Label>
              <Input id="insuranceNo" defaultValue={modal.data?.insuranceNo} required />
            </div>
            <div>
              <Label htmlFor="insuranceExpiry">Insurance Expiry *</Label>
              <Input id="insuranceExpiry" type="date" defaultValue={modal.data?.insuranceExpiry} required />
            </div>
            <div>
              <Label htmlFor="pucExpiry">PUC Expiry *</Label>
              <Input id="pucExpiry" type="date" defaultValue={modal.data?.pucExpiry} required />
            </div>
            <div>
              <Label htmlFor="registrationDate">Registration Date *</Label>
              <Input id="registrationDate" type="date" defaultValue={modal.data?.registrationDate} required />
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
