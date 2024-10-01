import { useState } from 'react';
import {
  Button,
  Typography,
  Box,
  Grid,
  Autocomplete,
  TextField,
} from '@mui/material';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedApplication, setSelectedApplication] = useState<string>('');
  const applicationOptions = ['Application 1', 'Application 2', 'Application 3'];

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    } else {
      setSelectedFile(null);
    }
  };

  const handleUploadClick = () => {
    // Handle the file upload logic here
    console.log('File uploaded:', selectedFile);
    console.log('Selected application:', selectedApplication);
  };

  const handleCancelClick = () => {
    // Handle the cancel logic here
    setSelectedFile(null);
    setSelectedApplication('');
  };

  return (
    <Grid
      container
      spacing={2}
      direction="row"
      alignItems="center"
      sx={{ paddingTop: '20px' }}
    >
      <Grid item xs={12}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          border="1px dashed grey"
          borderRadius="8px"
          padding="20px"
          textAlign="center"
          width="100%"
          height="300px"
        >
          <FilterDramaIcon fontSize="large" color="action" />
          <Typography variant="h6" gutterBottom>
            Drag and drop a file here, or click to select a file
          </Typography>
          <input
            type="file"
            style={{ display: 'none' }}
            id="file-upload"
            onChange={handleFileChange}
          />
          <label htmlFor="file-upload">
            <Button variant="contained" color="primary" component="span">
              Select File
            </Button>
          </label>
          {selectedFile && (
            <Typography variant="body1" style={{ marginTop: '10px' }}>
              Selected file: {selectedFile.name}
            </Typography>
          )}
          <Autocomplete
            fullWidth
            options={applicationOptions}
            getOptionLabel={(option) => option.toString()}
            value={selectedApplication}
            onChange={(_event, newValue) => setSelectedApplication(newValue!)}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                label="Optional: select an application"
                variant="standard"
                style={{ marginTop: '20px', width: '400px' }}
              />
            )}
          />
        </Box>
      </Grid>
      <Grid item xs={12} container justifyContent="flex-end" spacing={2}>
        <Grid item>
          <Button
            variant="outlined"
            color="primary"
            size="small"
            onClick={handleCancelClick}
          >
            Cancel
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={handleUploadClick}
            disabled={!selectedFile || !selectedApplication}
          >
            Upload
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FileUpload;
