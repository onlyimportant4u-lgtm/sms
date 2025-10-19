import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export default function AttendanceReports() {
  const attendanceStats = [
    { label: 'Average Attendance', value: '92%', color: 'text-blue-600' },
    { label: 'Total Present', value: '782', color: 'text-green-600' },
    { label: 'Total Absent', value: '68', color: 'text-red-600' },
    { label: 'On Leave', value: '15', color: 'text-orange-600' },
  ];

  const classWiseAttendance = [
    { className: 'Class 10', totalStudents: 150, present: 142, absent: 8, percentage: 94.7 },
    { className: 'Class 9', totalStudents: 140, present: 130, absent: 10, percentage: 92.9 },
    { className: 'Class 8', totalStudents: 135, present: 125, absent: 10, percentage: 92.6 },
    { className: 'Class 7', totalStudents: 130, present: 118, absent: 12, percentage: 90.8 },
    { className: 'Class 6', totalStudents: 125, present: 115, absent: 10, percentage: 92.0 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Attendance Reports</h1>
          <p className="text-muted-foreground mt-1">
            Student attendance analytics
          </p>
        </div>
        <Button className="gap-2">
          <Download className="h-4 w-4" />
          Export Report
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {attendanceStats.map((stat, index) => (
          <Card key={index} className="p-6">
            <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Class-wise Attendance</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Class</th>
                <th className="text-right py-3 px-4">Total Students</th>
                <th className="text-right py-3 px-4">Present</th>
                <th className="text-right py-3 px-4">Absent</th>
                <th className="text-right py-3 px-4">Attendance %</th>
              </tr>
            </thead>
            <tbody>
              {classWiseAttendance.map((row, index) => (
                <tr key={index} className="border-b">
                  <td className="py-3 px-4 font-medium">{row.className}</td>
                  <td className="text-right py-3 px-4">{row.totalStudents}</td>
                  <td className="text-right py-3 px-4 text-green-600">{row.present}</td>
                  <td className="text-right py-3 px-4 text-red-600">{row.absent}</td>
                  <td className="text-right py-3 px-4 font-semibold">
                    {row.percentage.toFixed(1)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
