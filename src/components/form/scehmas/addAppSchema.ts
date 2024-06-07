import { z } from 'zod';

export const add_app_schema = z
  .object({
    employer: z.string().min(1, { message: 'Employer name is required' }),
    position: z.string().min(1, { message: 'Position name is required' }),
    location: z.string().optional(),
    platform: z.string().min(1, { message: 'Platform is required' }),
    applicationDate: z.date().refine((date) => date < new Date(), {
      message: 'Date selection must be in the past',
    }),
    jobPostPostingDate: z
      .date()
      .refine((date) => date < new Date(), {
        message: 'Posting date must be in the past',
      })
      .optional(),
    jobPostExpirationDate: z.date().optional(),
    note: z.string().optional(),
    isFavorite: z.boolean().optional(),
  })
  .refine(
    (data) => {
      if (data.jobPostPostingDate && data.jobPostExpirationDate) {
        return data.jobPostExpirationDate >= data.jobPostPostingDate;
      }
      return true;
    },
    {
      message: 'Ending date cannot be before the Posting date',
      path: ['jobPostExpirationDate'],
    }
  );

export type AddAppSchema = z.infer<typeof add_app_schema>;

export const defaultValues: AddAppSchema = {
  employer: '',
  position: '',
  location: '',
  platform: '',
  applicationDate: new Date(),
  jobPostPostingDate: new Date(),
  jobPostExpirationDate: new Date(),
  note: '',
  isFavorite: false,
};
