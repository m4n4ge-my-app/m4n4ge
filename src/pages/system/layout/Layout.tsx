import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { Outlet } from 'react-router-dom';
import SideBar from '../../../components/navigation/sideBar/SideBar';
import { useSelector } from 'react-redux';
import { RootState } from '../../../state/store';
import Navbar from '../../../components/navigation/navbar/Navbar';
import { useEffect } from 'react';
import { getLoggedInUser } from '../../../services/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../state/user/userSlice';
import { User } from '../../../state/user/userSlice';
import { AxiosResponse } from 'axios';

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getLoggedInUser();
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const user: User | null = (response as AxiosResponse).data;
        if (user) {
          dispatch(setUser(user));
        }
      } catch (error) {
        console.error('Failed to fetch logged in user:', error);
      }
    };

    fetchUser().catch((error) => console.error(error));
  }, [dispatch]);

  const sidebarWidth = useSelector(
    (state: RootState) => state.sidebar.sidebarWidth
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Navbar />
      <SideBar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${sidebarWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
