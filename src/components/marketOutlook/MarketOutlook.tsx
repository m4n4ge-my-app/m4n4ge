import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import JobCard from './JobCard';
import './marketoutlook.scss';

let jobData = [
  {
    jobTitle: 'Frontend Developer',
    companyName: 'Google',
    location: 'Mountain View, CA',
    postingDate: '3 days ago',
  },
  {
    jobTitle: 'Backend Developer',
    companyName: 'Amazon',
    location: 'Seattle, WA',
    postingDate: '2 days ago',
  },
  {
    jobTitle: 'Fullstack Developer',
    companyName: 'Meta',
    location: 'Remote',
    postingDate: '5 days ago',
  },
  {
    jobTitle: 'Data Scientist',
    companyName: 'Netflix',
    location: 'Los Gatos, CA',
    postingDate: '1 day ago',
  },
  {
    jobTitle: 'DevOps Engineer',
    companyName: 'Microsoft',
    location: 'Redmond, WA',
    postingDate: '4 days ago',
  },
];

//this is to ensure theres enough data to fill the screen; will be removed when API is integrated
jobData = [...jobData, ...jobData, ...jobData, ...jobData];

const MarketOutlook = () => {
  return (
    <Grid container direction="row" className="market-outlook">
      <Grid item xs={12}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            variant="h6"
            color="lightgray"
            style={{ fontWeight: 'bold', marginLeft: '10px' }}
          >
            Market Outlook
          </Typography>
          <Link to="/outlook">
            <OpenInFullIcon
              color="primary"
              sx={{ fontSize: '20px', marginRight: '5px' }}
            />
          </Link>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box className="job-cards-wrapper">
          <Box className="job-cards-container">
            {jobData.map((job, index) => (
              <JobCard
                key={index}
                jobTitle={job.jobTitle}
                companyName={job.companyName}
                location={job.location}
                postingDate={job.postingDate}
              />
            ))}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MarketOutlook;
