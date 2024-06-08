import { z } from 'zod';

export const auth_schema = z.object({
  signin_email: z.string().min(1, { message: 'Email is required' }),
  signin_password: z.string().min(1, { message: 'Email is required' }),
});

export type AuthSchema = z.infer<typeof auth_schema>;

export const defaultValues: AuthSchema = {
  signin_email: '',
  signin_password: '',
};
