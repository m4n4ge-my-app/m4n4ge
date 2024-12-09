//external imports
import NumbersOutlinedIcon from '@mui/icons-material/NumbersOutlined';
import { TableCell, TableHead, TableRow } from '@mui/material';
import { useEffect, useState } from 'react';

//internal imports
import { Document, fetchDocuments, setFocusedDocument } from '../../state/document/documentSlice';
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

const JobDescriptionsList = () => {
  const dispatch: AppDispatch = useDispatch();
  const applications = useSelector(
    (state: RootState) => state.applications.applications
  );
  const documents = useSelector(
    (state: RootState) => state.documents.documents
  );
  const [jobDescriptions, setJobDescriptions] = useState<Document[]>([]);

  useEffect(() => {
    dispatch(fetchDocuments());
  }, [dispatch]);

  //this will ensure when going from different document types to resumes, the focused document is cleared which prevents rendering of wrong type of document
  useEffect(() => {
    dispatch(setFocusedDocument(null));
  }, []);

  useEffect(() => {
    const filteredJobDescriptions = documents.filter(
      (doc: Document) => doc.fileType === 'description'
    );
    const descriptionsWithApplicationDetails = filteredJobDescriptions.map((description) => {
      const updatedApplications = description.applications.map((appId) => {
        const application = applications.find((app) => app._id === appId);
        return application
          ? `${application.employerName} - ${application.positionName}`
          : 'All Applications';
      });
      return { ...description, applications: updatedApplications };
    });
    setJobDescriptions(descriptionsWithApplicationDetails);
  }, [documents, applications]);

  return <DocumentsTable data={jobDescriptions} columns={columns} />;
};

export default JobDescriptionsList;
