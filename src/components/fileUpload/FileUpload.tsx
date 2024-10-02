import { useEffect, useState } from 'react';
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
import { useAuthToken } from '../../hooks/useAuthToken';
import { getApplications } from '../../services/applications';

interface FileUploadProps {
  uploadType: string;
}

const FileUpload = ({ uploadType }: FileUploadProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedApplication, setSelectedApplication] = useState<(Application | string)[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const token = useAuthToken();

  const fetchApplicationsData = async () => {
    if (token) {
      try {
        const data = await getApplications(token);
        setApplications(data);
      } catch (error) {
        console.log('error fetching user application records: ', error);
      }
    }
  };

  useEffect(() => {
    fetchApplicationsData();
  }, [token]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    } else {
      setSelectedFile(null);
    }
  };

  const handleUploadClick = () => {
    console.log('File uploaded:', selectedFile);
    console.log('Selected application:', selectedApplication);
  };

  const handleCancelClick = () => {
    setSelectedFile(null);
    setSelectedApplication([]);
    setTags([]);
  };

  const handleTagsChange = (_event: any, newValue: string[]) => {
    setTags(newValue);
  };

  const handleApplicationChange = (_event: any, newValue: (Application | string)[]) => {
    if (newValue.includes('All Applications')) {
      setSelectedApplication(['All Applications']);
    } else {
      setSelectedApplication(newValue);
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
              options={applications.length > 0 ? ['All Applications', ...applications] : applications}
              getOptionLabel={(option) => typeof option === 'string' ? option : `${option.employerName} - ${option.positionName}`}
              value={selectedApplication}
              onChange={handleApplicationChange}
              renderOption={(props, option) => (
                <li {...props} key={typeof option === 'string' ? option : option._id}>
                  {typeof option === 'string' ? option : `${option.employerName} - ${option.positionName}`}
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
