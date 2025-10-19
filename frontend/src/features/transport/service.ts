import { http } from '@/core/services/http';
import { Vehicle, Driver, Route, StopPoint, StudentRoute, TransportFee } from '@/types/transport';

export const transportService = {
  // Vehicles
  getAllVehicles: async (): Promise<Vehicle[]> => {
    return http.get<Vehicle[]>('/transport/vehicles');
  },

  getVehicleById: async (id: string): Promise<Vehicle> => {
    return http.get<Vehicle>(`/transport/vehicles/${id}`);
  },

  createVehicle: async (data: Partial<Vehicle>): Promise<Vehicle> => {
    return http.post<Vehicle>('/transport/vehicles', data);
  },

  updateVehicle: async (id: string, data: Partial<Vehicle>): Promise<Vehicle> => {
    return http.put<Vehicle>(`/transport/vehicles/${id}`, data);
  },

  deleteVehicle: async (id: string): Promise<void> => {
    return http.delete(`/transport/vehicles/${id}`);
  },

  // Drivers
  getAllDrivers: async (): Promise<Driver[]> => {
    return http.get<Driver[]>('/transport/drivers');
  },

  createDriver: async (data: Partial<Driver>): Promise<Driver> => {
    return http.post<Driver>('/transport/drivers', data);
  },

  updateDriver: async (id: string, data: Partial<Driver>): Promise<Driver> => {
    return http.put<Driver>(`/transport/drivers/${id}`, data);
  },

  deleteDriver: async (id: string): Promise<void> => {
    return http.delete(`/transport/drivers/${id}`);
  },

  // Routes
  getAllRoutes: async (): Promise<Route[]> => {
    return http.get<Route[]>('/transport/routes');
  },

  createRoute: async (data: Partial<Route>): Promise<Route> => {
    return http.post<Route>('/transport/routes', data);
  },

  updateRoute: async (id: string, data: Partial<Route>): Promise<Route> => {
    return http.put<Route>(`/transport/routes/${id}`, data);
  },

  deleteRoute: async (id: string): Promise<void> => {
    return http.delete(`/transport/routes/${id}`);
  },

  // Stop Points
  getStopsByRoute: async (routeId: string): Promise<StopPoint[]> => {
    return http.get<StopPoint[]>(`/transport/routes/${routeId}/stops`);
  },

  createStop: async (data: Partial<StopPoint>): Promise<StopPoint> => {
    return http.post<StopPoint>('/transport/stops', data);
  },

  // Student Route Assignment
  getAllStudentRoutes: async (): Promise<StudentRoute[]> => {
    return http.get<StudentRoute[]>('/transport/student-routes');
  },

  assignStudentToRoute: async (data: Partial<StudentRoute>): Promise<StudentRoute> => {
    return http.post<StudentRoute>('/transport/student-routes', data);
  },

  updateStudentRoute: async (id: string, data: Partial<StudentRoute>): Promise<StudentRoute> => {
    return http.put<StudentRoute>(`/transport/student-routes/${id}`, data);
  },

  // Transport Fees
  getAllTransportFees: async (): Promise<TransportFee[]> => {
    return http.get<TransportFee[]>('/transport/fees');
  },

  createTransportFee: async (data: Partial<TransportFee>): Promise<TransportFee> => {
    return http.post<TransportFee>('/transport/fees', data);
  },
};
