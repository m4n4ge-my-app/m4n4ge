import NumbersOutlinedIcon from '@mui/icons-material/NumbersOutlined';
import { TableCell, TableHead, TableRow } from '@mui/material';
import DocumentsTable from './listTable/DocumentsTable';

const resumesData = [
  {
    _id: '67448c37e5bb511ef54e8e5e',
    name: 'my default resume.pdf',
    s3Url: '',
    userId: '673cdb9bb5fe58bc59bd0b2c',
    type: 'application/pdf',
    size: 80464,
    fileType: 'resume',
    applications: ['all'],
    tags: ['parimary'],
    uploadedAt: '2024-11-25T14:39:51.025Z',
  },
  {
    _id: '67448c4ae5bb511ef54e8e65',
    name: 'my most recent resume.pdf',
    s3Url: '',
    userId: '673cdb9bb5fe58bc59bd0b2c',
    type: 'application/pdf',
    size: 80464,
    fileType: 'cover letter',
    applications: ['66cb0d644b9e19924a90329e'],
    tags: ['latest'],
    uploadedAt: '2024-11-25T14:40:10.351Z',
  },
  {
    _id: '67448c59e5bb511ef54e8e6c',
    name: 'resume 2023.pdf',
    s3Url: '',
    userId: '673cdb9bb5fe58bc59bd0b2c',
    type: 'application/pdf',
    size: 80464,
    fileType: 'description',
    applications: ['66cb0d644b9e19924a90329e', '66cb0d644b9e19924a9032a3'],
    tags: ['2023'],
    uploadedAt: '2024-11-25T14:40:25.180Z',
  },
];

const columns = (
  <TableHead>
    <TableRow sx={{ backgroundColor: '#fbfcff' }} id="applications-table-head">
      <TableCell
        // align="center"
        sx={{ fontWeight: 'bold', color: 'GrayText' }}
      >
        <NumbersOutlinedIcon fontSize="inherit" />
      </TableCell>

      <TableCell
        // align="center"
        sx={{ fontWeight: 'bold', color: 'GrayText' }}
      >
        Name
      </TableCell>
      <TableCell
        // align="center"
        sx={{ fontWeight: 'bold', color: 'GrayText' }}
      >
        Applications
      </TableCell>
      <TableCell
        // align="center"
        sx={{ fontWeight: 'bold', color: 'GrayText' }}
      >
        Tags
      </TableCell>
      <TableCell
        // align="center"
        sx={{ fontWeight: 'bold', color: 'GrayText' }}
      >
        Update Date
      </TableCell>
      <TableCell align="center" sx={{ fontWeight: 'bold', color: 'GrayText' }}>
        Actions
      </TableCell>
    </TableRow>
  </TableHead>
);

const ResumesList = () => (
  <DocumentsTable data={resumesData} columns={columns} />
);

export default ResumesList;
