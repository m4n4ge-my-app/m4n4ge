import { Grid, Typography } from '@mui/material';

const EventsOverview = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography
          variant="h6"
          color="lightgray"
          style={{ fontWeight: 'bold', marginLeft: '10px' }}
          align="left"
        >
          Happenings:
        </Typography>
      </Grid>
    </Grid>
  );
};

export default EventsOverview;
