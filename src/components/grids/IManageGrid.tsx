import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

interface Props {
  formLabel: string;
  listLabl: string;
}

const IManageGrid = ({ formLabel, listLabl }: Props) => {
  return (
    <Grid container spacing={0} sx={{ padding: '25px' }}>
      <Grid container item spacing={2.5} className="">
        <Grid item xs={12} sm={12} md={12}>
          <Typography variant="h6" className="label" gutterBottom>
            {formLabel}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Item className="addBox" sx={{ border: 'none' }}>
            This is a form container
          </Item>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <Typography variant="h6" className="label" gutterBottom>
            {listLabl}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Item className="listBox" sx={{ border: 'none' }}>
            This is a list container
          </Item>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default IManageGrid;
