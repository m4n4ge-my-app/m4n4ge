import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import TemplateSelector from './templates/TemplateSelector';
import { Button, Grid, TextField } from '@mui/material';
import { blankResumeTemplate } from './templates/blankResumeTemplate';
import { resumeTemplateA } from './templates/resumeTemplateA';
import { resumeTemplateB } from './templates/resumeTemplateB';
import { resumeTemplateC } from './templates/resumeTemplateC';

const templateMapping: { [key: string]: string } = {
    'Blank Page': blankResumeTemplate,
    'Template 1': resumeTemplateA,
    'Template 2': resumeTemplateB,
    'Template 3': resumeTemplateC,
  };

const TextEditor = () => {
  const [value, setValue] = useState('');

  const handleTemplateSelect = (selectedOption: string) => {
    setValue(templateMapping[selectedOption]);
  };

  return (
    <Grid container spacing={2} style={{ width: '100%', paddingTop: '20px' }}>
      <Grid item xs={12} container justifyContent="space-between">
        <TextField
          id="resume-name"
          variant="outlined"
          label="Name"
          size="small"
        />
        <TemplateSelector onSelect={handleTemplateSelect} />
      </Grid>
      <Grid item xs={12}>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          style={{ width: '100%', height: '1000px' }}
        />
      </Grid>
      <Grid item xs={12} container justifyContent="flex-end" spacing={2}>
        <Grid item>
          <Button variant="outlined" color="primary" size="small">
            Cancel
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="primary" size="small">
            Save as Draft
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" size="small">
            Create
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TextEditor;
