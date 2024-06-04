import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../state/store';
import { toggleDrawer } from '../../../state/navigation/sidebarSlice';
import Logo from '../../logo/Logo';

const Navbar = () => {
  const dispatch = useDispatch();
  const sidebarWidth = useSelector(
    (state: RootState) => state.sidebar.sidebarWidth
  );

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
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => dispatch(toggleDrawer())}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <Logo />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
