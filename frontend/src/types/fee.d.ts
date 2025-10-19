export interface FeeType {
  id: string;
  name: string;
  description?: string;
  amount: number;
  isRecurring: boolean;
}

export interface FeeStructure {
  id: string;
  className: string;
  academicYear: string;
  feeTypes: FeeType[];
  totalAmount: number;
}

export interface FeeCollection {
  id: string;
  studentId: string;
  studentName: string;
  admissionNo: string;
  className: string;
  feeType: string;
  amount: number;
  paidAmount: number;
  dueAmount: number;
  paymentDate?: string;
  paymentMode?: 'Cash' | 'Card' | 'Online' | 'Cheque';
  status: 'Paid' | 'Partial' | 'Pending' | 'Overdue';
  receiptNo?: string;
}
