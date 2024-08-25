//external imports
import CssBaseline from '@mui/material/CssBaseline';
import CloseIcon from '@mui/icons-material/Close';
import InfoIcon from '@mui/icons-material/Info';
import Toolbar from '@mui/material/Toolbar';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import {
  Button,
  Divider,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';

//local imports
import SideBar from '../../../components/navigation/sideBar/SideBar';
import Navbar from '../../../components/navigation/navbar/Navbar';
import { useSignin } from '../../../hooks/useSignin';
import { RootState } from '../../../state/store';

const Layout = () => {
  const expertUserPassword = import.meta.env.VITE_DEMO_USER_EXPERT_PASSWORD as string;
  const newUserPassword = import.meta.env.VITE_DEMO_USER_NEW_PASSWORD as string;
  const [isBannerVisible, setIsBannerVisible] = React.useState(true);
  const sidebarWidth = useSelector(
    (state: RootState) => state.sidebar.sidebarWidth
  );
  const signedInUser = useSelector((state: RootState) => state.user.user);
  const [userOption, setUserOption] = React.useState(
    signedInUser?.email.split('_')[0] || ''
  );
  const { signin } = useSignin();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserOption((event.target as HTMLInputElement).value);
  };

  useEffect(() => {
    if (userOption === 'new') {
      signin({
        email: 'new_user@m4n4gemy.app',
        password: newUserPassword,
      });
      setUserOption('new');
    } else if (userOption === 'expert') {
      signin({
        email: 'expert_user@m4n4gemy.app',
        password: expertUserPassword,
      });
      setUserOption('expert');
    }
  }, [userOption]);

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
              backgroundColor: isBannerVisible ? '#c2d6ff' : 'none',
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
                      defaultValue={userOption}
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
