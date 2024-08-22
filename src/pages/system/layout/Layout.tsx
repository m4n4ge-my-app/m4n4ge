import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { Outlet } from 'react-router-dom';
import SideBar from '../../../components/navigation/sideBar/SideBar';
import { useSelector } from 'react-redux';
import { RootState } from '../../../state/store';
import Navbar from '../../../components/navigation/navbar/Navbar';
import React from 'react';
import { Button, Divider, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import InfoIcon from '@mui/icons-material/Info';

const Layout = () => {
  const [user, setUser] = React.useState('new');
  const [isBannerVisible, setIsBannerVisible] = React.useState(true)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser((event.target as HTMLInputElement).value);
  };

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
        <Box
          sx={{
            p: 3,
            backgroundColor: isBannerVisible? '#cce5ff' : 'none',
            display: 'flex',
            alignItems: 'center',
            position: 'fixed',
            top: '0px',
            width: '100%',
            height: '150px',
            zIndex: 1000
          }}
        >
          {isBannerVisible ? (
            <>
              <Button
               onClick={() => {setIsBannerVisible(false)}}
             >
               <CloseIcon />
             </Button>
             <Divider orientation="vertical" flexItem sx={{ marginRight: '20px', marginLeft: '20px' }} />
             <Box sx={{ flexGrow: 1 }}>
               <Typography variant="subtitle1" component="div" sx={{ mb: 1 }}>
                 You are signed in as a guest with limited access.
               </Typography>
               <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                 <span style={{ fontSize: '0.875rem' }}>Explore different user perspectives. Create a personal account for full access.</span>
                 <RadioGroup
                   row
                   aria-labelledby="demo-controlled-radio-buttons-group"
                   name="controlled-radio-buttons-group"
                   value={user}
                   onChange={handleChange}
                 >
                   <FormControlLabel value="new" control={<Radio />} label="New User" />
                   <FormControlLabel value="expert" control={<Radio />} label="Expert User" />
                 </RadioGroup>
               </Box>
             </Box>
            </>
          ): (
            <Button
               onClick={() => {setIsBannerVisible(true)}}
             >
               <InfoIcon 
                fontSize='large'
                color="primary"
              />
             </Button>
          )}
        </Box>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
