import { z } from 'zod';

export const createBookSchema = z.object({
  body: z.object({
    title: z.string().min(1),
    author: z.string().min(1),
    isbn: z.string().optional(),
    category: z.string().optional(),
    copies: z.number().int().min(1).optional(),
  }),
});

export const createMemberSchema = z.object({
  body: z.object({
    name: z.string().min(1),
    email: z.string().email().optional(),
    phone: z.string().optional(),
    type: z.enum(['Student', 'Staff', 'External']).optional(),
  }),
});

