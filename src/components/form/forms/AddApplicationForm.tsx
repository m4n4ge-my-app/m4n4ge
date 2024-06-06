import { useEffect } from 'react';
import {
  useGenders,
  useLanguages,
  useSkills,
  useStates,
} from '../../../users/services/queries';
import { useFormContext } from 'react-hook-form';
import { Schema } from '../../../users/types/schema';
import { Grid, Stack, Typography } from '@mui/material';
import { RHFTextField } from '../formControllers/RHFTextField';
import { RHFAutocomplete } from '../formControllers/RHFAutocomplete';
import { RHFToggleButtonGroup } from '../formControllers/RHFToggleButtonGroup';
import { RHFRadioGroup } from '../formControllers/RHFRadioGroup';
import { RHFCheckbox } from '../formControllers/RHFCheckbox';
import { RHFDateTimePicker } from '../formControllers/RHFDateTimePicker';
import { RHFDateRangePicker } from '../formControllers/RHFDateRangerPicker';
import { RHFSwitch } from '../formControllers/RHFSwitch';
import { RHFSlider } from '../formControllers/RHFSlider';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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
    <Grid container spacing={2} padding="20px">
      <Grid item xs={12} sm={12} md={9} lg={7} xl={6}>
        <RHFTextField<Schema>
          name="name"
          label="Company Name"
          size="small"
          fullWidth
        />
      </Grid>
      <Grid item xs={0} sm={12} md={4} lg={5} xl={6}>
        <div style={{ display: 'none' }} />
      </Grid>
    </Grid>
  );
};

export default AddApplicationForm;
