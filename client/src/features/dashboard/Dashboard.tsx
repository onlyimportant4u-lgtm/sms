import { Users, DollarSign, BookOpen, Calendar } from 'lucide-react';
import { StatsCard } from './components/SummaryCard';
import { Card } from '@/components/ui/card';

export default function Dashboard() {
  const recentActivities = [
    {
      id: 1,
      title: 'New student admission',
      description: 'John Doe admitted to Class 10 A',
      time: '2 hours ago',
      type: 'student',
    },
    {
      id: 2,
      title: 'Fee payment received',
      description: 'Jane Smith paid ₹5,000 tuition fee',
      time: '3 hours ago',
      type: 'fee',
    },
    {
      id: 3,
      title: 'Exam schedule updated',
      description: 'Mid-term exam dates published',
      time: '5 hours ago',
      type: 'exam',
    },
    {
      id: 4,
      title: 'Staff attendance marked',
      description: '45 out of 50 staff members present',
      time: '1 day ago',
      type: 'attendance',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Welcome back! Here's what's happening in your school today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Students"
          value="1,234"
          icon={Users}
          trend={{ value: 12, isPositive: true }}
        />
        <StatsCard
          title="Total Revenue"
          value="₹4.2L"
          icon={DollarSign}
          trend={{ value: 8, isPositive: true }}
        />
        <StatsCard
          title="Active Courses"
          value="48"
          icon={BookOpen}
          trend={{ value: 3, isPositive: false }}
        />
        <StatsCard
          title="Attendance Rate"
          value="94%"
          icon={Calendar}
          trend={{ value: 5, isPositive: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Recent Activities
          </h2>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  {activity.type === 'student' && <Users className="h-5 w-5 text-primary" />}
                  {activity.type === 'fee' && <DollarSign className="h-5 w-5 text-accent" />}
                  {activity.type === 'exam' && <BookOpen className="h-5 w-5 text-primary" />}
                  {activity.type === 'attendance' && <Calendar className="h-5 w-5 text-accent" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground">{activity.title}</p>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Upcoming Events
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-3 rounded-lg bg-primary/5 border border-primary/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15</div>
                <div className="text-xs text-muted-foreground">Jan</div>
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">Mid-Term Examinations</p>
                <p className="text-sm text-muted-foreground">Classes 9-12</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-3 rounded-lg bg-accent/5 border border-accent/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">20</div>
                <div className="text-xs text-muted-foreground">Jan</div>
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">Parent-Teacher Meeting</p>
                <p className="text-sm text-muted-foreground">All classes</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-3 rounded-lg bg-muted/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">26</div>
                <div className="text-xs text-muted-foreground">Jan</div>
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">Republic Day Celebration</p>
                <p className="text-sm text-muted-foreground">School holiday</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="font-semibold text-foreground mb-3">Quick Actions</h3>
          <div className="space-y-2">
            <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-muted transition-colors text-sm">
              Mark Attendance
            </button>
            <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-muted transition-colors text-sm">
              Collect Fee
            </button>
            <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-muted transition-colors text-sm">
              Create Announcement
            </button>
            <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-muted transition-colors text-sm">
              Generate Report
            </button>
          </div>
        </Card>

        <Card className="p-6 col-span-2">
          <h3 className="font-semibold text-foreground mb-3">Fee Collection Overview</h3>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Expected</p>
              <p className="text-xl font-bold text-foreground mt-1">₹5.2L</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Collected</p>
              <p className="text-xl font-bold text-accent mt-1">₹4.2L</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Pending</p>
              <p className="text-xl font-bold text-destructive mt-1">₹1.0L</p>
            </div>
          </div>
          <div className="mt-4 h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-accent" style={{ width: '80%' }}></div>
          </div>
          <p className="text-xs text-muted-foreground mt-2">80% collection rate this month</p>
        </Card>
      </div>
    </div>
  );
}
