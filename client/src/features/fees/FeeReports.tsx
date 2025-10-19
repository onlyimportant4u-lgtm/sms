import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Calendar } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function FeeReports() {
  const [startDate, setStartDate] = useState('2024-01-01');
  const [endDate, setEndDate] = useState('2024-12-31');

  const reportTypes = [
    {
      id: '1',
      title: 'Fee Collection Summary',
      description: 'Overall fee collection statistics',
      category: 'Finance',
    },
    {
      id: '2',
      title: 'Outstanding Fees Report',
      description: 'List of students with pending fees',
      category: 'Finance',
    },
    {
      id: '3',
      title: 'Class-wise Fee Collection',
      description: 'Fee collection breakdown by class',
      category: 'Finance',
    },
    {
      id: '4',
      title: 'Monthly Collection Trend',
      description: 'Month-wise fee collection analysis',
      category: 'Finance',
    },
  ];

  const summaryStats = [
    {
      label: 'Total Expected',
      value: '₹50,00,000',
      color: 'text-blue-600',
    },
    {
      label: 'Total Collected',
      value: '₹42,50,000',
      color: 'text-green-600',
    },
    {
      label: 'Total Pending',
      value: '₹7,50,000',
      color: 'text-orange-600',
    },
    {
      label: 'Collection Rate',
      value: '85%',
      color: 'text-purple-600',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Fee Reports</h1>
        <p className="text-muted-foreground mt-1">
          Generate and download fee collection reports
        </p>
      </div>

      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Date Range</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="start-date">Start Date</Label>
            <Input
              id="start-date"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="end-date">End Date</Label>
            <Input
              id="end-date"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="mt-1"
            />
          </div>
          <div className="flex items-end">
            <Button className="w-full gap-2">
              <Calendar className="h-4 w-4" />
              Apply Filter
            </Button>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {summaryStats.map((stat, index) => (
          <Card key={index} className="p-6">
            <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reportTypes.map((report) => (
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
