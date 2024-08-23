import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { Outlet } from 'react-router-dom';
import SideBar from '../../../components/navigation/sideBar/SideBar';
import { useSelector } from 'react-redux';
import { RootState } from '../../../state/store';
import Navbar from '../../../components/navigation/navbar/Navbar';
import React, { useEffect } from 'react';
import {
  Button,
  Divider,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import InfoIcon from '@mui/icons-material/Info';
import { useSignin } from '../../../hooks/useSignin';

const Layout = () => {
  const [user, setUser] = React.useState('');
  const [isBannerVisible, setIsBannerVisible] = React.useState(true);
  const { signin } = useSignin();

  const sidebarWidth = useSelector(
    (state: RootState) => state.sidebar.sidebarWidth
  );

  const signedInUser = useSelector((state: RootState) => state.user.user);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser((event.target as HTMLInputElement).value);
  };

  useEffect(() => {
    if (user === 'new') {
      signin({
        email: 'new_user@m4n4gemy.app',
        password: 'nEwUser1@!',
      });
    } else if (user === 'expert') {
      signin({
        email: 'expert_user@m4n4gemy.app',
        password: 'eXpErTuSeR1@!',
      });
    }
  }, [user]);

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
        {(signedInUser?.email === 'new_user@m4n4gemy.app' ||
          signedInUser?.email === 'expert_user@m4n4gemy.app') && (
          <Box
            sx={{
              p: 3,
              backgroundColor: isBannerVisible ? '#cce5ff' : 'none',
              display: 'flex',
              alignItems: 'center',
              position: 'fixed',
              top: '0px',
              width: '100%',
              height: '150px',
              zIndex: 1000,
            }}
          >
            {isBannerVisible ? (
              <>
                <Button
                  onClick={() => {
                    setIsBannerVisible(false);
                  }}
                >
                  <CloseIcon />
                </Button>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ marginRight: '20px', marginLeft: '20px' }}
                />
                <Box sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{ mb: 1 }}
                  >
                    You are signed in as a guest with limited access.
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <span style={{ fontSize: '0.875rem' }}>
                      Explore different user perspectives. Create a personal
                      account for full access.
                    </span>
                    <RadioGroup
                      row
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      defaultValue={'new'}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="new"
                        control={<Radio />}
                        label="Adam Smith (New User)"
                      />
                      <FormControlLabel
                        value="expert"
                        control={<Radio />}
                        label="John Doe (Expert User)"
                      />
                    </RadioGroup>
                  </Box>
                </Box>
              </>
            ) : (
              <Button
                onClick={() => {
                  setIsBannerVisible(true);
                }}
              >
                <InfoIcon fontSize="large" color="primary" />
              </Button>
            )}
          </Box>
        )}
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
