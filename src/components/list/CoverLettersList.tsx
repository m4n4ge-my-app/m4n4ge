//external imports
import NumbersOutlinedIcon from '@mui/icons-material/NumbersOutlined';
import { TableCell, TableHead, TableRow } from '@mui/material';
import DocumentsTable from './listTable/DocumentsTable';

const columns = (
  <TableHead>
    <TableRow sx={{ backgroundColor: '#fbfcff' }} id="applications-table-head">
      <TableCell sx={{ fontWeight: 'bold', color: 'GrayText' }}>
        <NumbersOutlinedIcon fontSize="inherit" />
      </TableCell>
      <TableCell sx={{ fontWeight: 'bold', color: 'GrayText' }}>Name</TableCell>
      <TableCell sx={{ fontWeight: 'bold', color: 'GrayText' }}>
        Applications
      </TableCell>
      <TableCell sx={{ fontWeight: 'bold', color: 'GrayText' }}>Tags</TableCell>
      <TableCell align="center" sx={{ fontWeight: 'bold', color: 'GrayText' }}>
        Actions
      </TableCell>
    </TableRow>
  </TableHead>
);

const CoverLettersList = () => {
  return <DocumentsTable data={[]} columns={columns} />;
};

export default CoverLettersList;
