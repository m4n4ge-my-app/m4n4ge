import { useState } from 'react';
import {
  Button,
  Typography,
  Box,
  Grid,
  Autocomplete,
  TextField,
  Chip,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import { Application } from '../../utils/applications.util';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { show } from '../../state/feeback/feedbackSlice';
import { useAuthToken } from '../../hooks/useAuthToken';
import axios from 'axios';

interface FileUploadProps {
  uploadType: string;
  applications: Application[];
}

const FileUpload = ({ uploadType, applications }: FileUploadProps) => {
  const baseUrl = import.meta.env.VITE_BASE_URL as string;
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedApplication, setSelectedApplication] = useState<
    (Application | string)[]
  >([]);
  const [tags, setTags] = useState<string[]>([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const signedInUser = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  const token = useAuthToken();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    } else {
      setSelectedFile(null);
    }
  };

  const handleUploadClick = async() => {
    // Temporary access control for demonstration accounts
    if (
      signedInUser?.email === 'new_user@m4n4gemy.app' ||
      signedInUser?.email === 'expert_user@m4n4gemy.app'
    ) {
      dispatch(
        show({
          message:
            'Access Denied: Demonstration accounts do not have the privileges to add file. Please create a personal account for full access.',
          severity: 'error',
        })
      );
      return;
    }

    const formData = new FormData();
    if (selectedFile) {
      formData.append('file', selectedFile);
      formData.append('fileType', uploadType.toLowerCase());

      try {
        const response = await axios.post(baseUrl + '/api/documents', formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });
  
        if (response.status !== 201) {
          throw new Error('Failed to upload file');
        }

        if (response.status === 201) {
          setSelectedFile(null);
          setSelectedApplication([]);
          setTags([]);
          dispatch(
            show({
              message: 'File uploaded successfully!',
              severity: 'success',
            })
          );
        }
      } catch (error) {
        console.error('Error uploading file:', error);
        dispatch(
          show({
            message: 'Error uploading file. Please try again later.',
            severity: 'error',
          })
        );
      }
    }
  };

  const handleCancelClick = () => {
    setSelectedFile(null);
    setSelectedApplication([]);
    setTags([]);
  };

  const handleTagsChange = (_event: any, newValue: string[]) => {
    setTags(newValue);
  };

  const handleApplicationChange = (
    _event: any,
    newValue: (Application | string)[]
  ) => {
    if (newValue.includes('All Applications')) {
      setSelectedApplication(['All Applications']);
    } else {
      setSelectedApplication(newValue);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      setSelectedFile(event.dataTransfer.files[0]);
      event.dataTransfer.clearData();
    }
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
          gap={1}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          padding="20px"
          textAlign="center"
          width="100%"
          height="200px"
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          sx={{
            border: isDragging ? '1px dashed #3f51b5' : '',
            backgroundColor: isDragging ? '#f7f9ff' : '',
          }}
        >
          <FilterDramaIcon
            fontSize={isMobile ? 'medium' : 'large'}
            color="action"
          />
          <Typography variant={isMobile ? 'body1' : 'h6'} gutterBottom>
            Drag and drop a file here, or click to select a file
          </Typography>
          <input
            type="file"
            style={{ display: 'none' }}
            id="file-upload"
            onChange={handleFileChange}
          />
          <label htmlFor="file-upload">
            <Button
              variant="contained"
              color="primary"
              component="span"
              size="small"
            >
              Select {uploadType}
            </Button>
          </label>
          {selectedFile && (
            <Typography variant="body1" style={{ marginTop: '10px' }}>
              Selected file: {selectedFile.name}
            </Typography>
          )}
          <Box
            display="flex"
            flexDirection={isMobile ? 'column' : 'row'}
            alignItems="center"
            justifyContent="space-between"
            padding="20px"
            textAlign="center"
            width="100%"
            height="250px"
          >
            <Autocomplete
              multiple
              fullWidth
              options={
                applications.length > 0
                  ? ['All Applications', ...applications]
                  : applications
              }
              getOptionLabel={(option) =>
                typeof option === 'string'
                  ? option
                  : `${option.employerName} - ${option.positionName}`
              }
              value={selectedApplication}
              onChange={handleApplicationChange}
              renderOption={(props, option) => (
                <li
                  {...props}
                  key={typeof option === 'string' ? option : option._id}
                >
                  {typeof option === 'string'
                    ? option
                    : `${option.employerName} - ${option.positionName}`}
                </li>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  label="Applications"
                  placeholder="Optional: select applications"
                  variant="standard"
                  style={{ width: '90%' }}
                />
              )}
            />
            <Autocomplete
              fullWidth
              multiple
              freeSolo
              options={[]}
              value={tags}
              onChange={handleTagsChange}
              renderTags={(value: string[], getTagProps) =>
                value.map((option: string, index: number) => (
                  <Chip
                    variant="outlined"
                    label={option}
                    {...getTagProps({ index })}
                  />
                ))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="Tags"
                  placeholder="Optional: add a tag"
                  style={{ width: '90%' }}
                />
              )}
            />
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        container
        justifyContent="flex-end"
        spacing={2}
        sx={{ marginTop: '10px' }}
      >
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
            disabled={!selectedFile}
          >
            Add {uploadType}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FileUpload;
