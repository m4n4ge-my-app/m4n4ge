import { earliestDate } from '../../utils/mockDataGenerator';
import { Divider, Grid, Typography } from '@mui/material';
import { quotes } from './quotes/sampleQuotes';
import AnalogClock from 'analog-clock-react';
import { useEffect, useState } from 'react';
import './mativationbar.scss';
import moment from 'moment';

const MotivationBar = () => {
  const today = moment().format('ddd, MMM D, YY');
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [displayString, setDisplayString] = useState(
    ` on ${moment(earliestDate.earliestDate).format('ddd, MMM D, YY')}`
  );

  console.log(moment(earliestDate.earliestDate).format('ddd, MMM D, YY'));
  console.log(earliestDate.elapsedDays);

  const options = {
    useCustomTime: false,
    width: '200px',
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
      <Grid item xs={4} container>
        <Grid
          item
          xs={1}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // padding: '1rem',
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
            {today}
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
        xs={8}
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
        <Divider />
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
            <span className="animatedDate">{displayString}</span>, keep going!
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MotivationBar;
