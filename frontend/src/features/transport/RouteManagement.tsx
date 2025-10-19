import { useState } from 'react';
import { Plus, MapPin } from 'lucide-react';
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
  { key: 'routeName', label: 'Route Name', sortable: true },
  { key: 'vehicleNo', label: 'Vehicle', sortable: true },
  { key: 'driverName', label: 'Driver', sortable: true },
  { key: 'totalStops', label: 'Stops', sortable: true },
  { key: 'totalDistance', label: 'Distance (km)', sortable: true },
  { key: 'estimatedTime', label: 'Time (min)', sortable: true },
  { key: 'status', label: 'Status', sortable: true },
];

const mockRoutes = [
  {
    id: '1',
    routeNo: 'R-001',
    routeName: 'Route A - North',
    vehicleId: '1',
    vehicleNo: 'DL-1234',
    driverId: '1',
    driverName: 'Rajesh Kumar',
    totalStops: 8,
    totalDistance: 25,
    estimatedTime: 60,
    status: 'Active',
  },
  {
    id: '2',
    routeNo: 'R-002',
    routeName: 'Route B - South',
    vehicleId: '2',
    vehicleNo: 'DL-5678',
    driverId: '2',
    driverName: 'Amit Singh',
    totalStops: 6,
    totalDistance: 18,
    estimatedTime: 45,
    status: 'Active',
  },
];

export default function RouteManagement() {
  const [routes, setRoutes] = useState(mockRoutes);
  const modal = useModal();
  const stopModal = useModal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    modal.close();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Routes & Stops</h1>
          <p className="text-muted-foreground mt-1">Manage transport routes and stop points</p>
        </div>
        <Button onClick={() => modal.open()} className="gap-2">
          <Plus className="h-4 w-4" />
          Add Route
        </Button>
      </div>

      <DataTable
        columns={columns}
        data={routes}
        searchPlaceholder="Search routes..."
        onEdit={(route) => modal.open(route)}
        onDelete={(route) => setRoutes(routes.filter(r => r.id !== route.id))}
        onView={(route) => stopModal.open(route)}
      />

      <Modal
        isOpen={modal.isOpen}
        onClose={modal.close}
        title={modal.data ? 'Edit Route' : 'Add Route'}
        size="lg"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="routeNo">Route Number *</Label>
              <Input id="routeNo" defaultValue={modal.data?.routeNo} required />
            </div>
            <div>
              <Label htmlFor="routeName">Route Name *</Label>
              <Input id="routeName" defaultValue={modal.data?.routeName} required />
            </div>
            <div>
              <Label htmlFor="vehicle">Vehicle *</Label>
              <Select defaultValue={modal.data?.vehicleId}>
                <SelectTrigger>
                  <SelectValue placeholder="Select vehicle" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">DL-1234 (Bus)</SelectItem>
                  <SelectItem value="2">DL-5678 (Van)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="driver">Driver *</Label>
              <Select defaultValue={modal.data?.driverId}>
                <SelectTrigger>
                  <SelectValue placeholder="Select driver" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Rajesh Kumar</SelectItem>
                  <SelectItem value="2">Amit Singh</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="totalDistance">Total Distance (km) *</Label>
              <Input id="totalDistance" type="number" defaultValue={modal.data?.totalDistance} required />
            </div>
            <div>
              <Label htmlFor="estimatedTime">Estimated Time (min) *</Label>
              <Input id="estimatedTime" type="number" defaultValue={modal.data?.estimatedTime} required />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={modal.close}>Cancel</Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </Modal>

      <Modal
        isOpen={stopModal.isOpen}
        onClose={stopModal.close}
        title={`Stop Points - ${stopModal.data?.routeName}`}
        size="lg"
      >
        <div className="space-y-4">
          <div className="flex justify-end">
            <Button size="sm" className="gap-2">
              <Plus className="h-4 w-4" />
              Add Stop
            </Button>
          </div>
          <div className="space-y-2">
            {[1, 2, 3].map((stop) => (
              <div key={stop} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Stop {stop}</p>
                    <p className="text-sm text-muted-foreground">Arrival: 08:{stop}0 AM</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">Edit</Button>
                  <Button size="sm" variant="outline">Delete</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
}
