import NumbersOutlinedIcon from '@mui/icons-material/NumbersOutlined';
import { TableCell, TableHead, TableRow } from '@mui/material';
import { useEffect, useState } from 'react';

import { Document, fetchDocuments } from '../../state/document/documentSlice';
import { AppDispatch, RootState } from '../../state/store';
import DocumentsTable from './listTable/DocumentsTable';
import { useDispatch, useSelector } from 'react-redux';


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
      <TableCell align="center" sx={{ fontWeight: 'bold', color: 'GrayText' }}>
        Actions
      </TableCell>
    </TableRow>
  </TableHead>
);

const ResumesList = () => {
  const dispatch: AppDispatch = useDispatch();
  const documents = useSelector((state: RootState) => state.documents.documents);
  const [resumes, setResumes] = useState<Document[]>([]);

  useEffect(() => {
    dispatch(fetchDocuments());
  }, [dispatch]);

  useEffect(() => {
    const filteredResumes = documents.filter((doc: Document) => doc.fileType === 'resume');
    setResumes(filteredResumes);
  }, [documents]);

  return <DocumentsTable data={resumes} columns={columns} />;
};

export default ResumesList;
