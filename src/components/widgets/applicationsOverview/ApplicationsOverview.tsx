import { Grid, Typography } from '@mui/material';
import React, { PureComponent } from 'react';
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { applicationSummary } from '../../../utils/mockDataGenerator';

const data = [
  { name: 'Applied', value: applicationSummary.Applied },
  { name: 'Engaged', value: applicationSummary.Engaged },
  { name: 'Interviewing', value: applicationSummary.Interviewing },
  { name: 'Rejected Applicaitons', value: applicationSummary.Rejected },
  { name: 'Offers', value: applicationSummary.Offer },
];
const COLORS = ['lightgray', '#407bff', '#ffc440', '#ff40da', '#40ff64'];

const ApplicationsOverview = () => {
  console.log(applicationSummary);
  return (
    <Grid container direction="row">
      <Grid item xs={8} style={{ height: '150px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="35%"
              cy="45%"
              innerRadius={50}
              outerRadius={60}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
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
      <Grid item xs={4}>
        <Typography variant="h5">Total: {applicationSummary.total}</Typography>
      </Grid>
    </Grid>
  );
};

export default ApplicationsOverview;
