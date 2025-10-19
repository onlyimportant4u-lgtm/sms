import { useState } from 'react';
import { Plus, Edit, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface FeeStructureItem {
  id: string;
  className: string;
  academicYear: string;
  tuitionFee: number;
  admissionFee: number;
  examFee: number;
  libraryFee: number;
  sportsFee: number;
  totalFee: number;
}

const mockStructures: FeeStructureItem[] = [
  {
    id: '1',
    className: 'Class 10 A',
    academicYear: '2024-2025',
    tuitionFee: 5000,
    admissionFee: 2000,
    examFee: 1000,
    libraryFee: 500,
    sportsFee: 500,
    totalFee: 9000,
  },
  {
    id: '2',
    className: 'Class 9 A',
    academicYear: '2024-2025',
    tuitionFee: 4500,
    admissionFee: 2000,
    examFee: 1000,
    libraryFee: 500,
    sportsFee: 500,
    totalFee: 8500,
  },
];

export default function FeeStructure() {
  const [structures] = useState<FeeStructureItem[]>(mockStructures);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Fee Structure</h1>
          <p className="text-muted-foreground mt-1">
            Manage fee structures for different classes
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Structure
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {structures.map((structure) => (
          <Card key={structure.id} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {structure.className}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {structure.academicYear}
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-destructive">
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Tuition Fee</span>
                <span className="font-medium">₹{structure.tuitionFee}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Admission Fee</span>
                <span className="font-medium">₹{structure.admissionFee}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Exam Fee</span>
                <span className="font-medium">₹{structure.examFee}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Library Fee</span>
                <span className="font-medium">₹{structure.libraryFee}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Sports Fee</span>
                <span className="font-medium">₹{structure.sportsFee}</span>
              </div>
              <div className="border-t pt-3 flex justify-between font-semibold">
                <span>Total Fee</span>
                <span className="text-primary">₹{structure.totalFee}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
