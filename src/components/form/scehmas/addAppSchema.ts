import { z } from 'zod';

export const add_app_schema = z.object({
  employer: z.string().min(1, { message: 'Employer name is required' }),
  position: z.string().min(1, { message: 'Position name is required' }),
  location: z.string().optional(),
  platform: z.array(z.string()).min(1, { message: 'Platform is required' }),
  note: z.string().optional(),
});

export type AddAppSchema = z.infer<typeof add_app_schema>;

export const defaultValues: AddAppSchema = {
  employer: '',
  position: '',
  location: '',
  platform: [],
  note: '',
};
