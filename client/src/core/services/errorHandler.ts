import { AxiosError } from 'axios';

export interface ApiError {
  message: string;
  statusCode?: number;
  errors?: Record<string, string[]>;
}

export function handleApiError(error: unknown): ApiError {
  if (error instanceof AxiosError) {
    const statusCode = error.response?.status;
    const message = error.response?.data?.message || error.message;
    const errors = error.response?.data?.errors;

    return {
      message,
      statusCode,
      errors,
    };
  }

  if (error instanceof Error) {
    return {
      message: error.message,
    };
  }

  return {
    message: 'An unexpected error occurred',
  };
}

export function getErrorMessage(error: unknown): string {
  const apiError = handleApiError(error);
  
  if (apiError.errors) {
    const firstError = Object.values(apiError.errors)[0];
    return firstError[0];
  }

  return apiError.message;
}
