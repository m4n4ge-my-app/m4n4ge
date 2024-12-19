import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

const MarketOutlook = () => {
  return (
    <Grid container direction="column">
      <Grid item xs={12}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            variant="h6"
            color="lightgray"
            style={{ fontWeight: 'bold', marginLeft: '10px' }}
          >
            Market Outlook
          </Typography>
          <OpenInFullIcon color="primary" sx={{ fontSize: '20px', marginRight: '5px' }} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default MarketOutlook;
