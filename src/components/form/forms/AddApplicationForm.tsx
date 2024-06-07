//external imports
import { Box, Button, Grid, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import React, { useEffect } from 'react';
//local imports
import { RHFFavoriteCheckbox } from '../formControllers/RHFFavoriteCheckbox';
import { RHFDateCalendar } from '../formControllers/RHFDateCalendar';
import { RHFTextField } from '../formControllers/RHFTextField';
import { RHFTextArea } from '../formControllers/RHFTextArea';
import { RHFSelect } from '../formControllers/RHFSelect';
import { AddAppSchema } from '../scehmas/addAppSchema';
import { RHFDatePicker } from '../formControllers/RHFDatePicker';
import { RHFToggleButtonGroup } from '../formControllers/RHFToggleButtonGroup';

const AddApplicationForm = () => {
  const { watch } = useFormContext<AddAppSchema>();

  useEffect(() => {
    const subscription = watch((value) => {
      console.log(value);
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <Grid container padding="20px" sx={{ position: 'relative' }}>
      {/* Left Panel */}
      <Grid
        container
        spacing={3}
        item
        xs={12}
        sm={12}
        md={12}
        lg={6}
        xl={6}
        sx={{ marginTop: '20px' }}
      >
        {/* Employer Name */}
        <PanelItemWrapper>
          <RHFTextField<AddAppSchema>
            name="employer"
            label="Employer Name"
            size="small"
            fullWidth
          />
        </PanelItemWrapper>

        {/* Position Name */}
        <PanelItemWrapper>
          <RHFTextField<AddAppSchema>
            name="position"
            label="Position Name"
            size="small"
            fullWidth
          />
        </PanelItemWrapper>

        {/* Job Location */}
        <PanelItemWrapper>
          <RHFTextField<AddAppSchema>
            name="location"
            label="Job Location"
            size="small"
            fullWidth
          />
        </PanelItemWrapper>

        {/* Platform */}
        <PanelItemWrapper>
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
        </PanelItemWrapper>

        {/* Job Application Date */}
        <PanelItemWrapper>
          <RHFDateCalendar<AddAppSchema> name="applicationDate" />
        </PanelItemWrapper>

        {/* Job Post Posting and Ending Datates */}
        <PanelItemWrapper>
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
        </PanelItemWrapper>

        {/* Work Model */}
        <PanelItemWrapper>
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
        </PanelItemWrapper>

        {/* Invisible Div */}
        <PanelItemWrapper>
          <div style={{ visibility: 'hidden', height: '300px' }}>
            {/* For some reason without this invisible div, Work Model section above becomes unclicable. */}
          </div>
        </PanelItemWrapper>
      </Grid>
      {/* Right Panel */}
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={6}
        xl={6}
        sx={{ marginTop: '40px' }}
      >
        {/* Note */}
        <PanelItemWrapper>
          <RHFTextArea<AddAppSchema> name="note" />
        </PanelItemWrapper>

        {/* File Upload */}
        <PanelItemWrapper>
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
        </PanelItemWrapper>
        <PanelItemWrapper>
          <RHFFavoriteCheckbox<AddAppSchema> name="isFavorite" />
        </PanelItemWrapper>

        {/* Sumbit Button */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: 0,
            bottom: 0,
            width: '100%',
            padding: '20px',
          }}
        >
          <Button variant="contained" type="submit" size="small">
            Add Application
          </Button>
        </Box>
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
        {/* eslint-disable-next-line react/prop-types */}
        {props.children}
      </Grid>
      <Grid item xs={3} sm={3} md={5} lg={5} xl={5}>
        <div style={{ display: 'none' }} />
      </Grid>
    </>
  );
};
