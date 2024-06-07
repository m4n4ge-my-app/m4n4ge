/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { Schema } from '../../../users/types/schema';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  TextareaAutosize,
  Typography,
} from '@mui/material';
import { RHFTextField } from '../formControllers/RHFTextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { pink } from '@mui/material/colors';
import dayjs, { Dayjs } from 'dayjs';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { RHFToggleButtonGroup } from '../formControllers/RHFToggleButtonGroup';
import { AddAppSchema } from '../scehmas/addAppSchema';
import { RHFSelect } from '../formControllers/RHFSelect';
import { RHFTextArea } from '../formControllers/RHFTextArea';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const AddApplicationForm = () => {
  const [age, setAge] = React.useState('');
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));
  const { watch } = useFormContext<AddAppSchema>();

  useEffect(() => {
    const subscription = watch((value) => {
      console.log(value);
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

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
        {/* Platfoem */}
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
            ]}
          />
        </PanelItemWrapper>
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
        <PanelItemWrapper>
          <RHFTextArea<AddAppSchema> name="note" />
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
