//external imports
import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material';

//internal imports
import JobDescriptionsList from '../list/JobDescriptionsList';
import DocumentPreview from '../preview/DocumentPreview';
import CoverLettersList from '../list/CoverLettersList';
import UploadForm from '../form/forms/UploadForm';
import ResumesList from '../list/ResumesList';
import { RootState } from '../../state/store';
import { useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { Item } from './utils/MuiItem';

interface Props {
  formLabel: string;
  listLabel: string;
}

const IManageGrid = ({ formLabel, listLabel }: Props) => {
  const focusedDocument = useSelector(
    (state: RootState) => state.documents.focusedDocument
  );
  const sectionRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  useEffect(() => {
    if (focusedDocument) {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [focusedDocument]);

  return (
    <Grid container spacing={0} sx={{ padding: '25px', marginTop: '100px', width: isMobile ? '80vw' : '100%', }}>
      <Grid container item spacing={2.5} className="">
        <Grid item xs={12} sm={12} md={12}>
          <Typography variant="h6" className="label" gutterBottom>
            Add {formLabel}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Item className="addBox" sx={{ border: 'none' }}>
            {formLabel === 'Resume' && <UploadForm uploadType="Resume" />}
            {formLabel === 'Cover Letter' && (
              <UploadForm uploadType="Cover Letter" />
            )}
            {formLabel === 'Description' && (
              <UploadForm uploadType="Description" />
            )}
          </Item>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <Typography variant="h6" className="label" gutterBottom>
            {listLabel}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Item className="listBox" sx={{ border: 'none' }}>
            {formLabel === 'Resume' && <ResumesList />}
            {formLabel === 'Cover Letter' && <CoverLettersList />}
            {formLabel === 'Description' && <JobDescriptionsList />}
          </Item>
        </Grid>
        {(focusedDocument && (formLabel === 'Resume' || formLabel === 'Cover Letter' || formLabel === 'Description' ))  && (
          <>
            <Grid item xs={12} sm={12} md={12} ref={sectionRef}>
              <Typography variant="h6" className="label" gutterBottom>
                {formLabel} Preview
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Item className="listBox" sx={{ border: 'none' }}>
                {(formLabel === 'Resume' || 'cover letter' || 'description') && (
                  <DocumentPreview
                    presignedUrl={focusedDocument.presignedUrl!}
                    title={focusedDocument.name}
                  />
                )}
              </Item>
            </Grid>
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default IManageGrid;
