import { Grid } from '@mui/material';

const MotivationBar = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={4}>
        {/* Content for the left column */}
        <div>Left Column</div>
      </Grid>
      <Grid item xs={12} sm={8}>
        {/* Content for the right column */}
        <div>Right Column</div>
      </Grid>
    </Grid>
  );
};

export default MotivationBar;
