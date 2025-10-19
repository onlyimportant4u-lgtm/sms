import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FormField } from '@/core/ui/FormField';
import { useToast } from '@/hooks/use-toast';
import { StaffFormData } from '@/types/staff';

export default function StaffAdmission() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<StaffFormData>({
    employeeId: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: 'Male',
    address: '',
    designation: '',
    department: '',
    joinDate: new Date().toISOString().split('T')[0],
    qualification: '',
    experience: '',
    salary: 0,
    status: 'Active',
    photoUrl: '',
    emergencyContact: '',
    emergencyContactName: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Use your staffService.create(formData) here
      await new Promise((resolve) => setTimeout(resolve, 1000)); // mock delay

      toast({
        title: 'Success',
        description: 'Staff admitted successfully',
      });

      navigate('/staff');
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to admit staff',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const updateField = (field: keyof StaffFormData, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate('/staff')}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-foreground">Staff Admission</h1>
          <p className="text-muted-foreground mt-1">Add a new staff member</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FormField
              label="Employee ID"
              name="employeeId"
              value={formData.employeeId}
              onChange={(v) => updateField('employeeId', v)}
              required
              placeholder="EMP001"
            />
            <FormField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={(v) => updateField('firstName', v)}
              required
              placeholder="John"
            />
            <FormField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={(v) => updateField('lastName', v)}
              required
              placeholder="Doe"
            />
            <FormField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={(v) => updateField('email', v)}
              placeholder="john.doe@example.com"
            />
            <FormField
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={(v) => updateField('phone', v)}
              placeholder="1234567890"
            />
            <FormField
              label="Date of Birth"
              name="dateOfBirth"
              type="date"
              value={formData.dateOfBirth}
              onChange={(v) => updateField('dateOfBirth', v)}
            />
            <FormField
              label="Gender"
              name="gender"
              type="select"
              value={formData.gender}
              onChange={(v) => updateField('gender', v)}
              options={[
                { value: 'Male', label: 'Male' },
                { value: 'Female', label: 'Female' },
                { value: 'Other', label: 'Other' },
              ]}
              required
            />
            <FormField
              label="Address"
              name="address"
              type="textarea"
              value={formData.address}
              onChange={(v) => updateField('address', v)}
              placeholder="123 Main St, City"
            />
            <FormField
              label="Designation"
              name="designation"
              value={formData.designation}
              onChange={(v) => updateField('designation', v)}
              placeholder="Mathematics Teacher"
            />
            <FormField
              label="Department"
              name="department"
              value={formData.department}
              onChange={(v) => updateField('department', v)}
              placeholder="Academics"
            />
            <FormField
              label="Joining Date"
              name="joinDate"
              type="date"
              value={formData.joinDate}
              onChange={(v) => updateField('joinDate', v)}
            />
            <FormField
              label="Qualification"
              name="qualification"
              value={formData.qualification}
              onChange={(v) => updateField('qualification', v)}
              placeholder="M.Sc., Ph.D."
            />
            <FormField
              label="Experience"
              name="experience"
              value={formData.experience}
              onChange={(v) => updateField('experience', v)}
              placeholder="10 years"
            />
            <FormField
              label="Salary"
              name="salary"
              type="number"
              value={formData.salary}
              onChange={(v) => updateField('salary', Number(v))}
              placeholder="50000"
            />
            <FormField
              label="Status"
              name="status"
              type="select"
              value={formData.status}
              onChange={(v) => updateField('status', v)}
              options={[
                { value: 'Active', label: 'Active' },
                { value: 'Inactive', label: 'Inactive' },
                { value: 'On Leave', label: 'On Leave' },
              ]}
              required
            />
            <FormField
              label="Photo URL"
              name="photoUrl"
              value={formData.photoUrl || ''}
              onChange={(v) => updateField('photoUrl', v)}
              placeholder="https://example.com/photo.jpg"
            />
            <FormField
              label="Emergency Contact Name"
              name="emergencyContactName"
              value={formData.emergencyContactName || ''}
              onChange={(v) => updateField('emergencyContactName', v)}
              placeholder="Jane Doe"
            />
            <FormField
              label="Emergency Contact Phone"
              name="emergencyContact"
              value={formData.emergencyContact || ''}
              onChange={(v) => updateField('emergencyContact', v)}
              placeholder="1234567890"
            />
          </div>

          <div className="flex justify-end gap-4 mt-8">
            <Button type="button" variant="outline" onClick={() => navigate('/staff')} disabled={loading}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? 'Saving...' : 'Add Staff'}
            </Button>
          </div>
        </Card>
      </form>
    </div>
  );
}
