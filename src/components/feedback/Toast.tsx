import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

interface ToastProps {
  severity: 'error' | 'warning' | 'info' | 'success';
  message: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Toast: React.FC<ToastProps> = ({ severity, message, open, setOpen }) => {
  const handleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div style={{ fontSize: '1rem' }}>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        sx={{
          '& .css-p4rpmy-MuiPaper-root-MuiAlert-root': {
            padding: '0px 16px',
          },
        }}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="filled"
          sx={{ width: '100%', minHeight: '32px' }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};
export default Toast;
