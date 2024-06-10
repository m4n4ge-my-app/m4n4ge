//external imports
import { Box, Button, Grid, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import React, { useEffect } from 'react';
//local imports
import { RHFToggleButtonGroup } from '../formControllers/RHFToggleButtonGroup';
import { RHFFavoriteCheckbox } from '../formControllers/RHFFavoriteCheckbox';
import { RHFDateCalendar } from '../formControllers/RHFDateCalendar';
import { RHFDatePicker } from '../formControllers/RHFDatePicker';
import { RHFTextField } from '../formControllers/RHFTextField';
import { RHFTextArea } from '../formControllers/RHFTextArea';
import { RHFSelect } from '../formControllers/RHFSelect';
import { AddAppSchema } from '../schemas/addAppSchema';

const AddApplicationForm = () => {
  const { watch } = useFormContext<AddAppSchema>();

  useEffect(() => {
    const subscription = watch((value) => {
      console.log(value);
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <Grid container padding="20px">
      <Grid container item xs={12} sx={{ marginTop: '20px' }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={10}
          lg={4}
          sx={{ backgroundColor: 'orange' }}
        >
          <RHFTextField<AddAppSchema>
            name="employer"
            label="Employer Name"
            size="small"
            fullWidth
          />
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <Grid
          item
          xs={12}
          sm={12}
          md={10}
          lg={4}
          sx={{ backgroundColor: 'blue' }}
        >
          postion name
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={10}
          lg={4}
          sx={{ backgroundColor: 'yellow' }}
        >
          location
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={10}
          lg={4}
          sx={{ backgroundColor: 'purple' }}
        >
          platform
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddApplicationForm;

interface Props {
  children: React.ReactNode;
}

const PanelItemWrapper: React.FC<Props> = (props) => {
  return (
    <>
      <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
        <div style={{ display: 'none' }} />
      </Grid>
      <Grid item xs={9} sm={8} md={6} lg={6} xl={6}>
        {props.children}
      </Grid>
      <Grid item xs={3} sm={3} md={5} lg={5} xl={5}>
        <div style={{ display: 'none' }} />
      </Grid>
    </>
  );
};
