//external imports
import { Divider, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@mui/system';
import moment from 'moment';

//local imports
import { getEarliestApplicationDate } from '../../utils/applications.util';
import jd from './userProfileImages/Adam-Smith-Photoroom.jpg';
import ms from './userProfileImages/Mary-Smith-Photoroom.jpg'
import { quotes } from './quotes/sampleQuotes';
import { RootState } from '../../state/store';
import './motivationbar.scss';

const MotivationBar = () => {
  const today = moment().format('ddd, MMM D, YY');
  const [quoteIndex, setQuoteIndex] = useState(0);
  const applications = useSelector(
    (state: RootState) => state.applications.applications
  );
  const earliestDate = getEarliestApplicationDate(applications);
  const newUser = earliestDate.elapsedDays === 0 ? true : false;
  const [displayString, setDisplayString] = useState(
    ` on ${moment(earliestDate.earliestDate).format('ddd, MMM D, YY')}`
  );
  const user = useSelector((state: RootState) => state.user);
  const [profileImage, setProfileImage] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateDisplayString = () => {
      setDisplayString((prevString) => {
        const elapsedDays = newUser
          ? ' today'
          : ` ${earliestDate.elapsedDays} days ago`;
        return prevString.includes('on')
          ? elapsedDays
          : ` on ${moment(earliestDate.earliestDate).format('ddd, MMM D, YY')}`;
      });
      const animatedDateElements = document.querySelectorAll('.animatedDate');
      animatedDateElements.forEach((element: Element) => {
        (element as HTMLElement).style.setProperty(
          '--animation-duration',
          '5s'
        );
      });
    };

    // Call the function once immediately because there is discrepancy between how long the animation is taking to complete and the interval time
    updateDisplayString();

    const intervalId = setInterval(updateDisplayString, 5000);

    //TODO: update this to use the user's profile image from db when user model has been updated with profile image
    if(user.user?.email === 'expert_user@m4n4gemy.app') {
      setProfileImage(jd);
    } else if (user.user?.email === 'new_user@m4n4gemy.app') {
      setProfileImage(ms);
    }

    return () => clearInterval(intervalId);
  }, [applications, user]);

  const quote = quotes[quoteIndex];

  return (
    <Grid
      container
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        height: '100%',
      }}
    >
      <Grid item md={12} lg={4} container>
        <Grid
          item
          xs={12}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ width: '100%', height: '100%' }}
        >
          <div
            style={{
              width: '170px',
              height: '170px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
              borderRadius: '50%',
            }}
          >
            <img
              src={profileImage}
              alt="Motivational Image"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50%',
              }}
            />
          </div>
        </Grid>
      </Grid>
      <Grid
        item
        md={12}
        lg={8}
        container
        direction="column"
        justifyContent="space-between"
        spacing={2}
        sx={{ height: '100%' }}
      >
        <Grid item sx={{ width: '100%' }} zIndex={1000}>
          <Typography
            variant="subtitle1"
            align="left"
            mb={2}
            sx={{ fontStyle: 'italic', color: 'GrayText', marginTop: '10px' }}
          >
            {quote.quote}
          </Typography>
          <Typography variant="subtitle1" align="right" mr={1}>
            {quote.author}
          </Typography>
        </Grid>
        <Box display="flex" justifyContent="center">
          <Divider sx={{ width: '90%', marginTop: '30px' }} />
        </Box>
        <Grid item zIndex={1000}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: 'lightgray',
            }}
          >
            Your journey started
            <span className="animatedDate">{displayString}</span>,{' '}
            {newUser ? "let's get going" : 'keep pushing'}!
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MotivationBar;
