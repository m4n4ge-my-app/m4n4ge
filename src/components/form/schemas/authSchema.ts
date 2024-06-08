import { pattern } from '../utils/constants';
import { z } from 'zod';

export const auth_schema = z
  .object({
    first_name: z.string().min(1, { message: 'First name is required' }),
    last_name: z.string().min(1, { message: 'Last name is required' }),
    signup_email: z
      .string()
      .min(1, { message: 'Email is required' })
      .refine((input) => pattern.email.test(input), {
        message: 'Invalid email address',
      }),
    signup_password: z
      .string()
      .min(1, { message: 'Password is required' })
      .refine((input) => pattern.password.test(input), {
        message:
          'Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character',
      }),
    confirm_signup_password: z
      .string()
      .min(1, { message: 'Confirm Password is required' }),
    signin_email: z.string().min(1, { message: 'Email is required' }),
    signin_password: z.string().min(1, { message: 'Email is required' }),
  })
  .refine(
    (data) => {
      if (data.signup_password && data.confirm_signup_password) {
        return data.signup_password >= data.confirm_signup_password;
      }
      return true;
    },
    {
      message: 'Confirm password must match password',
      path: ['confirm_signup_password'],
    }
  );

export type AuthSchema = z.infer<typeof auth_schema>;

export const defaultValues: AuthSchema = {
  first_name: '',
  last_name: '',
  signup_email: '',
  signup_password: '',
  confirm_signup_password: '',
  signin_email: '',
  signin_password: '',
};
