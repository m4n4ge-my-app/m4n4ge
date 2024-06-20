import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined';
import { Badge, Divider, Grid, Typography } from '@mui/material';
import { earliestDate } from '../../utils/mockDataGenerator';
import { quotes } from './quotes/sampleQuotes';
import AnalogClock from 'analog-clock-react'; //there is tpescript types for this package from the package maintainer, so this error cant be fixed
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import './mativationbar.scss';
import moment from 'moment';

const MotivationBar = () => {
  const today = moment().format('ddd, MMM D, YY');
  const [day, ...rest] = today.split(' ');
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [displayString, setDisplayString] = useState(
    ` on ${moment(earliestDate.earliestDate).format('ddd, MMM D, YY')}`
  );

  const options = {
    useCustomTime: false,
    width: '150px',
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
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateDisplayString = () => {
      setDisplayString((prevString) =>
        prevString.includes('on')
          ? ` ${earliestDate.elapsedDays} days ago`
          : ` on ${moment(earliestDate.earliestDate).format('ddd, MMM D, YY')}`
      );
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
  }, []);

  const quote = quotes[quoteIndex];

  return (
    <Grid
      container
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        height: '250px',
      }}
    >
      <Grid item xs={3} container>
        <Grid
          item
          xs={1}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
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
        >
          <AnalogClock {...options} />
        </Grid>
      </Grid>
      <Grid
        item
        xs={7}
        container
        direction="column"
        justifyContent="space-between"
        spacing={2}
        sx={{ height: '100%' }}
      >
        <Grid item>
          <Typography
            variant="body1"
            align="left"
            mb={2}
            sx={{ fontStyle: 'italic', color: 'GrayText' }}
          >
            {quote.quote}
          </Typography>
          <Typography variant="body1" align="right" mr={1}>
            {quote.author}
          </Typography>
        </Grid>
        <Box display="flex" justifyContent="center">
          <Divider sx={{ width: '90%' }} />
        </Box>
        <Grid item>
          <Typography
            variant="h6"
            sx={{
              whiteSpace: 'nowrap',
              fontWeight: 'bold',
              color: 'lightgray',
            }}
          >
            Your journey started
            <span className="animatedDate">{displayString}</span>, persist!
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        xs={2}
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        sx={{ height: '100%' }}
        padding={2}
      >
        <Box display="flex" alignItems="center" height="100%">
          <Divider orientation="vertical" sx={{ height: '100%' }} flexItem />
        </Box>
        <Grid item>
          <Typography variant="body1" align="center">
            Tasks
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ flex: 1 }}
          gap={2}
        >
          <Grid item>
            <Link to="/calendar">
              <Badge
                badgeContent={2}
                color="error"
                sx={{
                  '.MuiBadge-badge': {
                    bgcolor: '#ff40da',
                    transform: 'scale(0.65)',
                  },
                  cursor: 'pointer',
                  '&:focus': {
                    outline: 'none',
                  },
                }}
              >
                <CalendarMonthOutlinedIcon color="action" />
              </Badge>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/todos">
              <Badge
                badgeContent={3}
                color="error"
                sx={{
                  '.MuiBadge-badge': {
                    bgcolor: '#ff40da',
                    transform: 'scale(0.65)',
                  },
                  cursor: 'pointer',
                  '&:focus': {
                    outline: 'none',
                  },
                }}
              >
                <PlaylistAddCheckOutlinedIcon color="action" />
              </Badge>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MotivationBar;
