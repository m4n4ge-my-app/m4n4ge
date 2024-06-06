import { Stack, TextField, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { Schema } from '../types/schema';
import { RHFAutocomplete } from '../../components/form/formControllers/RHFAutocomplete';
import { useEffect } from 'react';
import {
  useGenders,
  useLanguages,
  useSkills,
  useStates,
} from '../services/queries';
import { RHFToggleButtonGroup } from '../../components/form/formControllers/RHFToggleButtonGroup';
import { RHFRadioGroup } from '../../components/form/formControllers/RHFRadioGroup';
import { RHFCheckbox } from '../../components/form/formControllers/RHFCheckbox';
import { RHFDateTimePicker } from '../../components/form/formControllers/RHFDateTimePicker';
import { RHFDateRangePicker } from '../../components/form/formControllers/RHFDateRangerPicker';
import { RHFSlider } from '../../components/form/formControllers/RHFSlider';
import { RHFSwitch } from '../../components/form/formControllers/RHFSwitch';

export function Users() {
  const statesQuery = useStates();
  const languagesQuery = useLanguages();
  const gendersQuery = useGenders();
  const skillsQuery = useSkills();

  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<Schema>();

  useEffect(() => {
    const subscription = watch((value) => {
      console.log(value);
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <Stack sx={{ gap: 2 }}>
      <TextField
        {...register('name')}
        label="Name"
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        {...register('email')}
        label="Email"
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <RHFAutocomplete<Schema>
        name="states"
        label="states"
        options={statesQuery.data}
      />
      <RHFToggleButtonGroup<Schema>
        name="languagesSpoken"
        options={languagesQuery.data}
      />
      <RHFRadioGroup<Schema>
        name="gender"
        label="Gender"
        options={gendersQuery.data}
      />
      <RHFCheckbox<Schema>
        name="skills"
        label="Skills"
        options={skillsQuery.data}
      />
      <RHFDateTimePicker<Schema>
        name="registrationDateAndTime"
        label="Registration Date and Time"
      />
      <Typography>Former Employment Period:</Typography>
      <RHFDateRangePicker<Schema> name="formerEmploymentPeriod" />
      <RHFSlider<Schema> name="salaryRange" label="Salaray Range" />
      <RHFSwitch<Schema> name="isTeacher" label="Are you a Teacher ?" />
    </Stack>
  );
}
