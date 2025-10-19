import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Announcement {
  id: string;
  title: string;
  message: string;
  date: string;
  audience: string;
  priority: 'High' | 'Medium' | 'Low';
}

const mockAnnouncements: Announcement[] = [
  {
    id: '1',
    title: 'Mid-Term Examination Schedule',
    message: 'Mid-term exams will be conducted from Jan 15-20, 2024.',
    date: '2024-01-05',
    audience: 'Students & Parents',
    priority: 'High',
  },
  {
    id: '2',
    title: 'Parent-Teacher Meeting',
    message: 'PTM scheduled for January 20, 2024 at 10:00 AM.',
    date: '2024-01-03',
    audience: 'Parents',
    priority: 'Medium',
  },
];

export default function AnnouncementList() {
  const [announcements] = useState<Announcement[]>(mockAnnouncements);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Announcements</h1>
          <p className="text-muted-foreground mt-1">
            Create and manage school announcements
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Announcement
        </Button>
      </div>

      <div className="space-y-4">
        {announcements.map((announcement) => (
          <Card key={announcement.id} className="p-6">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {announcement.title}
                  </h3>
                  <Badge
                    variant={
                      announcement.priority === 'High'
                        ? 'destructive'
                        : announcement.priority === 'Medium'
                        ? 'default'
                        : 'secondary'
                    }
                  >
                    {announcement.priority}
                  </Badge>
                </div>
                <p className="text-muted-foreground">{announcement.message}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>📅 {announcement.date}</span>
              <span>👥 {announcement.audience}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
