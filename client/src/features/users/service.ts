import { http } from '@/core/services/http';
import { User } from '@/types/user';
import { tokenHelper } from '@/core/services/tokenHelper';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  token: string;
  refreshToken: string;
}

export const userService = {
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    const response = await http.post<LoginResponse>('/auth/login', credentials);
    tokenHelper.setToken(response.token);
    tokenHelper.setRefreshToken(response.refreshToken);
    return response;
  },

  logout: async (): Promise<void> => {
    await http.post('/auth/logout', {});
    tokenHelper.clearTokens();
  },

  getCurrentUser: async (): Promise<User> => {
    return http.get<User>('/auth/me');
  },

  refreshToken: async (): Promise<{ token: string }> => {
    const refreshToken = tokenHelper.getRefreshToken();
    const response = await http.post<{ token: string }>('/auth/refresh', { refreshToken });
    tokenHelper.setToken(response.token);
    return response;
  },

  updateProfile: async (data: Partial<User>): Promise<User> => {
    return http.put<User>('/auth/profile', data);
  },

  changePassword: async (currentPassword: string, newPassword: string): Promise<void> => {
    return http.post('/auth/change-password', { currentPassword, newPassword });
  },
};
