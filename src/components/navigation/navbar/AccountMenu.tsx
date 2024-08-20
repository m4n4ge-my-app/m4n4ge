import { Logout, Settings } from '@mui/icons-material';
import { Avatar, Divider, ListItemIcon, Menu, MenuItem } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { show } from '../../../state/feeback/feedbackSlice';
import { useSignout } from '../../../hooks/useSingout';

interface Prop {
  open: boolean;
  handleClose: () => void;
  anchorEl: null | HTMLElement;
}

const AccountMenu = (props: Prop) => {
  const dispatch = useDispatch();
  const { signout, isLoading } = useSignout();

  return (
    <Menu
      anchorEl={props.anchorEl}
      id="account-menu"
      open={props.open}
      onClose={props.handleClose}
      onClick={props.handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '&::before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <Link to="/profile" style={{ color: 'inherit', textDecoration: 'none' }}>
        <MenuItem onClick={props.handleClose}>
          <Avatar /> Profile
        </MenuItem>
      </Link>
      <Divider />
      <Link to="/settings" style={{ color: 'inherit', textDecoration: 'none' }}>
        <MenuItem onClick={props.handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
      </Link>

      <MenuItem
        onClick={() => {
          void (async () => {
            try {
              await signout();
              dispatch(
                show({ message: 'Logout successful', severity: 'success' })
              );

              props.handleClose();
            } catch (error) {
              console.error(error);
            }
          })();
        }}
        disabled={Boolean(isLoading)}
      >
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
};

export default AccountMenu;
