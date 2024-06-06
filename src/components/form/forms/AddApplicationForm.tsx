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
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Item>xs=8</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid item xs={8}>
        <Item>xs=8</Item>
      </Grid>
    </Grid>
  );
};

export default AddApplicationForm;
