import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../state/store';
import { toggleDrawer } from '../../../state/navigation/sidebarSlice';
import Logo from '../../logo/Logo';
import { Avatar, Box, Tooltip } from '@mui/material';
import React from 'react';
import AccountMenu from './AccountMenu';

const Navbar = () => {
  const dispatch = useDispatch();
  const sidebarWidth = useSelector(
    (state: RootState) => state.sidebar.sidebarWidth
  );
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
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
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
