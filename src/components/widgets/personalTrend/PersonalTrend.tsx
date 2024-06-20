import { applicationsTrend } from '../../../utils/mockDataGenerator';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface StatusCounts {
  Applied: number;
  Engaged: number;
  Interviewing: number;
  Rejected: number;
  Offer: number;
}

interface Item {
  monthYear: string;
  statusCounts: StatusCounts;
}

const PersonalTrend = () => {
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
  const transformedData = transformData(applicationsTrend);

  // Get the keys from the first item in the transformedData array
  const lineKeys = Object.keys(transformedData[0]).filter(
    (key) => key !== 'name'
  );

  return (
    // Use the keys to generate the lines in the LineChart
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={transformedData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {lineKeys.map((key, index) => (
          <Line
            key={key}
            type="monotone"
            dataKey={key}
            stroke={statusColorMapping[key]}
            activeDot={{ r: 8 }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PersonalTrend;
