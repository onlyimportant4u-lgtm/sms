import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, TrendingUp, TrendingDown } from 'lucide-react';

export default function FeeReports() {
  const reportStats = [
    {
      label: 'Total Expected',
      value: '₹50,00,000',
      trend: '+12%',
      isPositive: true,
    },
    {
      label: 'Total Collected',
      value: '₹42,50,000',
      trend: '+8%',
      isPositive: true,
    },
    {
      label: 'Total Pending',
      value: '₹7,50,000',
      trend: '-5%',
      isPositive: true,
    },
    {
      label: 'Overdue Amount',
      value: '₹1,20,000',
      trend: '+3%',
      isPositive: false,
    },
  ];

  const classWiseData = [
    { className: 'Class 10', expected: '10,00,000', collected: '8,50,000', pending: '1,50,000' },
    { className: 'Class 9', expected: '9,00,000', collected: '7,80,000', pending: '1,20,000' },
    { className: 'Class 8', expected: '8,50,000', collected: '7,20,000', pending: '1,30,000' },
    { className: 'Class 7', expected: '8,00,000', collected: '6,80,000', pending: '1,20,000' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Fee Collection Reports</h1>
          <p className="text-muted-foreground mt-1">
            Comprehensive fee collection analytics
          </p>
        </div>
        <Button className="gap-2">
          <Download className="h-4 w-4" />
          Export Report
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {reportStats.map((stat, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              </div>
              <div className={`flex items-center gap-1 text-sm ${stat.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                {stat.isPositive ? (
                  <TrendingUp className="h-4 w-4" />
                ) : (
                  <TrendingDown className="h-4 w-4" />
                )}
                {stat.trend}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Class-wise Fee Collection</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Class</th>
                <th className="text-right py-3 px-4">Expected (₹)</th>
                <th className="text-right py-3 px-4">Collected (₹)</th>
                <th className="text-right py-3 px-4">Pending (₹)</th>
                <th className="text-right py-3 px-4">Collection %</th>
              </tr>
            </thead>
            <tbody>
              {classWiseData.map((row, index) => {
                const collectionRate = (
                  (parseFloat(row.collected.replace(/,/g, '')) /
                    parseFloat(row.expected.replace(/,/g, ''))) *
                  100
                ).toFixed(1);
                return (
                  <tr key={index} className="border-b">
                    <td className="py-3 px-4 font-medium">{row.className}</td>
                    <td className="text-right py-3 px-4">{row.expected}</td>
                    <td className="text-right py-3 px-4 text-green-600">{row.collected}</td>
                    <td className="text-right py-3 px-4 text-orange-600">{row.pending}</td>
                    <td className="text-right py-3 px-4">{collectionRate}%</td>
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
