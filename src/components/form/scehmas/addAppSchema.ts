import { z } from 'zod';

export const add_app_schema = z.object({
  employer: z.string().min(1, { message: 'Employer name is required' }),
  position: z.string().min(1, { message: 'Position name is required' }),
  location: z.string().optional(),
  platform: z.array(z.string()).min(1, { message: 'Platform is required' }),
  applicationDate: z.date().refine((date) => date < new Date(), {
    message: 'applicationDate must be in the past',
  }),
  note: z.string().optional(),
});

export type AddAppSchema = z.infer<typeof add_app_schema>;

export const defaultValues: AddAppSchema = {
  employer: '',
  position: '',
  location: '',
  platform: [],
  applicationDate: new Date(),
  note: '',
};
