import CloseIcon from '@mui/icons-material/Close';
import { Button, Typography, Box } from '@mui/material';

import { setFocusedDocument } from '../../state/document/documentSlice';
import { AppDispatch } from '../../state/store';
import { useDispatch } from 'react-redux';

interface DocumentPreviewProps {
  presignedUrl: string;
  title: string;
}

const DocumentPreview = ({ presignedUrl, title }: DocumentPreviewProps) => {
  const dispatch: AppDispatch = useDispatch();

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px',
        }}
      >
        <Typography variant="body1">{title}</Typography>
        <Button
          variant="text"
          size="small"
          endIcon={<CloseIcon />}
          onClick={() => dispatch(setFocusedDocument(null))}
        >
          Close
        </Button>
      </Box>
      <iframe
        src={presignedUrl}
        style={{
          width: '100%',
          height: '100vh',
          border: '1px solid #ccc',
        }}
        title="Document Preview"
      ></iframe>
    </div>
  );
};

export default DocumentPreview;
