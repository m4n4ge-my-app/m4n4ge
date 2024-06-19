import { Divider, Grid, Typography } from '@mui/material';
import AnalogClock from 'analog-clock-react';
import { quotes } from './quotes/sampleQuotes';
import moment from 'moment';
import { useEffect, useState } from 'react';

const MotivationBar = () => {
  const today = moment();
  const dayOfWeek = today.format('dddd');
  const restOfDate = today.format('MMMM D, YYYY');
  const [quoteIndex, setQuoteIndex] = useState(0);

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

  const quote = quotes[quoteIndex];

  return (
    <Grid container>
      <Grid item xs={12} sm={4} container>
        <Grid
          item
          xs={2}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              transform: 'rotate(-90deg)',
              transformOrigin: 'center',
              whiteSpace: 'nowrap',
            }}
          >
            {dayOfWeek}
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
          <Typography variant="h6">{restOfDate}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={8} container direction="column" spacing={2}>
        <Grid item>
          <Typography variant="body1">{quote.quote}</Typography>
          <Typography variant="body2" align="right">
            {quote.author}
          </Typography>
        </Grid>
        <Divider />
        <Grid item>
          {/* Content for the bottom half of the right column */}
          <div>Bottom Half</div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MotivationBar;
