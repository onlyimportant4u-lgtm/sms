import { z } from 'zod';

export const collectFeeSchema = z.object({
  body: z.object({
    studentId: z.string().min(1),
    amount: z.number().positive(),
    receiptNo: z.string().optional(),
  }),
});

