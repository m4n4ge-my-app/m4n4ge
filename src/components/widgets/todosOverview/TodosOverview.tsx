import { Grid, Typography } from '@mui/material';
import { RootState } from '../../../state/store';
import CelebrationIcon from '@mui/icons-material/Celebration';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AddIcon from '@mui/icons-material/Add';
import WarningIcon from '@mui/icons-material/Warning';
import { useSelector } from 'react-redux';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

const TodosOverview = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <Grid container direction="column">
      <Grid item>
        <Typography
          variant="h6"
          color="lightgray"
          style={{ fontWeight: 'bold', marginLeft: '10px' }}
          align="left"
        >
          Tasklist:
        </Typography>
      </Grid>
      {user.user?.email === 'expert_user@m4n4gemy.app' && (
        <Grid item>
          <Link
            to="/todos"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Box display="flex" alignItems="center" sx={{ marginTop: '10px' }}>
              <FormatListBulletedIcon
                sx={{ marginLeft: '10px' }}
                fontSize="small"
              />
              <Typography sx={{ marginLeft: '5px' }} fontSize="small">
                3 tasks remaining
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" sx={{ marginTop: '5px' }}>
              <WarningIcon
                sx={{ marginLeft: '10px' }}
                fontSize="small"
                color="warning"
              />
              <Typography sx={{ marginLeft: '5px' }} fontSize="small">
                1 urgent task
              </Typography>
            </Box>
          </Link>
        </Grid>
      )}
      {user.user?.email === 'new_user@m4n4gemy.app' && (
        <Grid item>
          <Link
            to="/todos"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Box display="flex" alignItems="center" sx={{ marginTop: '10px' }}>
              <CelebrationIcon
                sx={{ marginLeft: '10px' }}
                fontSize="small"
                color="success"
              />
              <Typography sx={{ marginLeft: '5px' }} fontSize="small">
                Your task list is clear!
              </Typography>
            </Box>

            <Box display="flex" alignItems="center" sx={{ marginTop: '5px' }}>
              <AddIcon sx={{ marginLeft: '10px' }} fontSize="small" />
              <Typography sx={{ marginLeft: '5px' }} fontSize="small">
                add a todo
              </Typography>
            </Box>
          </Link>
        </Grid>
      )}
    </Grid>
  );
};

export default TodosOverview;
