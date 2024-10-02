import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import TemplateSelector from './templates/TemplateSelector';
import {
  Autocomplete,
  Button,
  Chip,
  Grid,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { blankResumeTemplate } from './templates/resume/blankResumeTemplate.js';
import { resumeTemplateA } from './templates/resume/resumeTemplateA.js';
import { resumeTemplateB } from './templates/resume/resumeTemplateB.js';
import { resumeTemplateC } from './templates/resume/resumeTemplateC.js';
import { blanckCoverLetterTemplate } from './templates/coverLetter/blankCoverLetterTemplate.js';
import { coverLetterTemplateA } from './templates/coverLetter/coverLetterTemplateA.js';
import { coverLetterTemplateB } from './templates/coverLetter/coverLetterTemplateB.js';
import { coverLetterTemplateC } from './templates/coverLetter/coverLetterTemplateC.js';
import EditorToolbar, {
  modules,
  formats,
} from './quillToolbar/EditorToolbar.js';

const resumeTemplateMapping: { [key: string]: string } = {
  'Blank Page': blankResumeTemplate,
  'Template 1': resumeTemplateA,
  'Template 2': resumeTemplateB,
  'Template 3': resumeTemplateC,
};

const coverLetterTemplateMapping: { [key: string]: string } = {
  'Blank Page': blanckCoverLetterTemplate,
  'Template 1': coverLetterTemplateA,
  'Template 2': coverLetterTemplateB,
  'Template 3': coverLetterTemplateC,
};

interface TextEditorProps {
  uploadType: string;
}

const TextEditor = ({ uploadType }: TextEditorProps) => {
  const [value, setValue] = useState(uploadType === 'Resume' ? resumeTemplateMapping['Blank Page']: coverLetterTemplateMapping['Blank Page']);
  const [resumeName, setResumeName] = useState('');
  const [selectedApplication, setSelectedApplication] = useState<string[]>([]);
  const applicationOptions = [
    'All Applications',
    'Application 1',
    'Application 2',
    'Application 3',
  ];
  const [tags, setTags] = useState<string[]>([]);
  const [fileType, setFileType] = useState<string>('pdf');
  const [isCancelled, setIsCancelled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setResumeName(event.target.value);
  };
  
  const handleTemplateSelect = (selectedOption: string) => {
    if(uploadType === 'Resume') {
      setValue(resumeTemplateMapping[selectedOption]);
    } else {
      setValue(coverLetterTemplateMapping[selectedOption]);
    }
    
  };

  const handleTagsChange = (_event: any, newValue: string[]) => {
    setTags(newValue);
  };

  const handleFileTypeChange = (_event: any, newFileType: string) => {
    setFileType(newFileType);
  }

  const handleCancelClick = () => {
    setIsCancelled(true);
    setResumeName('');
    if(uploadType === 'Resume') {
    setValue(resumeTemplateMapping['Blank Page']);
    } else {
      setValue(coverLetterTemplateMapping['Blank Page']);
    }
    setSelectedApplication([]);
    setFileType('pdf');
    setTags([]);
  };

  return (
    <Grid container style={{ width: '100%', paddingTop: '20px' }}>
      <Grid item xs={12} container justifyContent="space-between" sx={{marginBottom: '10px'}}>
        <TextField
          id="resume-name"
          variant="outlined"
          label="Name"
          size="small"
          value={resumeName}
          onChange={handleInputChange}
          sx={{marginBottom: isMobile? '10px' : '0px'}}
        />
        <TemplateSelector
          isCancelled={isCancelled}
          onSelect={handleTemplateSelect}
        />
      </Grid>
      <Grid item xs={12} sx={{marginBottom: '10px'}}>
        <div className="text-editor">
          <EditorToolbar />
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            placeholder={uploadType === 'Resume' ? 'Start crafting your resume here...' : 'Start crafting your cover letter here...'}
            modules={modules}
            formats={formats}
            style={{ width: '100%', height: '1000px' }}
          />
        </div>
      </Grid>
      <Grid item container xs={12}>
        <Grid item xs={12} sm={6}>
          <Autocomplete
            multiple
            fullWidth
            options={applicationOptions}
            getOptionLabel={(option) => option.toString()}
            value={selectedApplication}
            onChange={(_event, newValue) => {
              if (newValue.includes('All Applications')) {
                setSelectedApplication(['All Applications']);
              } else {
                setSelectedApplication(newValue);
              }
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                label="Applications"
                placeholder="Optional: select applications"
                variant="outlined"
                size="small"
              />
            )}
            sx={{ marginBottom: '10px' }}
          />
          <Autocomplete
            fullWidth
            multiple
            freeSolo
            options={[]}
            value={tags}
            onChange={handleTagsChange}
            renderTags={(value: string[], getTagProps) =>
              value.map((option: string, index: number) => (
                <Chip
                  variant="outlined"
                  label={option}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Tags"
                placeholder="Optional: add a tag"
                size="small"
              />
            )}
            sx={{ marginBottom: '10px' }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          container
          justifyContent="flex-end"
          alignContent="flex-start"
        >
          <Typography sx={{ marginRight: isMobile? '5px' : '10px', marginBottom: isMobile? '5px' : '0px' }} variant='body2'>
            Choose file type
          </Typography>
          <ToggleButtonGroup
            color="primary"
            value={fileType}
            exclusive
            onChange={handleFileTypeChange}
            aria-label="Platform"
            sx={{ alignSelf: 'center' }}
          >
            <ToggleButton value="pdf" size="small">
              .pdf
            </ToggleButton>
            <ToggleButton value="doc" size="small">
              .doc
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        container
        justifyContent="flex-end"
        spacing={2}
        sx={{ marginTop: '30px' }}
      >
        <Grid item>
          <Button variant="outlined" color="primary" size="small" onClick={handleCancelClick}>
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
