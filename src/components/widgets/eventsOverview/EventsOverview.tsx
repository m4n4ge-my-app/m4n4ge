import { Grid, Typography } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EventIcon from '@mui/icons-material/Event';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';
import { RootState } from '../../../state/store';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const EventsOverview = () => {
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
          Happenings:
        </Typography>
      </Grid>
      {user.user?.email === 'expert_user@m4n4gemy.app' && (
        <Grid item>
          <Box display="flex" alignItems="center" sx={{ marginTop: '10px' }}>
            <EventIcon sx={{ marginLeft: '10px' }} fontSize="small" />
            <Typography sx={{ marginLeft: '8px' }} fontSize="small">
              3 events this week
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" sx={{ marginTop: '5px' }}>
            <Typography sx={{ marginLeft: '10px' }} fontSize="small">
              Next:
            </Typography>
            <LocalPhoneIcon sx={{ marginLeft: '5px' }} fontSize="small" />
            <Typography sx={{ marginLeft: '8px' }} fontSize="small">
              Phone interview
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" sx={{ marginTop: '5px' }}>
            <Link
              to="/calendar"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Typography sx={{ marginLeft: '10px' }} fontSize="small">
                Today @ 10:00 AM
              </Typography>
            </Link>
          </Box>
        </Grid>
      )}
      {user.user?.email === 'new_user@m4n4gemy.app' && (
        <Grid item>
          <Box display="flex" alignItems="center" sx={{ marginTop: '10px' }}>
            <EventIcon sx={{ marginLeft: '10px' }} fontSize="small" />
            <Typography sx={{ marginLeft: '8px' }} fontSize="small">
              Your schedule is clear.
            </Typography>
          </Box>
          <Link
            to="/calendar"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Box display="flex" alignItems="center" sx={{ marginTop: '5px' }}>
              <AddIcon sx={{ marginLeft: '10px' }} fontSize="small" />
              <Typography sx={{ marginLeft: '8px' }} fontSize="small">
                add an event
              </Typography>
            </Box>
          </Link>
        </Grid>
      )}
    </Grid>
  );
};

export default EventsOverview;
