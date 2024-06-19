import { Grid, Typography } from '@mui/material';
import moment from 'moment';

const MotivationBar = () => {
  const today = moment();
  const dayOfWeek = today.format('dddd');
  const restOfDate = today.format('MMMM D, YYYY');

  return (
    <Grid container>
      <Grid item xs={12} sm={4}>
        <Typography variant="h4">{dayOfWeek}</Typography>
        <Typography variant="h6">{restOfDate}</Typography>
      </Grid>
      <Grid item xs={12} sm={8}>
        {/* Content for the right column */}
        <div>Right Column</div>
      </Grid>
    </Grid>
  );
};

export default MotivationBar;
