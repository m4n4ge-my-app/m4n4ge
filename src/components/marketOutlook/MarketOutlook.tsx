//external imports
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { Grid, Typography, useTheme } from '@mui/material';
import { Box, useMediaQuery } from '@mui/system';
import EastIcon from '@mui/icons-material/East';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './marketoutlook.scss';

//local imports
import { RootState } from '../../state/store';
import JobCard from './JobCard';

const initialJobData = [
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

const MarketOutlook = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const user = useSelector((state: RootState) => state.user);
  const [jobData, setJobData] = useState(initialJobData);

  useEffect(() => {
    if (user.user?.email === 'expert_user@m4n4gemy.app') {
      setJobData([
        ...initialJobData,
        ...initialJobData,
        ...initialJobData,
        ...initialJobData,
      ]);
    } else if (user.user?.email === 'new_user@m4n4gemy.app') {
      setJobData([]);
    } else {
      setJobData(initialJobData);
    }
  }, [user]);

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
        {jobData.length > 0 ? (
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
        ) : (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ padding: '20px', flexDirection: 'column' }}
          >
            <Typography
              variant="body2"
              align="center"
              sx={{ marginBottom: '10px' }}
            >
              Complete your profile to see job matches
            </Typography>
            <Link to="/profile">
              <EastIcon
                fontSize={isMobile ? 'small' : 'medium'}
                color="primary"
              />
            </Link>
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default MarketOutlook;
