//external imports
import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

//internal imports
import { getApplicationTrend } from '../../../utils/applications.util';
import { RootState } from '../../../state/store';

interface StatusCounts {
  Applied: number;
  Engaged: number;
  Interviewing: number;
  Rejected: number;
  Offer: number;
}

interface Item {
  monthYear: string;
  statusCounts: StatusCounts | Record<string, number>;
}

const PersonalTrend = () => {
  const applications = useSelector(
    (state: RootState) => state.applications.applications
  );
  const statusColorMapping = {
    applied: 'lightgray',
    engaged: '#407bff',
    interviewing: '#ffc440',
    rejected: '#ff40da',
    offer: '#40ff64',
  };

  const transformData = (data: Item[]) => {
    return data.map((item: Item) => ({
      name: item.monthYear,
      applied: item.statusCounts.Applied,
      engaged: item.statusCounts.Engaged,
      interviewing: item.statusCounts.Interviewing,
      rejected: item.statusCounts.Rejected,
      offer: item.statusCounts.Offer,
    }));
  };

  // Transform the data
  const applicationsTrend = getApplicationTrend(applications);
  const transformedData = transformData(applicationsTrend);

  // Get the keys from the first item in the transformedData array only when  transformedData is not empty
  const lineKeys =
    transformedData.length > 0
      ? Object.keys(transformedData[0]).filter((key) => key !== 'name')
      : [];

  return (
    <Grid container direction="column">
      <Grid item>
        <Typography
            variant="h6"
            color="lightgray"
            style={{ fontWeight: 'bold', marginLeft: '10px' }}
            align="left"
          >
          Activity Trend:
        </Typography>
      </Grid>
      <Grid item sx={{ height: '115px', marginLeft: '10px'}}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={transformedData}
            margin={{
              top: 5,
              right: 10,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" padding={{ left: 0 }} />
            <YAxis width={20} />
            <Tooltip />
            {lineKeys.map((key) => (
              <Line
                key={key}
                type="monotone"
                dataKey={key}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                stroke={statusColorMapping[key]}
                activeDot={{ r: 8 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </Grid>
    </Grid>
  );
};

export default PersonalTrend;
