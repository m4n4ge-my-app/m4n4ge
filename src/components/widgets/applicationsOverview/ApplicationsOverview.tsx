import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { getApplicationSummary } from '../../../utils/mockDataGenerator';
import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../../state/store';

const ApplicationsOverview = () => {
  const applications = useSelector((state: RootState) => state.applications.applications);
  const applicationSummary = getApplicationSummary(applications);

  const data = [
    { name: 'Applied', value: applicationSummary.Applied },
    { name: 'Engaged', value: applicationSummary.Engaged },
    { name: 'Interviewing', value: applicationSummary.Interviewing },
    { name: 'Rejections', value: applicationSummary.Rejected },
    { name: 'Offers', value: applicationSummary.Offer },
  ];

  const COLORS = ['lightgray', '#407bff', '#ffc440', '#ff40da', '#40ff64'];

  return (
    <Grid container direction="row">
      <Grid item xs={8} style={{ height: '150px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="35%"
              cy="45%"
              innerRadius={35}
              outerRadius={50}
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
      <Grid item xs={4}>
        <Typography
          variant="h6"
          color="lightgray"
          style={{ fontWeight: 'bold' }}
        >
          Total: {applicationSummary.total}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ApplicationsOverview;
