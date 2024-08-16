//external imports
import { Box, Button, Grid, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import React from 'react';
//local imports
import { RHFToggleButtonGroup } from '../formControllers/RHFToggleButtonGroup';
import FilterDramaOutlinedIcon from '@mui/icons-material/FilterDramaOutlined';
import { RHFFavoriteCheckbox } from '../formControllers/RHFFavoriteCheckbox';
import { RHFDateCalendar } from '../formControllers/RHFDateCalendar';
import { RHFDatePicker } from '../formControllers/RHFDatePicker';
import { RHFTextField } from '../formControllers/RHFTextField';
import { RHFTextArea } from '../formControllers/RHFTextArea';
import { RHFSelect } from '../formControllers/RHFSelect';
import { AddAppSchema } from '../schemas/addAppSchema';
import { addApplication } from '../../../services/applications';
import { show } from '../../../state/feeback/feedbackSlice';
import { useAuthToken } from '../../../hooks/useAuthToken';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

interface Response {
  config: {},
  data: {},
  headers: {},
  request: {},
  response: {
    status: number,
    data: {
      error: string
    }
  },
  status: number,
  statusText: string
}

const AddApplicationForm = () => {
  const { handleSubmit } = useFormContext<AddAppSchema>();
  const token = useAuthToken();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onsubmit =  async (data: AddAppSchema) => {
    try {
      const res: Response = await addApplication(token!, data) as Response;
      const statusCode = res.response? res.response.status : res.status;

      if(statusCode === 201) {
        navigate('/dashboard');
        dispatch(
          show({
            message: 'Application added successfully',
            severity: 'success',
          })
        );
      }
      if(statusCode === 403) {
        dispatch(
          show({
            message: res.response.data.error,
            severity: 'error',
          })
        );
      }
  } catch (error) {
    dispatch(
      show({
        message: 'Something went wrong, please try again later',
        severity: 'error',
      })
    );
  }
  };

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <Grid
        container
        padding="40px 20px 20px 20px"
        spacing={3}
      >
        <Row
          itemOne={
            <RHFTextField<AddAppSchema>
              name="employerName"
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
              name="positionName"
              label="Position Name"
              size="small"
              fullWidth
            />
          }
          itemTwo={
            <RHFTextField<AddAppSchema>
              name="jobLocation"
              label="Job Location"
              size="small"
              fullWidth
            />
          }
          itemThree={
            <RHFSelect<AddAppSchema>
              name="jobPlatform"
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
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 1,
                marginBottom: '20px',
              }}
              gap={1}
            >
              <Button
                variant="outlined"
                component="label"
                sx={{ margin: '20px' }}
              >
                Upload Job Decription
                <FilterDramaOutlinedIcon sx={{ marginLeft: '10px' }} />
                <input type="file" hidden />
              </Button>
              <Typography variant="body2" padding={3}>
                Although you can add it later, we strongly recommend promptly
                uploading the job description to ensure its preservation before
                the online post is potentially removed.
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
                  name="jobPostEndingDate"
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

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            width: '100%',
            marginTop: '20px',
          }}
        >
          <Button variant="contained" type="submit" size="small">
            Add Application
          </Button>
        </Box>
      </Grid>
    </form>
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
    <Grid container item xs={12} spacing={3} sx={{ alignItems: 'stratch' }}>
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
