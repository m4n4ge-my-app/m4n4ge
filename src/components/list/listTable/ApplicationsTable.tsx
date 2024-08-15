import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import { Application, workModes } from '../../../utils/mockDataGenerator';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import NumbersOutlinedIcon from '@mui/icons-material/NumbersOutlined';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import TableContainer from '@mui/material/TableContainer';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { getColors } from '../utils/designUtilities';
import { Box, Stack, lighten } from '@mui/system';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import moment from 'moment';

interface DayCardProps {
  viewMode: string;
  applicationDate: string;
  applications: Application[];
}

export default function ApplicationsTable({
  viewMode,
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
          {viewMode === 'days'
            ? moment(applicationDate).format('dddd, MMMM D, YYYY')
            : applicationDate}
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
                <TableCell align="center" style={{ width: '5%' }}>
                  {i + 1}
                </TableCell>
                <TableCell align="center" style={{ width: '5%' }}>
                  {application.isFavorite === true ? (
                    <FavoriteIcon
                      style={{ color: '#ff40da' }}
                      fontSize="small"
                    />
                  ) : (
                    <FavoriteBorderOutlinedIcon fontSize="small" />
                  )}
                </TableCell>
                <TableCell align="center" style={{ width: '10%' }}>
                  {application.employerName}
                </TableCell>
                <TableCell align="center" style={{ width: '10%' }}>
                  {application.positionName}
                </TableCell>
                <TableCell align="center" style={{ width: '10%' }}>
                  {application.jobLocation}
                </TableCell>
                <TableCell align="center" style={{ width: '10%' }}>
                  {application.jobPlatform}
                </TableCell>
                <TableCell align="center" style={{ width: '10%' }}>
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
                <TableCell align="center" style={{ width: '10%' }}>
                  {application.workModel.replace(/"/g, '') === workModes[0]&& (
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      gap={1}
                    >
                      <BusinessOutlinedIcon fontSize="small" />
                      {workModes[0]}
                    </Box>
                  )}
                  {application.workModel.replace(/"/g, '') === workModes[1] && (
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      gap={1}
                    >
                      <MapsHomeWorkOutlinedIcon fontSize="small" />
                      {workModes[1]}
                    </Box>
                  )}
                  {application.workModel.replace(/"/g, '') === workModes[2] && (
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      gap={1}
                    >
                      <CottageOutlinedIcon fontSize="small" />
                      {workModes[2]}
                    </Box>
                  )}
                </TableCell>
                <TableCell align="center" style={{ width: '30%' }}>
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
