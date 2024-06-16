import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { Stack } from '@mui/system';

function createData(
  isFavourite: boolean,
  employerName: string,
  positionName: string,
  location: string,
  platform: string,
  status: string,
  note: string
) {
  return {
    isFavourite,
    employerName,
    positionName,
    location,
    platform,
    status,
    note,
  };
}

const rows = [
  createData(
    true,
    'Westjet',
    'Intermediate QA Analyst',
    'Remote',
    'Indeed',
    'Applied',
    'Interview scheduled'
  ),
  createData(
    false,
    'Amazon',
    'Software Developer',
    'Hybrid',
    'ZipRecruiter',
    'Applied',
    'Interview scheduled'
  ),
  createData(
    true,
    'Google',
    'Software Engineer',
    'Remote',
    'Linkedin',
    'Applied',
    'Interview scheduled'
  ),
  createData(
    false,
    'Facebook',
    'Software Developer',
    'On-Site',
    'Indeed',
    'Contacted',
    'Interview scheduled'
  ),
  createData(
    true,
    'Microsoft',
    'Software Engineer',
    'Remote',
    'Indeed',
    'Interviwing',
    'Interview scheduled'
  ),
];

export default function DayView() {
  return (
    <Paper sx={{ width: '100%', mb: 2 }}>
      <Stack direction="row" alignItems="center" paddingTop="10px">
        <Typography variant="body1" align="left" sx={{ marginLeft: 2 }}>
          2023-07-12
        </Typography>
        <Typography
          variant="body2"
          align="left"
          sx={{
            marginLeft: 2,
            backgroundColor: '#d3d3d3',
            borderRadius: '8px',
            padding: '2px 5px',
          }}
        >
          5 applications
        </Typography>
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="center">Employer Name</TableCell>
              <TableCell align="center">Role Name</TableCell>
              <TableCell align="center">Location</TableCell>
              <TableCell align="center">Platform</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Note</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow
                key={i}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.isFavourite}
                </TableCell>
                <TableCell align="center">{row.employerName}</TableCell>
                <TableCell align="center">{row.positionName}</TableCell>
                <TableCell align="center">{row.location}</TableCell>
                <TableCell align="center">{row.platform}</TableCell>
                <TableCell align="center">{row.status}</TableCell>
                <TableCell align="center">{row.note}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
