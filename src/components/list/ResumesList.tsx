import NumbersOutlinedIcon from '@mui/icons-material/NumbersOutlined';
import { TableCell, TableHead, TableRow } from '@mui/material';
import { useEffect, useState } from 'react';

import { Document, setDocuments } from '../../state/document/documentSlice';
import { getAllDocuments } from '../../services/documents';
import DocumentsTable from './listTable/DocumentsTable';
import { useAuthToken } from '../../hooks/useAuthToken';


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
  const token = useAuthToken();
  const [resumes, setResumes] = useState<Document[]>([]);

  const fetchDocumentsData = async () => {
    if (token) {
      try {
        const data = await getAllDocuments(token);
        setDocuments(data);

        const filteredResumes = data.filter((doc: Document) => doc.fileType === 'resume');
        setResumes(filteredResumes);
  
      } catch (error) {
        console.log('error fetching user application records: ', error);
      }
    }
  };

  useEffect(() => {
    fetchDocumentsData();
  }, [token]);

  return <DocumentsTable data={resumes} columns={columns} />
}
;

export default ResumesList;
