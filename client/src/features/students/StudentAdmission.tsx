// src/features/students/StudentAdmission.tsx

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FormField } from '@/core/ui/FormField';
import { useToast } from '@/hooks/use-toast';
import { StudentFormData } from '@/types/student';

export default function StudentAdmission() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<StudentFormData>({
    admissionNo: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: 'Male',
    email: '',
    phone: '',
    address: '',
    className: '',
    section: '',
    rollNo: '',
    admissionDate: new Date().toISOString().split('T')[0],
    status: 'Active',
    guardianName: '',
    guardianPhone: '',
    guardianEmail: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: 'Success',
        description: 'Student admitted successfully',
      });
      
      navigate('/students');
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to admit student',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const updateField = (field: keyof StudentFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate('/students')}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-foreground">Student Admission</h1>
          <p className="text-muted-foreground mt-1">Add a new student to the system</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FormField
              label="Admission Number"
              name="admissionNo"
              value={formData.admissionNo}
              onChange={(value) => updateField('admissionNo', value)}
              required
              placeholder="ADM001"
            />
            
            <FormField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={(value) => updateField('firstName', value)}
              required
              placeholder="John"
            />
            
            <FormField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={(value) => updateField('lastName', value)}
              required
              placeholder="Doe"
            />
            
            <FormField
              label="Date of Birth"
              name="dateOfBirth"
              type="date"
              value={formData.dateOfBirth}
              onChange={(value) => updateField('dateOfBirth', value)}
              required
            />
            
            <FormField
              label="Gender"
              name="gender"
              type="select"
              value={formData.gender}
              onChange={(value) => updateField('gender', value)}
              options={[
                { value: 'Male', label: 'Male' },
                { value: 'Female', label: 'Female' },
                { value: 'Other', label: 'Other' },
              ]}
              required
            />
            
            <FormField
              label="Email"
              name="email"
              type="email"
              value={formData.email || ''}
              onChange={(value) => updateField('email', value)}
              placeholder="john.doe@example.com"
            />
            
            <FormField
              label="Phone"
              name="phone"
              type="tel"
              value={formData.phone || ''}
              onChange={(value) => updateField('phone', value)}
              placeholder="1234567890"
            />
            
            <FormField
              label="Class"
              name="className"
              type="select"
              value={formData.className}
              onChange={(value) => updateField('className', value)}
              options={[
                { value: 'Class 1', label: 'Class 1' },
                { value: 'Class 2', label: 'Class 2' },
                { value: 'Class 3', label: 'Class 3' },
                { value: 'Class 4', label: 'Class 4' },
                { value: 'Class 5', label: 'Class 5' },
                { value: 'Class 6', label: 'Class 6' },
                { value: 'Class 7', label: 'Class 7' },
                { value: 'Class 8', label: 'Class 8' },
                { value: 'Class 9', label: 'Class 9' },
                { value: 'Class 10', label: 'Class 10' },
              ]}
              required
            />
            
            <FormField
              label="Section"
              name="section"
              type="select"
              value={formData.section}
              onChange={(value) => updateField('section', value)}
              options={[
                { value: 'A', label: 'A' },
                { value: 'B', label: 'B' },
                { value: 'C', label: 'C' },
                { value: 'D', label: 'D' },
              ]}
              required
            />
            
            <FormField
              label="Roll Number"
              name="rollNo"
              value={formData.rollNo}
              onChange={(value) => updateField('rollNo', value)}
              required
              placeholder="15"
            />
            
            <FormField
              label="Admission Date"
              name="admissionDate"
              type="date"
              value={formData.admissionDate}
              onChange={(value) => updateField('admissionDate', value)}
              required
            />
          </div>

          <div className="mt-6">
            <FormField
              label="Address"
              name="address"
              type="textarea"
              value={formData.address}
              onChange={(value) => updateField('address', value)}
              required
              placeholder="123 Main St, City, State"
            />
          </div>

          <h2 className="text-xl font-semibold mb-6 mt-8">Guardian Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormField
              label="Guardian Name"
              name="guardianName"
              value={formData.guardianName}
              onChange={(value) => updateField('guardianName', value)}
              required
              placeholder="Robert Doe"
            />
            
            <FormField
              label="Guardian Phone"
              name="guardianPhone"
              type="tel"
              value={formData.guardianPhone}
              onChange={(value) => updateField('guardianPhone', value)}
              required
              placeholder="9876543210"
            />
            
            <FormField
              label="Guardian Email"
              name="guardianEmail"
              type="email"
              value={formData.guardianEmail || ''}
              onChange={(value) => updateField('guardianEmail', value)}
              placeholder="robert.doe@example.com"
            />
          </div>

          <div className="flex justify-end gap-4 mt-8">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/students')}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? 'Admitting...' : 'Admit Student'}
            </Button>
          </div>
        </Card>
      </form>
    </div>
  );
}
