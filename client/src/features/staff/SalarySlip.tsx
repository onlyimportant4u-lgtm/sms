import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FormField } from '@/core/ui/FormField'; // Assuming availability in your UI kit

export default function SalarySlip() {
  const [staffId, setStaffId] = useState('');
  const [salarySlipData, setSalarySlipData] = useState<any | null>(null);

  const generateSalarySlip = () => {
    if (!staffId) return;
    const mockData = {
      staffName: 'John Smith',
      employeeId: 'EMP002',
      month: 'September 2025',
      basicPay: 5000,
      allowances: 1000,
      deductions: 500,
      netPay: 5500,
    };
    setSalarySlipData(mockData);
  };

  return (
    <Card className="p-6 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Generate Salary Slip</h1>

      <FormField
        label="Staff ID"
        name="staffId"
        value={staffId}
        onChange={setStaffId}
        placeholder="Enter Staff ID"
        required
      />

      <Button disabled={!staffId} onClick={generateSalarySlip}>
        Generate
      </Button>

      {salarySlipData && (
        <Card className="p-4 mt-4 space-y-2 bg-card text-foreground border rounded transition-colors">
          <p><strong>Name:</strong> {salarySlipData.staffName}</p>
          <p><strong>Employee ID:</strong> {salarySlipData.employeeId}</p>
          <p><strong>Month:</strong> {salarySlipData.month}</p>
          <p><strong>Basic Pay:</strong> ${salarySlipData.basicPay}</p>
          <p><strong>Allowances:</strong> ${salarySlipData.allowances}</p>
          <p><strong>Deductions:</strong> ${salarySlipData.deductions}</p>
          <p><strong>Net Pay:</strong> ${salarySlipData.netPay}</p>
        </Card>
      )}
    </Card>
  );
}
