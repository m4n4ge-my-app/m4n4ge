//external imports
import { Box, Button, Grid, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import React, { useEffect, useRef } from 'react';

//local imports
import {
  addApplication,
  deleteApplication,
  editApplication,
  getApplicationDetails,
  getKeyByWorkModel,
} from '../../../services/applications';
import {
  Application,
  statuses as applicationStatuses,
} from '../../../utils/mockDataGenerator';
import { setFocusedApplication } from '../../../state/application/applicationSlice';
import ConfirmationModal, {
  ConfirmationModalRef,
} from '../../modals/confirmationModal/ConfirmationModal';
import { RHFToggleButtonGroup } from '../formControllers/RHFToggleButtonGroup';
import FilterDramaOutlinedIcon from '@mui/icons-material/FilterDramaOutlined';
import { RHFFavoriteCheckbox } from '../formControllers/RHFFavoriteCheckbox';
import { AddAppSchema, defaultValues } from '../schemas/addAppSchema';
import { RHFDateCalendar } from '../formControllers/RHFDateCalendar';
import { RHFDatePicker } from '../formControllers/RHFDatePicker';
import { RHFTextField } from '../formControllers/RHFTextField';
import { RHFTextArea } from '../formControllers/RHFTextArea';
import { show } from '../../../state/feeback/feedbackSlice';
import { useAuthToken } from '../../../hooks/useAuthToken';
import { useNavigate, useParams } from 'react-router-dom';
import { RHFSelect } from '../formControllers/RHFSelect';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../state/store';

interface Response {
  config: {};
  data: {};
  headers: {};
  request: {};
  response: {
    status: number;
    data: {
      error: string;
    };
  };
  status: number;
  statusText: string;
}

const AddEditApplicationForm = () => {
  const focusedApplication = useSelector(
    (state: RootState) => state.applications.focusedApplication
  );
  const { handleSubmit, reset } = useFormContext<AddAppSchema>();
  const { id } = useParams<{ id: string }>();
  const token = useAuthToken();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const modalRef = useRef<ConfirmationModalRef>(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.setOpen(true);
    }
  };

  useEffect(() => {
    const updateFormState = (application: Application) => {
      reset({
        employerName: application.employerName,
        applicationStatus: application.applicationStatus,
        positionName: application.positionName,
        jobLocation: application.jobLocation,
        jobPlatform: application.jobPlatform,
        applicationDate: new Date(application.applicationDate),
        jobPostPostingDate: new Date(application.jobPostPostingDate),
        jobPostEndingDate: new Date(application.jobPostEndingDate),
        workModel: [getKeyByWorkModel(application.workModel)],
        note: application.note,
        isFavorite: application.isFavorite,
      });
    };

    if (focusedApplication) {
      updateFormState(focusedApplication);
    } else if (id) {
      getApplicationDetails(token!, id!).then((data) => {
        updateFormState(data);
      });
    } else {
      reset(defaultValues);
    }
  }, [focusedApplication, id, reset, token]);

  const onsubmit = async (data: AddAppSchema) => {
    console.log('data', data);
    try {
      let res: Response;

      if (focusedApplication) {
        // Call editApplication if focusedApplication is defined
        res = (await editApplication(token!, data, id!)) as Response;
      } else {
        // Call addApplication if focusedApplication is not defined
        res = (await addApplication(token!, data)) as Response;
      }

      const statusCode = res.response ? res.response.status : res.status;

      if (statusCode === 201) {
        navigate('/dashboard');
        dispatch(
          show({
            message: 'Application added successfully',
            severity: 'success',
          })
        );
      }
      if (statusCode === 200) {
        navigate('/dashboard');
        dispatch(
          show({
            message: 'Application updated successfully',
            severity: 'success',
          })
        );
      }
      if (statusCode === 403) {
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
      <Grid container padding="40px 20px 20px 20px" spacing={3}>
        <Row
          itemOne={
            <RHFTextField<AddAppSchema>
              name="employerName"
              label="Employer Name"
              size="small"
              fullWidth
            />
          }
          itemTwo={
            focusedApplication ? (
              <RHFSelect<AddAppSchema>
                name="applicationStatus"
                label="Job Status"
                options={applicationStatuses.map((status, i) => ({
                  id: (i + 1).toString(),
                  label: status,
                }))}
              />
            ) : null
          }
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
            {focusedApplication ? 'Save Changes' : 'Add Application'}
          </Button>
          {focusedApplication && (
            <>
              <Button
                variant="contained"
                size="small"
                sx={{ marginLeft: '10px' }}
                onClick={openModal}
                color="secondary"
              >
                Delete
              </Button>
              <Button
                variant="outlined"
                size="small"
                sx={{ marginLeft: '10px' }}
                onClick={() => {
                  dispatch(setFocusedApplication(null));
                  navigate('/dashboard');
                }}
              >
                Cancel
              </Button>
            </>
          )}
        </Box>
        <ConfirmationModal
          ref={modalRef}
          title="Delete Application"
          message={`Are you sure you want to delete the application for ${focusedApplication?.positionName} at ${focusedApplication?.employerName}?`}
          confirmAction={() => deleteApplication(token!, id!)}
          subsquentPath="/dashboard"
        />
      </Grid>
    </form>
  );
};

export default AddEditApplicationForm;

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
