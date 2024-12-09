//external imports
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
    const dispatch: AppDispatch = useDispatch();
    const applications = useSelector(
      (state: RootState) => state.applications.applications
    );
    const documents = useSelector(
      (state: RootState) => state.documents.documents
    );
    const [coverLetters, setCoverLetters] = useState<Document[]>([]);
  
    useEffect(() => {
      dispatch(fetchDocuments());
    }, [dispatch]);
  
    useEffect(() => {
      const filteredCoverLetters = documents.filter(
        (doc: Document) => doc.fileType === 'cover letter'
      );
      const lettersWithApplicationDetails = filteredCoverLetters.map((letter) => {
        const updatedApplications = letter.applications.map((appId) => {
          const application = applications.find((app) => app._id === appId);
          return application
            ? `${application.employerName} - ${application.positionName}`
            : 'All Applications';
        });
        return { ...letter, applications: updatedApplications };
      });
      setCoverLetters(lettersWithApplicationDetails);
    }, [documents, applications]);
  
    return <DocumentsTable data={coverLetters} columns={columns} />;
};

export default CoverLettersList;
