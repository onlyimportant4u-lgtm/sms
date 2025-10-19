export interface PaginationParams {
  page: number;
  limit: number;
  total: number;
}

export interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface SelectOption {
  value: string | number;
  label: string;
}
