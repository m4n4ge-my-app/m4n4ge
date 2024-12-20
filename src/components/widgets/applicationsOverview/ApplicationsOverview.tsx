//external imports
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

//local imports
import { getApplicationSummary } from '../../../utils/applications.util';
import { RootState } from '../../../state/store';

const ApplicationsOverview = () => {
  const applications = useSelector(
    (state: RootState) => state.applications.applications
  );
  const applicationSummary = getApplicationSummary(applications);
  const data = [
    { name: 'Applied', value: applicationSummary.Applied },
    { name: 'Engaged', value: applicationSummary.Engaged },
    { name: 'Interviewing', value: applicationSummary.Interviewing },
    { name: 'Rejections', value: applicationSummary.Rejected },
    { name: 'Offers', value: applicationSummary.Offer },
  ];
  const COLORS = ['lightgray', '#407bff', '#ffc440', '#ff40da', '#40ff64'];
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = applicationSummary.total;
    if (end === 0) {
      setCount(0);
      return;
    }

    let totalDuration = 2000;
    let incrementTime = Math.abs(Math.floor(totalDuration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [applicationSummary.total]);

  return (
    <Grid container direction="row">
      <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography
          variant="h6"
          color="lightgray"
          style={{ fontWeight: 'bold', marginLeft: '10px' }}
          align="left"
        >
          Applications:
        </Typography>
        <Typography
          variant="h3"
          color="lightgray"
          style={{
            fontWeight: 'bold',
            marginLeft: '30px',
            marginTop: 'auto',
            marginBottom: '30px',
          }}
          align="left"
        >
          {count}
        </Typography>
      </Grid>
      <Grid item xs={6} style={{ height: '150px' }}>
        <ResponsiveContainer
          width="100%"
          height="100%"
          style={{ marginTop: '10px' }}
        >
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="45%"
              innerRadius={20}
              outerRadius={48}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((_entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </Grid>
    </Grid>
  );
};

export default ApplicationsOverview;
