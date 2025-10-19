import { z } from 'zod';

export const createExamSchema = z.object({
  body: z.object({
    name: z.string().min(1),
    date: z.coerce.date(),
    className: z.string().min(1),
  }),
});

export const submitResultSchema = z.object({
  body: z.object({
    examId: z.string().min(1),
    studentId: z.string().min(1),
    subject: z.string().min(1),
    marks: z.number().min(0),
  }),
});

