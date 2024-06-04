import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
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

const SideBar = () => {
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
      <List sx={{ marginTop: '40px' }}>
        {sidebarItems.map((item, index) => (
          <>
            <ListItemButton
              disabled={item.name !== 'Dashboard' ? true : false}
              key={index}
              component={RouterLink}
              to={item.path}
            >
              <ListItemIcon>{item.icon && <item.icon />}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
            {item.children.length > 0 && (
              <List>
                {item.children.map((child, index) => (
                  <ListItemButton key={index}>
                    {child.icon && <child.icon sx={{ marginRight: '10px' }} />}
                    <Typography variant="h6" sx={{ fontSize: '14px' }}>
                      <Link to={child.path} style={{ textDecoration: 'none' }}>
                        {child.name}
                      </Link>
                    </Typography>
                  </ListItemButton>
                ))}
              </List>
            )}
          </>
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
