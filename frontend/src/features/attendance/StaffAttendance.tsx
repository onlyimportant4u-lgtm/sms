import { useState } from 'react';
import { Calendar, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface StaffAttendanceRecord {
  id: string;
  name: string;
  employeeId: string;
  department: string;
  status: 'Present' | 'Absent' | 'Leave' | 'Half Day';
}

const mockStaff: StaffAttendanceRecord[] = [
  { id: '1', name: 'John Smith', employeeId: 'EMP001', department: 'Mathematics', status: 'Present' },
  { id: '2', name: 'Sarah Williams', employeeId: 'EMP002', department: 'Science', status: 'Present' },
  { id: '3', name: 'Michael Brown', employeeId: 'EMP003', department: 'English', status: 'Leave' },
  { id: '4', name: 'Emily Davis', employeeId: 'EMP004', department: 'Administration', status: 'Present' },
];

export default function StaffAttendance() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [staff, setStaff] = useState<StaffAttendanceRecord[]>(mockStaff);

  const updateStatus = (id: string, status: StaffAttendanceRecord['status']) => {
    setStaff(staff.map(s => s.id === id ? { ...s, status } : s));
  };

  const filteredStaff = selectedDepartment === 'all' 
    ? staff 
    : staff.filter(s => s.department === selectedDepartment);

  const presentCount = filteredStaff.filter(s => s.status === 'Present').length;
  const absentCount = filteredStaff.filter(s => s.status === 'Absent').length;
  const leaveCount = filteredStaff.filter(s => s.status === 'Leave').length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Staff Attendance</h1>
          <p className="text-muted-foreground mt-1">
            Mark and manage staff attendance
          </p>
        </div>
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Export Report
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4">
          <p className="text-sm text-muted-foreground">Present</p>
          <p className="text-3xl font-bold text-green-600">{presentCount}</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground">Absent</p>
          <p className="text-3xl font-bold text-red-600">{absentCount}</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground">On Leave</p>
          <p className="text-3xl font-bold text-orange-600">{leaveCount}</p>
        </Card>
      </div>

      <Card className="p-6">
        <div className="flex gap-4 mb-6">
          <div className="flex-1">
            <label className="text-sm font-medium mb-2 block">Department</label>
            <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
              <SelectTrigger>
                <SelectValue placeholder="Select Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="Mathematics">Mathematics</SelectItem>
                <SelectItem value="Science">Science</SelectItem>
                <SelectItem value="English">English</SelectItem>
                <SelectItem value="Administration">Administration</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1">
            <label className="text-sm font-medium mb-2 block">Date</label>
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

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium">Employee ID</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Name</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Department</th>
                <th className="px-4 py-3 text-center text-sm font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredStaff.map((member) => (
                <tr key={member.id} className="border-t">
                  <td className="px-4 py-3">{member.employeeId}</td>
                  <td className="px-4 py-3 font-medium">{member.name}</td>
                  <td className="px-4 py-3">{member.department}</td>
                  <td className="px-4 py-3">
                    <div className="flex justify-center gap-2">
                      <Button
                        variant={member.status === 'Present' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => updateStatus(member.id, 'Present')}
                      >
                        Present
                      </Button>
                      <Button
                        variant={member.status === 'Absent' ? 'destructive' : 'outline'}
                        size="sm"
                        onClick={() => updateStatus(member.id, 'Absent')}
                      >
                        Absent
                      </Button>
                      <Button
                        variant={member.status === 'Leave' ? 'secondary' : 'outline'}
                        size="sm"
                        onClick={() => updateStatus(member.id, 'Leave')}
                      >
                        Leave
                      </Button>
                      <Button
                        variant={member.status === 'Half Day' ? 'secondary' : 'outline'}
                        size="sm"
                        onClick={() => updateStatus(member.id, 'Half Day')}
                      >
                        Half Day
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex justify-end gap-2">
          <Button variant="outline">Reset</Button>
          <Button>Save Attendance</Button>
        </div>
      </Card>
    </div>
  );
}
