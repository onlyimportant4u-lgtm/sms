import { z } from 'zod';

export const markAttendanceBulkSchema = z.object({
  body: z.object({
    records: z.array(z.object({
      studentId: z.string().min(1),
      date: z.coerce.date().transform(d => d.toISOString()),
      status: z.enum(['Present', 'Absent', 'Late', 'Half Day', 'Leave']),
      remarks: z.string().optional(),
    })).min(1),
  }),
});

