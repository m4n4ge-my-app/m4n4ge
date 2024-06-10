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
    <Grid container padding="20px" spacing={3}>
      <Row
        itemOne={
          <RHFTextField<AddAppSchema>
            name="employer"
            label="Employer Name"
            size="small"
            fullWidth
          />
        }
        itemTwo={null}
        itemThree={null}
      />

      <Row
        itemOne={
          <RHFTextField<AddAppSchema>
            name="position"
            label="Position Name"
            size="small"
            fullWidth
          />
        }
        itemTwo={
          <RHFTextField<AddAppSchema>
            name="location"
            label="Job Location"
            size="small"
            fullWidth
          />
        }
        itemThree={
          <RHFSelect<AddAppSchema>
            name="platform"
            label="Job Platform"
            options={[
              { id: '1', label: 'CareerBuilder' },
              { id: '2', label: 'Company Website' },
              { id: '3', label: 'Direct Email' },
              { id: '4', label: 'Dice' },
              { id: '5', label: 'FlexJobs' },
              { id: '6', label: 'Glassdoor' },
              { id: '7', label: 'Indeed' },
              { id: '8', label: 'LinkedIn' },
              { id: '9', label: 'Monster' },
              { id: '10', label: 'SimplyHired' },
              { id: '11', label: 'Wellfound' },
              { id: '12', label: 'Workopolis' },
              { id: '13', label: 'ZipRecruiter' },
              { id: '14', label: 'Other' },
            ]}
          />
        }
      />

      <Row
        itemOne={<RHFDateCalendar<AddAppSchema> name="applicationDate" />}
        itemTwo={<RHFTextArea<AddAppSchema> name="note" />}
        itemThree={
          <Box
            sx={{
              mt: 0,
              border: 1,
              borderColor: 'divider',
              height: 150,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 1,
              marginBottom: '20px',
            }}
            gap={1}
          >
            <Button variant="outlined" component="label">
              Upload Job Decription
              <input type="file" hidden />
            </Button>
            <Typography variant="body2">
              Click the button to upload a file
            </Typography>
          </Box>
        }
      />

      <Row
        itemOne={
          <>
            <Typography
              fontSize={16}
              sx={{ display: 'flex', flexDirection: 'start' }}
            >
              Job Post Posting & Ending Dates
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, marginTop: '15px' }}>
              <RHFDatePicker<AddAppSchema>
                name="jobPostPostingDate"
                label="Posting Date"
              />
              <RHFDatePicker<AddAppSchema>
                name="jobPostExpirationDate"
                label="Ending Date"
              />
            </Box>
          </>
        }
        itemTwo={
          <>
            <Typography
              fontSize={16}
              sx={{
                display: 'flex',
                flexDirection: 'start',
                marginBottom: '10px',
              }}
            >
              Work Model
            </Typography>
            <RHFToggleButtonGroup<AddAppSchema>
              name="workModel"
              options={[
                { id: '1', label: 'On Site' },
                { id: '2', label: 'Hybrid' },
                { id: '3', label: 'Remote' },
              ]}
            />
          </>
        }
        itemThree={<RHFFavoriteCheckbox<AddAppSchema> name="isFavorite" />}
      />
    </Grid>
  );
};

export default AddApplicationForm;

interface RowProps {
  itemOne: React.ReactNode | null;
  itemTwo: React.ReactNode | null;
  itemThree: React.ReactNode | null;
}

interface ItemProps {
  children: React.ReactNode | null;
}

const Row: React.FC<RowProps> = (props) => {
  return (
    <Grid container item xs={12} spacing={3}>
      <RowItem>{props.itemOne}</RowItem>
      <RowItem>{props.itemTwo}</RowItem>
      <RowItem>{props.itemThree}</RowItem>
    </Grid>
  );
};

const RowItem: React.FC<ItemProps> = (props) => {
  return (
    <Grid item xs={12} sm={12} md={10} lg={4}>
      {props.children}
    </Grid>
  );
};
