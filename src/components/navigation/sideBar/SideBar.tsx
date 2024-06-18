//external imports
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import { Link, Link as RouterLink } from 'react-router-dom';
import { ListItemButton, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useLocation } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import React, { useState } from 'react';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
//local imports
import { RootState } from '../../../state/store';
import {
  closeDrawer,
  endDrawerTransition,
} from '../../../state/navigation/sidebarSlice';
import TextLogo from '../../logo/TextLogo';
import sidebarItems from './sidebarItems';
import theme from '../../../theme';

const SideBar = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>('');
  const [selected, setSelected] = useState<boolean>(false);
  const { sidebarWidth, mobileOpen } = useSelector(
    (state: RootState) => state.sidebar
  );
  const dispatch = useDispatch();
  const location = useLocation();

  const handleDrawerClose = () => {
    dispatch(closeDrawer());
  };

  const handleDrawerTransitionEnd = () => {
    dispatch(endDrawerTransition());
  };

  // Sidebar contents
  const drawer = (
    <div>
      <TextLogo />
      <ListItemButton
        component={RouterLink}
        to="/dashboard"
        sx={{
          marginTop: '40px',
          color:
            selected || location.pathname === '/dashboard'
              ? theme.palette.primary.main
              : 'gray',
        }}
        onClick={() => setSelected(true)}
        onFocus={() => setSelected(true)}
        onBlur={() => setSelected(false)}
        selected={location.pathname === '/dashboard'}
      >
        <ListItemIcon>
          <DashboardOutlinedIcon
            sx={{
              marginLeft: '20px',
              color:
                selected || location.pathname === '/dashboard'
                  ? theme.palette.primary.main
                  : 'gray',
            }}
          />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <List>
        {sidebarItems.map((item, index) => (
          <React.Fragment key={index}>
            <ListItemButton
              disabled
              component={RouterLink}
              to={item.path}
              sx={{ display: 'block', marginLeft: '20px' }}
            >
              <ListItemIcon>{item.icon && item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
            {item.children.length > 0 && (
              <List>
                {item.children.map((child, index) => (
                  <Link
                    to={child.path}
                    style={{ textDecoration: 'none', color: 'gray' }}
                    key={index}
                  >
                    <ListItemButton
                      key={index}
                      selected={location.pathname === child.path}
                      sx={{
                        color:
                          selectedItem === child.name ||
                          location.pathname === child.path
                            ? theme.palette.primary.main
                            : 'gray',
                      }}
                      onClick={() => setSelectedItem(child.name)}
                      onBlur={() => setSelectedItem('')}
                    >
                      {child.icon && (
                        <child.icon
                          sx={{ marginRight: '10px', marginLeft: '20px' }}
                        />
                      )}
                      <Typography variant="h6" sx={{ fontSize: '14px' }}>
                        {child.name}
                      </Typography>
                    </ListItemButton>
                  </Link>
                ))}
              </List>
            )}
          </React.Fragment>
        ))}
      </List>
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: sidebarWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: sidebarWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: sidebarWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default SideBar;
