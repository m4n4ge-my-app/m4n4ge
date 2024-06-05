import { z } from 'zod';
import { pattern } from '../utils/constants';

export const schema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .refine((input) => pattern.email.test(input), {
      message: 'Invalid email address',
    }),
});
