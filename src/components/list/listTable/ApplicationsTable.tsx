import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { Box, Stack, lighten } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import NumbersOutlinedIcon from '@mui/icons-material/NumbersOutlined';
import { Application } from '../../../utils/mockDataGenerator';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import { getColors } from '../utils/colorUtilities';

interface DayCardProps {
  applicationDate: string;
  applications: Application[];
}

export default function ApplicationsTable({
  applicationDate,
  applications,
}: DayCardProps) {
  return (
    <Paper sx={{ width: '100%', marginBottom: '20px' }}>
      <Stack
        direction="row"
        alignItems="center"
        padding="10px"
        bgcolor={'#f0f5ff'}
      >
        <Typography
          variant="body1"
          align="left"
          sx={{ marginLeft: 2, fontWeight: 'bold', color: 'GrayText' }}
        >
          {applicationDate}
        </Typography>
        <Box
          sx={{
            width: 'auto',
            marginLeft: 2,
            backgroundColor: lighten('#D3D3D3', 0.3),
            borderRadius: '8px',
            padding: '2px 5px',
            fontWeight: 'bold',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'GrayText',
          }}
        >
          <Typography>{`${applications.length} applications`}</Typography>
        </Box>
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: '#fbfcff' }}>
              <TableCell
                align="center"
                sx={{ fontWeight: 'bold', color: 'GrayText' }}
              >
                <NumbersOutlinedIcon fontSize="inherit" />
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: 'bold', color: 'GrayText' }}
              >
                <VolunteerActivismOutlinedIcon fontSize="small" />
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: 'bold', color: 'GrayText' }}
              >
                Employer Name
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: 'bold', color: 'GrayText' }}
              >
                Role Name
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: 'bold', color: 'GrayText' }}
              >
                Location
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: 'bold', color: 'GrayText' }}
              >
                Platform
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: 'bold', color: 'GrayText' }}
              >
                Status
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: 'bold', color: 'GrayText' }}
              >
                Work Mode
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: 'bold', color: 'GrayText' }}
              >
                Note
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {applications.map((application, i) => (
              <TableRow
                key={i}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center">{i + 1}</TableCell>
                <TableCell align="center">
                  {application.isFavourite === true ? (
                    <FavoriteIcon
                      style={{ color: '#ff40da' }}
                      fontSize="small"
                    />
                  ) : (
                    <FavoriteBorderOutlinedIcon fontSize="small" />
                  )}
                </TableCell>
                <TableCell align="center">{application.employerName}</TableCell>
                <TableCell align="center">{application.positionName}</TableCell>
                <TableCell align="center">{application.location}</TableCell>
                <TableCell align="center">{application.platform}</TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      width: '100px',
                      marginLeft: 2,
                      ...getColors(application.status),
                      borderRadius: '8px',
                      padding: '2px 5px',
                      fontWeight: 'bold',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: getColors(application.status).color,
                    }}
                  >
                    <Typography>{application.status}</Typography>
                    {application.status === 'Accepted' && <SportsScoreIcon />}
                  </Box>
                </TableCell>
                <TableCell align="center">{application.workMode}</TableCell>
                <TableCell align="center" style={{ width: '400px' }}>
                  {application.note}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
