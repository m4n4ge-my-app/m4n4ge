import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { applicationSummary } from '../../../utils/mockDataGenerator';
import { Grid, Typography } from '@mui/material';

const data = [
  { name: 'Applied', value: applicationSummary.Applied },
  { name: 'Engaged', value: applicationSummary.Engaged },
  { name: 'Interviewing', value: applicationSummary.Interviewing },
  { name: 'Rejections', value: applicationSummary.Rejected },
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
              innerRadius={45}
              outerRadius={60}
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
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            width: '100%',
            marginTop: '5px',
            paddingRight: '10px',
          }}
        >
          {data.map((entry, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '10px',
              }}
            >
              <FiberManualRecordIcon
                style={{
                  color: COLORS[index % COLORS.length],
                  marginRight: '5px',
                  width: '8px',
                  height: '8px',
                }}
              />
              <span style={{ fontSize: '0.5rem' }}>{entry.name}</span>
            </div>
          ))}
        </div>
      </Grid>
    </Grid>
  );
};

export default ApplicationsOverview;
