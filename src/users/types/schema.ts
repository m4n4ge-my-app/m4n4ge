import { z } from 'zod';

export const schema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: 'Required, also too short' })
    .max(100, { message: 'Too long' }),
});
