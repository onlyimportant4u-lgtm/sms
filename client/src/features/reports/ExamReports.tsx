import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export default function ExamReports() {
  const examStats = [
    { label: 'Total Students', value: '850', color: 'text-blue-600' },
    { label: 'Average Score', value: '72.5%', color: 'text-green-600' },
    { label: 'Pass Rate', value: '88%', color: 'text-purple-600' },
    { label: 'Top Score', value: '98%', color: 'text-orange-600' },
  ];

  const subjectPerformance = [
    { subject: 'Mathematics', avgScore: 75, passRate: 85, topScore: 98 },
    { subject: 'Science', avgScore: 78, passRate: 90, topScore: 96 },
    { subject: 'English', avgScore: 70, passRate: 82, topScore: 95 },
    { subject: 'Hindi', avgScore: 72, passRate: 88, topScore: 94 },
    { subject: 'Social Studies', avgScore: 68, passRate: 80, topScore: 92 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Exam Performance Reports</h1>
          <p className="text-muted-foreground mt-1">
            Detailed examination analytics
          </p>
        </div>
        <Button className="gap-2">
          <Download className="h-4 w-4" />
          Export Report
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {examStats.map((stat, index) => (
          <Card key={index} className="p-6">
            <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Subject-wise Performance</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Subject</th>
                <th className="text-right py-3 px-4">Average Score (%)</th>
                <th className="text-right py-3 px-4">Pass Rate (%)</th>
                <th className="text-right py-3 px-4">Top Score (%)</th>
                <th className="text-right py-3 px-4">Grade</th>
              </tr>
            </thead>
            <tbody>
              {subjectPerformance.map((subject, index) => {
                const grade =
                  subject.avgScore >= 90
                    ? 'A+'
                    : subject.avgScore >= 80
                    ? 'A'
                    : subject.avgScore >= 70
                    ? 'B'
                    : subject.avgScore >= 60
                    ? 'C'
                    : 'D';
                return (
                  <tr key={index} className="border-b">
                    <td className="py-3 px-4 font-medium">{subject.subject}</td>
                    <td className="text-right py-3 px-4">{subject.avgScore}</td>
                    <td className="text-right py-3 px-4">{subject.passRate}</td>
                    <td className="text-right py-3 px-4">{subject.topScore}</td>
                    <td className="text-right py-3 px-4 font-semibold">{grade}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
