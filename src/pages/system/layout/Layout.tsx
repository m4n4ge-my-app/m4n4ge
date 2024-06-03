import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { Outlet } from 'react-router-dom';
import SideBar from '../../../components/navigation/sideBar/SideBar';
import { useSelector } from 'react-redux';
import { RootState } from '../../../state/store';
import Navbar from '../../../components/navigation/navbar/Navbar';

const Layout = () => {
  const drawerWidth = useSelector(
    (state: RootState) => state.sidebar.sidebarWidth
  );

  return (
    // Layout is MUI Box component, which in-turn cotains MUI AppBar for navbar, Box for sidebar, and finllay Box for outlet content.
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* Top Navigation Bar */}
      <Navbar />

      {/* Side Bar */}
      <SideBar />

      {/* Outlet Contents */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
