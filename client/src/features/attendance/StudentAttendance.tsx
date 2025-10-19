import { useState } from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function StudentAttendance() {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const mockStudents = [
    { id: '1', name: 'John Doe', rollNo: '15', status: 'Present' },
    { id: '2', name: 'Jane Smith', rollNo: '12', status: 'Present' },
    { id: '3', name: 'Alice Johnson', rollNo: '8', status: 'Absent' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Student Attendance</h1>
        <p className="text-muted-foreground mt-1">
          Mark and manage student attendance
        </p>
      </div>

      <Card className="p-6">
        <div className="flex gap-4 mb-6">
          <div className="flex-1">
            <Select value={selectedClass} onValueChange={setSelectedClass}>
              <SelectTrigger>
                <SelectValue placeholder="Select Class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="class-10-a">Class 10 A</SelectItem>
                <SelectItem value="class-10-b">Class 10 B</SelectItem>
                <SelectItem value="class-9-a">Class 9 A</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1">
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          {mockStudents.map((student) => (
            <div
              key={student.id}
              className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50"
            >
              <div className="flex items-center gap-4">
                <span className="font-medium">{student.rollNo}</span>
                <span>{student.name}</span>
              </div>
              <div className="flex gap-2">
                <Button
                  variant={student.status === 'Present' ? 'default' : 'outline'}
                  size="sm"
                >
                  Present
                </Button>
                <Button
                  variant={student.status === 'Absent' ? 'destructive' : 'outline'}
                  size="sm"
                >
                  Absent
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-end">
          <Button>Save Attendance</Button>
        </div>
      </Card>
    </div>
  );
}
