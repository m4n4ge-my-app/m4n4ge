//external imports
import NumbersOutlinedIcon from '@mui/icons-material/NumbersOutlined';
import { TableCell, TableHead, TableRow } from '@mui/material';
import DocumentsTable from './listTable/DocumentsTable';
import { useEffect } from 'react';
import { setFocusedDocument } from '../../state/document/documentSlice';
import { AppDispatch } from '../../state/store';
import { useDispatch } from 'react-redux';

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

const JobDescriptionsList = () => {
  const dispatch: AppDispatch = useDispatch();

  //this will ensure when going from different document types to resumes, the focused document is cleared which prevents rendering of wrong type of document
  useEffect(() => {
    dispatch(setFocusedDocument(null))
  }, []);

  return <DocumentsTable data={[]} columns={columns} />;
};

export default JobDescriptionsList;
