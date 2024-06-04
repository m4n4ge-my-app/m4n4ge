import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../state/store';
import {
  closeDrawer,
  endDrawerTransition,
} from '../../../state/navigation/sidebarSlice';
import sidebarItems from './sidebarItems';
import { Link, Link as RouterLink } from 'react-router-dom';
import { ListItemButton, Typography } from '@mui/material';
import TextLogo from '../../logo/TextLogo';
import React, { useState } from 'react';

const SideBar = () => {
  const [selected, setSelected] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string | null>('');
  const dispatch = useDispatch();
  const { sidebarWidth, mobileOpen } = useSelector(
    (state: RootState) => state.sidebar
  );

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
        sx={{ marginTop: '40px', color: 'gray' }}
        onClick={() => setSelected(true)}
        onBlur={() => setSelected(false)}
        selected={selected}
      >
        <ListItemIcon>
          <DashboardOutlinedIcon sx={{ marginLeft: '20px' }} />
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
                      selected={selectedItem === child.name}
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
