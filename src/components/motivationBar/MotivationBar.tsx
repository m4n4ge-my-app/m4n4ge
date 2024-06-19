import { Grid, Typography } from '@mui/material';
import AnalogClock from 'analog-clock-react';
import moment from 'moment';

const MotivationBar = () => {
  const today = moment();
  const dayOfWeek = today.format('dddd');
  const restOfDate = today.format('MMMM D, YYYY');
  const options = {
    useCustomTime: false,
    width: '150px',
    border: false,
    borderColor: '#ffffff',
    baseColor: '#ffffff',
    centerColor: '#ffffff',
    centerBorderColor: '#40ff64',
    handColors: {
      second: '#407bff',
      minute: '#ff40da',
      hour: '#ffc440',
    },
  };

  return (
    <Grid container>
      <Grid item xs={12} sm={4} container>
        <Grid
          item
          xs={2}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              transform: 'rotate(-90deg)',
              transformOrigin: 'center',
              whiteSpace: 'nowrap',
            }}
          >
            {dayOfWeek}
          </Typography>
        </Grid>
        <Grid
          item
          xs={10}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <AnalogClock {...options} />
          <Typography variant="h6">{restOfDate}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={8}>
        {/* Content for the right column */}
        <div>Right Column</div>
      </Grid>
    </Grid>
  );
};

export default MotivationBar;
