import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ExamScheduleItem {
  id: string;
  examName: string;
  className: string;
  subject: string;
  date: string;
  time: string;
  duration: string;
  maxMarks: number;
}

const mockSchedules: ExamScheduleItem[] = [
  {
    id: '1',
    examName: 'Mid-Term Exam',
    className: 'Class 10 A',
    subject: 'Mathematics',
    date: '2024-01-15',
    time: '10:00 AM',
    duration: '3 hours',
    maxMarks: 100,
  },
  {
    id: '2',
    examName: 'Mid-Term Exam',
    className: 'Class 10 A',
    subject: 'Science',
    date: '2024-01-17',
    time: '10:00 AM',
    duration: '3 hours',
    maxMarks: 100,
  },
];

export default function ExamSchedule() {
  const [schedules] = useState<ExamScheduleItem[]>(mockSchedules);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Exam Schedule</h1>
          <p className="text-muted-foreground mt-1">
            Manage examination timetables
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Schedule
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {schedules.map((schedule) => (
          <Card key={schedule.id} className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Exam</p>
                <p className="font-medium">{schedule.examName}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Class</p>
                <p className="font-medium">{schedule.className}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Subject</p>
                <p className="font-medium">{schedule.subject}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Date</p>
                <p className="font-medium">{schedule.date}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Time</p>
                <p className="font-medium">{schedule.time}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Max Marks</p>
                <p className="font-medium">{schedule.maxMarks}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
