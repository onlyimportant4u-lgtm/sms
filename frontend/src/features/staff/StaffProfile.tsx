import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { staffService } from './service';
import { Staff } from '@/types/staff';
import { Card } from '@/components/ui/card';

export default function StaffProfile() {
  const { id } = useParams<{ id: string }>();
  const [staff, setStaff] = useState<Staff | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStaff() {
      if (id) {
        setLoading(true);
        const data = await staffService.getById(id);
        setStaff(data);
        setLoading(false);
      }
    }
    fetchStaff();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!staff) return <div>Staff not found</div>;

  return (
    <Card className="p-6">
      <h1 className="text-3xl font-bold mb-4">{staff.firstName} {staff.lastName}</h1>
      <p><strong>Employee ID:</strong> {staff.employeeId}</p>
      <p><strong>Designation:</strong> {staff.designation}</p>
      <p><strong>Department:</strong> {staff.department}</p>
      <p><strong>Email:</strong> {staff.email}</p>
      <p><strong>Phone:</strong> {staff.phone}</p>
      <p><strong>Date of Birth:</strong> {staff.dateOfBirth}</p>
      <p><strong>Gender:</strong> {staff.gender}</p>
      <p><strong>Address:</strong> {staff.address}</p>
      <p><strong>Join Date:</strong> {staff.joinDate}</p>
      <p><strong>Qualification:</strong> {staff.qualification}</p>
      <p><strong>Experience:</strong> {staff.experience}</p>
      <p><strong>Salary:</strong> ${staff.salary}</p>
      <p><strong>Status:</strong> {staff.status}</p>
      {staff.photoUrl && <img src={staff.photoUrl} alt={`${staff.firstName} ${staff.lastName}`} className="mt-4 rounded-md max-w-xs" />}
      <h2 className="mt-6 font-semibold">Emergency Contact</h2>
      <p><strong>Name:</strong> {staff.emergencyContactName}</p>
      <p><strong>Phone:</strong> {staff.emergencyContact}</p>
    </Card>
  );
}
