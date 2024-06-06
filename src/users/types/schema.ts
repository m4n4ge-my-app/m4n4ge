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
  states: z
    .array(z.string())
    .min(1, { message: 'State is required' })
    .max(2, { message: 'Select up to 2 states' }),
  languagesSpoken: z.array(z.string()),
  gender: z.string().min(1, { message: 'Gender is required' }),
  skills: z.array(z.string()).max(2, { message: 'Select up to 2 skills' }),
  registrationDateAndTime: z.date(),
  formerEmploymentPeriod: z.array(z.date()).min(2).max(2),
  salaryRange: z.array(z.number()).min(2).max(2),
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  name: '',
  email: '',
  states: [],
  languagesSpoken: [],
  gender: '',
  skills: [],
  registrationDateAndTime: new Date(),
  formerEmploymentPeriod: [new Date(), new Date()],
  salaryRange: [0, 100],
};
