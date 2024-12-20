import {
  Card,
  CardContent,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import { Link } from 'react-router-dom';

interface JobCardProps {
  jobTitle: string;
  companyName: string;
  location: string;
  postingDate: string;
}

const JobCard = ({
  jobTitle,
  companyName,
  location,
  postingDate,
}: JobCardProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card
      sx={{
        marginBottom: '10px',
        boxShadow: 1,
        borderRadius: '10px',
        backgroundColor: '#fcfcfc',
        borderLeft: '5px solid rgba(64, 123, 255, 0.3)',
        padding: isMobile ? '5px' : '8px',
      }}
    >
      <CardContent sx={{ padding: isMobile ? '5px' : '8px' }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            variant={isMobile ? 'body2' : 'subtitle1'}
            sx={{
              fontWeight: 'bold',
              color: '#555',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis', //textOverflow: 'ellipsis' ensures single line
            }}
          >
            {jobTitle}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: '#999',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {postingDate}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" sx={{ marginTop: '5px' }}>
          <Typography
            variant="body2"
            sx={{
              color: '#666',
              marginRight: '5px',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {companyName}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: '#666', marginRight: '5px' }}
          >
            |
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: '#666',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {location}
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          sx={{ marginTop: isMobile ? '10px' : '15px' }}
        >
          <Link
            to="/outlook"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              color: '#407bff',
            }}
          >
            View details
            <EastIcon
              fontSize={isMobile ? 'small' : 'medium'}
              sx={{ marginLeft: '5px' }}
            />
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
};

export default JobCard;
