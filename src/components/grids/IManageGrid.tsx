import { Grid, Typography } from '@mui/material';
import ResumesForm from '../form/forms/ResumesForm';
import { Item } from './utils/MuiItem';

interface Props {
  formLabel: string;
  listLabel: string;
}

const IManageGrid = ({ formLabel, listLabel }: Props) => {
  return (
    <Grid container spacing={0} sx={{ padding: '25px', marginTop: '100px' }}>
      <Grid container item spacing={2.5} className="">
        <Grid item xs={12} sm={12} md={12}>
          <Typography variant="h6" className="label" gutterBottom>
            {formLabel}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Item className="addBox" sx={{ border: 'none' }}>
            <ResumesForm />
          </Item>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <Typography variant="h6" className="label" gutterBottom>
            {listLabel}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Item className="listBox" sx={{ border: 'none' }}>
            This section should display two lists: one for draft/incomplete resumes and another for complete resumes, each showing their corresponding applications.
            Additionally, consider using FlatIcon icons to represent different file types, as MUI does not have a built-in icon for .doc file types.
          </Item>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default IManageGrid;
