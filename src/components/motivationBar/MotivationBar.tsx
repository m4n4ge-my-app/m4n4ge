//external imports
import { Divider, Grid, Typography } from '@mui/material';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import AnalogClock from 'analog-clock-react'; //there is tpescript types for this package from the package maintainer, so this error cant be fixed
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import moment from 'moment';

//local imports
import { getEarliestApplicationDate } from '../../utils/applications.util';
import { quotes } from './quotes/sampleQuotes';
import { RootState } from '../../state/store';
import './mativationbar.scss';

const MotivationBar = () => {
  const today = moment().format('ddd, MMM D, YY');
  const [day, ...rest] = today.split(' ');
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

  const options = {
    useCustomTime: false,
    width: '175px',
    border: false,
    borderColor: '#ffffff',
    baseColor: '#ffffff',
    centerColor: '#ffffff',
    centerBorderColor: '#40ff64',
    handColors: {
      second: '#407bff',
      minute: '#ff40da',
      hour: '#ffc440',
    },
  };

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

    // Call the function once immediately because there is discrepency between how long the animation is taking to complete and the interval time
    updateDisplayString();

    const intervalId = setInterval(updateDisplayString, 5000);

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
    <Grid item md={12} lg={3} container>
      <Grid
        item
        xs={1}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        zIndex={1000}
      >
        <Typography
          variant="h5"
          sx={{
            transform: 'rotate(-90deg)',
            transformOrigin: 'center',
            whiteSpace: 'nowrap',
            fontWeight: 'bold',
            color: 'lightgray',
          }}
        >
          <Link to="/calendar">
            <span style={{ color: '#ffc440', textDecoration: 'underline' }}>
              {day}
            </span>
          </Link>{' '}
          {rest.join(' ')}
        </Typography>
      </Grid>
      <Grid
        item
        xs={10}
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ width: '100%' }}
      >
        <AnalogClock {...options} />
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
          variant="body1"
          align="left"
          mb={2}
          sx={{ fontStyle: 'italic', color: 'GrayText', marginTop: '10px' }}
        >
          {quote.quote}
        </Typography>
        <Typography variant="body1" align="right" mr={1}>
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
