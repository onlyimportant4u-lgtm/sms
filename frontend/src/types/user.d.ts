export interface User {
  id: string;
  email: string;
  name: string;
  role: 'Admin' | 'Teacher' | 'Student' | 'Parent' | 'Staff';
  avatar?: string;
  permissions?: string[];
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}
