import {
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { useEffect, useState } from 'react';
import TextEditor from '../../textEditor/TextEditor';
import FileUpload from '../../fileUpload/FileUpload';
import { useAuthToken } from '../../../hooks/useAuthToken';
import { getApplications } from '../../../services/applications';
import { Application } from '../../../utils/applications.util';

interface UploadFormProps {
  uploadType: string;
}

const UploadForm = ({ uploadType } : UploadFormProps) => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [mode, setMode] = useState('upload');
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

  const handleChange = (_event: React.MouseEvent<HTMLElement>, newMode: string) => {
    if (newMode) {
      setMode(newMode);
    }
  };

  return (
    <Grid padding={isMobile? 1 : 2}>
      <Grid container item sx={{ justifyContent: 'flex-end' }}>
        <ToggleButtonGroup
          value={mode}
          exclusive
          onChange={handleChange} //learned that argument passing here is automatically handled by MUI
          size="small"
          aria-label="mode selection"
        >
          <ToggleButton value="upload" aria-label="upload mode">
            <FilterDramaIcon
              fontSize="small"
              sx={{ marginRight: isMobile ? '0px' : '10px' }}
            />
            {isMobile ? '' : 'Upload'}
          </ToggleButton>
          {uploadType !== 'Description' && <ToggleButton value="create" aria-label="create mode">
            <EditNoteIcon
              fontSize="small"
              sx={{ marginRight: isMobile ? '0px' : '10px' }}
            />{' '}
            {isMobile ? '' : 'Create'}
          </ToggleButton>}
        </ToggleButtonGroup>
      </Grid>
      <Grid container item>
        {mode === 'upload' && <FileUpload uploadType={uploadType} applications={applications}/>}
        {mode === 'create' && <TextEditor uploadType={uploadType} applications={applications}/>}
      </Grid>
    </Grid>
  );
};

export default UploadForm;
