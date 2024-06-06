import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { Schema } from '../../../users/types/schema';
import {
  Box,
  Button,
  Checkbox,
  Grid,
  TextareaAutosize,
  Typography,
} from '@mui/material';
import { RHFTextField } from '../formControllers/RHFTextField';
import { RHFAutocomplete } from '../formControllers/RHFAutocomplete';
import { RHFRadioGroup } from '../formControllers/RHFRadioGroup';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { pink } from '@mui/material/colors';
import dayjs, { Dayjs } from 'dayjs';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const AddApplicationForm = () => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));
  const { watch } = useFormContext<Schema>();

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
        {/* Company Name */}
        <PanelItemWrapper>
          <RHFTextField<Schema>
            name="name"
            label="Company Name"
            size="small"
            fullWidth
          />
        </PanelItemWrapper>
        {/* Position Name */}
        <PanelItemWrapper>
          <RHFTextField<Schema>
            name="name"
            label="Position Name"
            size="small"
            fullWidth
          />
        </PanelItemWrapper>
        {/* Job Location */}
        <PanelItemWrapper>
          <RHFTextField<Schema>
            name="name"
            label="Job Location"
            size="small"
            fullWidth
          />
        </PanelItemWrapper>

        {/* Job Application Date */}
        <PanelItemWrapper>
          <Typography
            fontSize={16}
            sx={{ display: 'flex', flexDirection: 'start' }}
          >
            Job Application Date
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </LocalizationProvider>
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
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Posting Date"
                slotProps={{ textField: { size: 'small' } }}
              />
              <DatePicker slotProps={{ textField: { size: 'small' } }} />
            </LocalizationProvider>
          </Box>
        </PanelItemWrapper>
        {/* Platform */}
        <PanelItemWrapper>
          <RHFAutocomplete<Schema>
            name="states"
            label="Platform"
            options={[
              { id: '1', label: 'Indeed' },
              { id: '2', label: 'LinkedIn' },
              { id: '3', label: 'Glassdoor' },
              { id: '4', label: 'Monster' },
              { id: '5', label: 'ZipRecruiter' },
              { id: '6', label: 'Dice' },
              { id: '7', label: 'SimplyHired' },
              { id: '8', label: 'CareerBuilder' },
              { id: '9', label: 'FlexJobs' },
              { id: '10', label: 'Wellfound' },
              { id: '11', label: 'Workopolis' },
            ]}
          />
        </PanelItemWrapper>
        {/* Job Type */}
        <PanelItemWrapper>
          <RHFRadioGroup<Schema>
            name="gender"
            label="Work Models"
            options={[
              { id: '1', label: 'On-Site' },
              { id: '2', label: 'Hybrid' },
              { id: '3', label: 'Fully Remote' },
            ]}
            sx={{ display: 'flex', flexDirection: 'start' }}
          />
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
        <PanelItemWrapper>
          <TextareaAutosize
            color="gray"
            minRows={5}
            placeholder="Note: "
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              marginBottom: '20px',
              borderColor: 'divider', //TODO: Setting the border color to match the file uoload border below, but its not working, fix it
              borderWidth: 1,
              borderStyle: 'solid',
              outline: 'none',
            }}
          />
        </PanelItemWrapper>
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
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '60px',
            }}
          >
            <Checkbox
              {...label}
              icon={<FavoriteBorder fontSize="small" />}
              checkedIcon={<Favorite fontSize="small" />}
              sx={{
                // color: pink[800],
                '&.Mui-checked': {
                  color: pink[600],
                },
              }}
            />
            <Typography fontSize={16}>Mark as Favorite?</Typography>
          </Box>
        </PanelItemWrapper>

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
