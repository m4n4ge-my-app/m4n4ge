//external imports
import React, { forwardRef, useImperativeHandle } from 'react';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/system';

//local imports
import { show } from '../../../state/feeback/feedbackSlice';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export type ConfirmationModalRef = {
  setOpen: (open: boolean) => void;
};

interface ConfirmationModalProps {
  title: string;
  message: string;
  confirmAction: () => Promise<unknown>;
  subsquentPath?: string | null;
}

const ConfirmationModal = forwardRef(
  (
    { title, message, confirmAction, subsquentPath }: ConfirmationModalProps,
    ref
  ) => {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useImperativeHandle(ref, () => ({
      setOpen,
    }));

    return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, mb: 3 }}>
            {message}
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={() => {
              confirmAction().then(() => {
                if (subsquentPath) {
                  navigate(subsquentPath);
                }
                dispatch(
                  show({
                    message: 'Application deleted successfully',
                    severity: 'success',
                  })
                );
              });
            }}
            sx={{ mr: 2 }}
          >
            Proceed
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="small"
            onClick={handleClose}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    );
  }
);

export default ConfirmationModal;
