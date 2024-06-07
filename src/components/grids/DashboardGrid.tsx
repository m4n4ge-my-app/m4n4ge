import Grid from '@mui/material/Grid';

const DashboardGrid = () => {
  return (
    //Main Grid Container
    <Grid container>
      {/* Sub Grid Container/Row #1 */}
      <Grid container item>
        <Grid item></Grid>
      </Grid>

      {/* Sub Grid Container/Row #2 */}
      <Grid container item>
        <Grid item></Grid>
      </Grid>

      {/* Sub Grid Container/Row #3 */}
      <Grid container item>
        <Grid item></Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardGrid;
