import { useState } from 'react';
import BaseLayer from '../../components/baseLayer/BaseLayer';
import DashboardGrid from '../../components/grids/DashboardGrid';
import { RootState } from '../../state/store';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Dashboard = () => {
  const [username, setUsername] = useState('');
  //Get applications state from the server when the user logs in
  // const [applications, setApplications] = useState<Application[]>(apps);
  const userFromStore = useSelector((state: RootState) => state.user);

  useEffect(() => {
    setUsername(userFromStore.user?.firstName ?? '');
  }, [userFromStore]);

  return (
    <BaseLayer type="dashboard">
      <DashboardGrid username={username} />
    </BaseLayer>
  );
};

export default Dashboard;
