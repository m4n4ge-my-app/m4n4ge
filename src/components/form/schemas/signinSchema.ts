import { pattern } from '../utils/constants';
import { z } from 'zod';

export const signin_schema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .refine((input) => pattern.email.test(input), {
      message: 'Invalid email address',
    }),
  password: z.string().min(1, { message: 'Password is required' }),
});

export type SigninSchema = z.infer<typeof signin_schema>;

export const defaultValues: SigninSchema = {
  email: '',
  password: '',
};
