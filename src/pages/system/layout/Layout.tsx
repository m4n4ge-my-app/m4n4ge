import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { Outlet } from 'react-router-dom';
import SideBar from '../../../components/navigation/sideBar/SideBar';
import { useSelector } from 'react-redux';
import { RootState } from '../../../state/store';
import Navbar from '../../../components/navigation/navbar/Navbar';

const Layout = () => {
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
