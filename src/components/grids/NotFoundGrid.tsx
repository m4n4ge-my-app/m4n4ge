import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import notFoundImage from '../../components/baseLayer/baseLayerImages/404.png';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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
