import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/core/ui/Table';
import { TableColumn } from '@/types/common';
import { Download } from 'lucide-react';

const columns: TableColumn[] = [
  { key: 'routeNo', label: 'Route', sortable: true },
  { key: 'totalStudents', label: 'Total Students', sortable: true },
  { key: 'activeStudents', label: 'Active', sortable: true },
  { key: 'totalRevenue', label: 'Total Revenue', sortable: true },
  { key: 'collected', label: 'Collected', sortable: true },
  { key: 'pending', label: 'Pending', sortable: true },
];

const mockReportData = [
  {
    id: '1',
    routeNo: 'R-001',
    totalStudents: 45,
    activeStudents: 42,
    totalRevenue: 90000,
    collected: 84000,
    pending: 6000,
  },
  {
    id: '2',
    routeNo: 'R-002',
    totalStudents: 30,
    activeStudents: 28,
    totalRevenue: 54000,
    collected: 50400,
    pending: 3600,
  },
];

export default function TransportReports() {
  const [reportData] = useState(mockReportData);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Transport Reports</h1>
        <p className="text-muted-foreground mt-1">View and export transport reports</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Report Filters</CardTitle>
          <CardDescription>Select date range and route</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <Label htmlFor="startDate">Start Date</Label>
              <Input id="startDate" type="date" />
            </div>
            <div>
              <Label htmlFor="endDate">End Date</Label>
              <Input id="endDate" type="date" />
            </div>
            <div>
              <Label htmlFor="route">Route</Label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Routes</SelectItem>
                  <SelectItem value="1">R-001</SelectItem>
                  <SelectItem value="2">R-002</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button className="w-full">Generate Report</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">75</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Active Routes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹1,44,000</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Pending Amount</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">₹9,600</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Route-wise Summary</CardTitle>
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={reportData} searchPlaceholder="Search routes..." />
        </CardContent>
      </Card>
    </div>
  );
}
