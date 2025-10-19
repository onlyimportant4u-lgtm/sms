export interface Vehicle {
  id: string;
  vehicleNo: string;
  type: 'Bus' | 'Van' | 'Car';
  capacity: number;
  model: string;
  registrationDate: string;
  insuranceNo: string;
  insuranceExpiry: string;
  pucExpiry: string;
  status: 'Active' | 'Inactive' | 'Maintenance';
  driverId?: string;
  driverName?: string;
}

export interface Driver {
  id: string;
  name: string;
  licenseNo: string;
  licenseExpiry: string;
  phone: string;
  email: string;
  address: string;
  experience: number;
  status: 'Active' | 'Inactive';
  assignedVehicle?: string;
}

export interface Route {
  id: string;
  routeNo: string;
  routeName: string;
  vehicleId: string;
  vehicleNo: string;
  driverId: string;
  driverName: string;
  totalStops: number;
  totalDistance: number;
  estimatedTime: number;
  status: 'Active' | 'Inactive';
}

export interface StopPoint {
  id: string;
  routeId: string;
  stopName: string;
  stopOrder: number;
  arrivalTime: string;
  latitude?: number;
  longitude?: number;
}

export interface StudentRoute {
  id: string;
  studentId: string;
  studentName: string;
  admissionNo: string;
  className: string;
  routeId: string;
  routeNo: string;
  stopId: string;
  stopName: string;
  pickupTime: string;
  feeAmount: number;
  status: 'Active' | 'Inactive';
}

export interface TransportFee {
  id: string;
  routeId: string;
  routeNo: string;
  feeAmount: number;
  academicYear: string;
  effectiveFrom: string;
  status: 'Active' | 'Inactive';
}
