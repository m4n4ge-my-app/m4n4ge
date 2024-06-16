import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import NumbersOutlinedIcon from '@mui/icons-material/NumbersOutlined';
import { pink } from '@mui/material/colors';

function createData(
  isFavourite: boolean,
  employerName: string,
  positionName: string,
  location: string,
  platform: string,
  status: string,
  workMode: string,
  note: string
) {
  return {
    isFavourite,
    employerName,
    positionName,
    location,
    platform,
    status,
    workMode,
    note,
  };
}

const rows = [
  createData(
    true,
    'Westjet',
    'Intermediate QA Analyst',
    'Calgary, AB',
    'Indeed',
    'Applied',
    'Remote',
    'Interview scheduled'
  ),
  createData(
    false,
    'Amazon',
    'Software Developer',
    'Seattle, WA',
    'ZipRecruiter',
    'Applied',
    'On-Site',
    'Interview scheduled'
  ),
  createData(
    true,
    'Google',
    'Software Engineer',
    'Santa Clara, CA',
    'Linkedin',
    'Applied',
    'Hybrid',
    'Interview scheduled'
  ),
  createData(
    false,
    'Facebook',
    'Software Developer',
    'Austin, TX',
    'Indeed',
    'Contacted',
    'On-Site',
    'Interview scheduled'
  ),
  createData(
    true,
    'Microsoft',
    'Software Engineer',
    'Redmond, WA',
    'Indeed',
    'Interviwing',
    'Remote',
    'Interview scheduled'
  ),
];

export default function DayCard() {
  return (
    <Paper sx={{ width: '100%' }}>
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
          Sunday, June 16th, 2024
        </Typography>
        <Typography
          variant="body2"
          align="left"
          sx={{
            marginLeft: 2,
            backgroundColor: '#bcc1cc',
            borderRadius: '8px',
            padding: '2px 5px',
            color: 'GrayText',
            fontWeight: 'bold',
          }}
        >
          5 applications
        </Typography>
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
            {rows.map((row, i) => (
              <TableRow
                key={i}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center">{i + 1}</TableCell>
                <TableCell align="center">
                  {row.isFavourite === true ? (
                    <FavoriteIcon
                      style={{ color: pink[600] }}
                      fontSize="small"
                    />
                  ) : (
                    <FavoriteBorderOutlinedIcon fontSize="small" />
                  )}
                </TableCell>
                <TableCell align="center">{row.employerName}</TableCell>
                <TableCell align="center">{row.positionName}</TableCell>
                <TableCell align="center">{row.location}</TableCell>
                <TableCell align="center">{row.platform}</TableCell>
                <TableCell align="center">{row.status}</TableCell>
                <TableCell align="center">{row.workMode}</TableCell>
                <TableCell align="center">{row.note}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
