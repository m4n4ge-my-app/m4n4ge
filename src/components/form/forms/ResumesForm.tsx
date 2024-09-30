import {
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import EditNoteIcon from '@mui/icons-material/EditNote';

const ResumesForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid padding={1}>
      <Grid
        container
        item
        sx={{ justifyContent: 'flex-end' }}
      >
        <ToggleButtonGroup aria-label="">
          <ToggleButton value="" aria-label="">
            <FilterDramaIcon
              fontSize="small"
              sx={{ marginRight: isMobile ? '0px' : '10px' }}
            />{' '}
            {isMobile ? '' : 'Upload'}
          </ToggleButton>
          <ToggleButton value="" aria-label="">
            <EditNoteIcon
              fontSize="small"
              sx={{ marginRight: isMobile ? '0px' : '10px' }}
            />{' '}
            {isMobile ? '' : 'Create'}
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
      <Grid container item>
        upload form or create form here
      </Grid>
    </Grid>
  );
};

export default ResumesForm;
