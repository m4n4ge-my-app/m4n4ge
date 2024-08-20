import { z } from 'zod';

export const add_app_schema = z
  .object({
    employerName: z.string().min(1, { message: 'Employer name is required' }),
    applicationStatus: z.string().optional(),
    positionName: z.string().min(1, { message: 'Position name is required' }),
    jobLocation: z.string().optional(),
    jobPlatform: z.string().min(1, { message: 'Platform is required' }),
    applicationDate: z.date().refine((date) => date < new Date(), {
      message: 'Date selection must be in the past',
    }),
    jobPostPostingDate: z
      .date()
      .refine((date) => date < new Date(), {
        message: 'Posting date must be in the past',
      })
      .optional(),
    jobPostEndingDate: z.date().optional(),
    workModel: z
      .array(z.string())
      .max(1, { message: 'Only select one type of work model' }),
    note: z.string().optional(),
    isFavorite: z.boolean().optional(),
  })
  .refine(
    (data) => {
      if (data.jobPostPostingDate && data.jobPostEndingDate) {
        return data.jobPostEndingDate >= data.jobPostPostingDate;
      }
      return true;
    },
    {
      message: 'Ending date cannot be before the Posting date',
      path: ['jobPostEndingDate'],
    }
  );

export type AddAppSchema = z.infer<typeof add_app_schema>;

export const defaultValues: AddAppSchema = {
  employerName: '',
  applicationStatus: 'Applied',
  positionName: '',
  jobLocation: '',
  jobPlatform: '',
  applicationDate: new Date(),
  jobPostPostingDate: new Date(),
  jobPostEndingDate: new Date(),
  workModel: ['1'], //since work model is designed to set the first option when UI loads (refer to RHFToggleButtonGroup), setting 1 here ensure default value is set if user does not interact with the field when submitting the form
  note: '',
  isFavorite: false,
};
