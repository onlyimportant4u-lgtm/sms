import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { studentService } from './service';
import { Student } from '@/types/student';
import { Card } from '@/components/ui/card';

export default function StudentProfile() {
  const { id } = useParams<{ id: string }>();
  const [student, setStudent] = useState<Student | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStudent() {
      if (id) {
        setLoading(true);
        const data = await studentService.getById(id);
        setStudent(data);
        setLoading(false);
      }
    }
    fetchStudent();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!student) return <div>Student not found</div>;

  return (
    <Card className="p-6">
      <h1 className="text-3xl font-bold mb-4">{student.firstName} {student.lastName}</h1>
      <p><strong>Admission No:</strong> {student.admissionNo}</p>
      <p><strong>Date of Birth:</strong> {student.dateOfBirth}</p>
      <p><strong>Gender:</strong> {student.gender}</p>
      <p><strong>Class:</strong> {student.className}</p>
      <p><strong>Section:</strong> {student.section}</p>
      <p><strong>Roll No:</strong> {student.rollNo}</p>
      <p><strong>Status:</strong> {student.status}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Phone:</strong> {student.phone}</p>
      <p><strong>Address:</strong> {student.address}</p>
      <h2 className="mt-6 font-semibold">Guardian Information</h2>
      <p><strong>Name:</strong> {student.guardianName}</p>
      <p><strong>Phone:</strong> {student.guardianPhone}</p>
      <p><strong>Email:</strong> {student.guardianEmail}</p>
    </Card>
  );
}
