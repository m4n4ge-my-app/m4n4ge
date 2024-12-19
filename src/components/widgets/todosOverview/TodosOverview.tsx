import { Grid, Typography } from '@mui/material';

const TodosOverview = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography
          variant="h6"
          color="lightgray"
          style={{ fontWeight: 'bold', marginLeft: '10px' }}
          align="left"
        >
          Checklist:
        </Typography>
      </Grid>
    </Grid>
  );
};

export default TodosOverview;
