import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export default function DashboardReports() {
  const reports = [
    {
      id: '1',
      title: 'Student Enrollment Report',
      description: 'Total students enrolled by class and section',
      category: 'Students',
    },
    {
      id: '2',
      title: 'Fee Collection Report',
      description: 'Monthly fee collection summary',
      category: 'Finance',
    },
    {
      id: '3',
      title: 'Attendance Report',
      description: 'Student and staff attendance statistics',
      category: 'Attendance',
    },
    {
      id: '4',
      title: 'Exam Performance Report',
      description: 'Class-wise exam performance analysis',
      category: 'Academics',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Reports</h1>
        <p className="text-muted-foreground mt-1">
          Generate and download various school reports
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reports.map((report) => (
          <Card key={report.id} className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {report.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {report.description}
                </p>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  {report.category}
                </span>
              </div>
              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
