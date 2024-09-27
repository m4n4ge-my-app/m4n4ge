import { Divider, Menu, MenuItem, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/system';

interface Prop {
  open: boolean;
  handleClose: () => void;
  anchorEl: null | HTMLElement;
  notfications: any;
}

const NotificationMenu = (props: Prop) => {
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
          overflow: 'auto',
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
          maxHeight: '300px',
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      {props.notfications &&
        props.notfications.map((notification: any, index: number) => (
          <MenuItem key={index}>
            <Box sx={{ maxWidth: '200px', position: 'relative' }}>
              <Typography
                variant="body1"
                color="textPrimary"
                sx={{ whiteSpace: 'normal', padding: '5px' }}
              >
                {notification.message}
              </Typography>
              <CloseIcon
                fontSize="small"
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  cursor: 'pointer',
                }}
              />
              <Divider />
            </Box>
          </MenuItem>
        ))}
      {!props.notfications && (
        <MenuItem>
          <Box sx={{ maxWidth: '200px', position: 'relative' }}>
            <Typography
              variant="body1"
              color="textPrimary"
              sx={{ whiteSpace: 'normal' }}
            >
              No notifications at the moment.
            </Typography>
          </Box>
        </MenuItem>
      )}
    </Menu>
  );
};

export default NotificationMenu;
