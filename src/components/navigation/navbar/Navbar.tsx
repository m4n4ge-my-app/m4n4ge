import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../state/store';
import { toggleDrawer } from '../../../state/navigation/sidebarSlice';
import Logo from '../../logo/Logo';
import { Avatar, Box, Tooltip } from '@mui/material';
import React, { useEffect } from 'react';
import AccountMenu from './AccountMenu';
import { User } from '../../../state/user/userSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const sidebarWidth = useSelector(
    (state: RootState) => state.sidebar.sidebarWidth
  );
  const response = useSelector((state: RootState) => state.user);
  const [user, setUser] = React.useState<User | null>(null);

  useEffect(() => {
    setUser(response.user);
  }, [response]);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        width: { sm: `calc(100% - ${sidebarWidth}px)` },
        ml: { sm: `${sidebarWidth}px` },
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => dispatch(toggleDrawer())}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <Logo />
        </IconButton>
        <Box sx={{ display: { sm: 'block', xs: 'none' } }} />{' '}
        {/* This div will take up the space of the logo when it's not present */}
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            {user?.photoString ? (
              <Avatar src={user.photoString} sx={{ width: 36, height: 36 }} />
            ) : (
              <Avatar sx={{ width: 36, height: 36 }}>
                {user?.firstName.charAt(0).toUpperCase()}
              </Avatar>
            )}
          </IconButton>
        </Tooltip>
        <AccountMenu
          open={open}
          handleClose={handleClose}
          anchorEl={anchorEl}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
