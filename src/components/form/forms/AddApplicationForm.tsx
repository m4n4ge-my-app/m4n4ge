import { useEffect } from 'react';
import {
  useGenders,
  useLanguages,
  useSkills,
  useStates,
} from '../../../users/services/queries';
import { useFormContext } from 'react-hook-form';
import { Schema } from '../../../users/types/schema';
import { Stack, Typography } from '@mui/material';
import { RHFTextField } from '../formControllers/RHFTextField';
import { RHFAutocomplete } from '../formControllers/RHFAutocomplete';
import { RHFToggleButtonGroup } from '../formControllers/RHFToggleButtonGroup';
import { RHFRadioGroup } from '../formControllers/RHFRadioGroup';
import { RHFCheckbox } from '../formControllers/RHFCheckbox';
import { RHFDateTimePicker } from '../formControllers/RHFDateTimePicker';
import { RHFDateRangePicker } from '../formControllers/RHFDateRangerPicker';
import { RHFSwitch } from '../formControllers/RHFSwitch';
import { RHFSlider } from '../formControllers/RHFSlider';

const AddApplicationForm = () => {
  const statesQuery = useStates();
  const languagesQuery = useLanguages();
  const gendersQuery = useGenders();
  const skillsQuery = useSkills();

  const { watch } = useFormContext<Schema>();

  useEffect(() => {
    const subscription = watch((value) => {
      console.log(value);
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <Stack sx={{ gap: 2 }}>
      <RHFTextField<Schema> name="name" label="Name" />
      <RHFTextField<Schema> name="name" label="Email" />
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
};

export default AddApplicationForm;
