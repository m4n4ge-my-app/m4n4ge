import { Grid, Typography } from '@mui/material';
import { Item } from './utils/MuiItem';

interface Props {
  formLabel: string;
}

const GetAssistGrid = ({ formLabel }: Props) => {
  return (
    // MAIN CONTAINER GRID
    <Grid container spacing={0} sx={{ padding: '25px', marginTop: '100px' }}>
      <Grid container item spacing={2.5} className="">
        <Grid item xs={12} sm={12} md={12}>
          <Typography variant="h6" className="label" gutterBottom>
            {formLabel}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Item className="temporary" sx={{ border: 'none' }}>
            This container is temporary, implementation is out of scope for now
          </Item>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GetAssistGrid;
