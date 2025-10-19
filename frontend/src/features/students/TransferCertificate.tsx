import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input'; // Use this if you have a custom Input component

export default function TransferCertificate() {
  const [studentId, setStudentId] = useState('');
  const [certificateData, setCertificateData] = useState<any>(null);

  const generateCertificate = () => {
    setCertificateData({
      studentName: 'John Doe',
      admissionNo: 'ADM001',
      leavingDate: new Date().toISOString().split('T')[0],
      remarks: 'Good conduct',
    });
  };

  return (
    <Card className="p-6 max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Generate Transfer Certificate</h1>

      <Input
        type="text"
        placeholder="Enter student ID"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
        className="w-full"
      />

      <Button disabled={!studentId} onClick={generateCertificate}>
        Generate
      </Button>

      {certificateData && (
        <div className="border p-4 mt-4 bg-card text-foreground rounded shadow transition-colors">
          <p><strong>Student Name:</strong> {certificateData.studentName}</p>
          <p><strong>Admission No:</strong> {certificateData.admissionNo}</p>
          <p><strong>Leaving Date:</strong> {certificateData.leavingDate}</p>
          <p><strong>Remarks:</strong> {certificateData.remarks}</p>
        </div>
      )}
    </Card>
  );
}
