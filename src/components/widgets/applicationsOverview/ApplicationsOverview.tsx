import { Grid, Typography } from '@mui/material';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { applicationSummary } from '../../../utils/mockDataGenerator';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

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
