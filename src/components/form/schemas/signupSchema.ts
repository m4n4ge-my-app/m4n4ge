import { pattern } from '../utils/constants';
import { z } from 'zod';

export const signup_schema = z
  .object({
    firstName: z.string().min(1, { message: 'First name is required' }),
    lastName: z.string().min(1, { message: 'Last name is required' }),
    email: z
      .string()
      .min(1, { message: 'Email is required' })
      .refine((input) => pattern.email.test(input), {
        message: 'Invalid email address',
      }),
    password: z
      .string()
      .min(1, { message: 'Password is required' })
      .refine((input) => pattern.password.test(input), {
        message:
          'Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character',
      }),
    confirmPassword: z
      .string()
      .min(1, { message: 'Confirm Password is required' }),
  })
  .refine(
    (data) => {
      if (data.password && data.confirmPassword) {
        return data.password === data.confirmPassword;
      }
      return true;
    },
    {
      message: 'Confirm password must match password',
      path: ['confirmPassword'],
    }
  );

export type SignupSchema = z.infer<typeof signup_schema>;

export const defaultValues: SignupSchema = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};
