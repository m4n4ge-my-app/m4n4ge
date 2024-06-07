import { Typography } from '@mui/material';
import { Item } from './utils/MuiItem';
import Grid from '@mui/material/Grid';


const DashboardGrid = () => {
  return (
    //Main Grid Container
    <Grid
      container
      spacing={0}
      sx={{ padding: '25px', marginTop: '100px' }}
      className="row1"
    >
      {/* Sub Grid Container/Row #1 - Label */}
      <Grid item xs={12} sm={12} md={12} className="row1">
        {/* Label */}
        <Typography variant="h6" className="label" gutterBottom>
          Hello Dinyar
        </Typography>
      </Grid>

      {/* Sub Grid Container/Row #2 - Motivation Box & Job Outlook Box */}
      <Grid container item spacing={2.5} className="row2">
        {/* Motivation Box */}
        <Grid item xs={12} sm={12} md={8}>
          <Item className="mativationBox" sx={{ border: 'none' }}>
            Motivation Bar
          </Item>
        </Grid>
        {/* Job Outlook Box  */}
        <Grid item xs={12} sm={12} md={4}>
          <Item className="jobOutlookBox">Job Market Outlook</Item>
        </Grid>
      </Grid>

      {/* Sub Grid Container/Row #3 - Label */}
      <Grid item xs={12} sm={12} md={12} className="row3">
        {/* Label */}
        <Typography variant="h6" className="label" gutterBottom>
          Stats
        </Typography>
      </Grid>

      {/* Sub Grid Container/Row #4 - Status Widgets */}
      <Grid container item spacing={2.5} className="row4">
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Item className="stats">Stats 1</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Item className="stats">Stats 2</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Item className="stats">Stats 3</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Item className="stats">Stats 4</Item>
        </Grid>
      </Grid>

      {/* Sub Grid Container/Row #5 - Label */}
      <Grid item xs={12} sm={12} md={12} className="row5">
        {/* Label */}
        <Typography variant="h6" className="label" sx={{ marginTop: '15px' }}>
          Applications
        </Typography>
      </Grid>

      {/* Sub Grid Container/Row #6 - Applications List*/}
      <Grid container item spacing={2.5} className="row6">
        {/* Applications List */}
        <Grid item xs={12} sm={12} md={12}>
          <Item className="lists">
            This is MUI Data Table area to display applications data
          </Item>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardGrid;
