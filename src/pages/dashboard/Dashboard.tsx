import { useState } from 'react';
import BaseLayer from '../../components/baseLayer/BaseLayer';
import DashboardGrid from '../../components/grids/DashboardGrid';

//will be replace with proper model from server later
interface Application {
  id: number;
  employerName: string;
  positionName: string;
}

const apps = [
  {
    id: 1,
    employerName: 'Google',
    positionName: 'Software Engineer',
  },
  {
    id: 2,
    employerName: 'Facebook',
    positionName: 'Product Manager',
  },
  {
    id: 3,
    employerName: 'Amazon',
    positionName: 'Data Scientist',
  },
  {
    id: 4,
    employerName: 'Netflix',
    positionName: 'UI/UX Designer',
  },
];

const Dashboard = () => {
  //Get these states from the server when the user logs in
  const [username, setUsername] = useState('Dinyar');
  const [applications, setApplications] = useState<Application[]>(apps);

  return (
    <BaseLayer type="dashboard">
      <DashboardGrid username={username} applications={applications} />
    </BaseLayer>
  );
};

export default Dashboard;
