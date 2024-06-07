//external imports
import { Grid, Typography } from '@mui/material';
//local imports
import notFoundImage from '../../components/baseLayer/baseLayerImages/404.png';
import { Item } from './utils/MuiItem';

const NotFoundGrid = () => {
  return (
    <Grid container spacing={0} sx={{ padding: '25px', marginTop: '100px' }}>
      <Grid container item spacing={2.5} className="">
        <Grid item xs={12} sm={12} md={12}>
          <Typography variant="h6" className="label" gutterBottom></Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Item
            className="temporary"
            sx={{
              border: 'none',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 10,
            }}
          >
            {/* TODO: further refind this page */}
            Not Found page: under development
            <img
              src={notFoundImage}
              alt="image"
              style={{ width: 300, height: 300 }}
            />
          </Item>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NotFoundGrid;
