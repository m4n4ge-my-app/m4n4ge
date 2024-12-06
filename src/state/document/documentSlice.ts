import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Document {
  name: string;
  s3Url: string;
  s3key: string;
  userId: string;
  type: string;
  size: number;
  fileType: string;
  applications: string[];
  tags: string[];
  uploadedAt: string;
}

//Note: Document below is super set array of resumes, cover letters and job descriptions mixed together.
interface DocumentState {
  documents: Document[] | [];
  resumes: Document[] | [];
  coverLetters: Document[] | [];
  jobDescriptions: Document[] | [];
}

const initialState: DocumentState = {
  documents: [],
  resumes: [],
  coverLetters: [],
  jobDescriptions: [],
};

const documentSlice = createSlice({
  name: 'documents',
  initialState,
  reducers: {
    setDocuments(state, action: PayloadAction<Document[]>) {
      state.documents = action.payload;
    },
    setResumes(state, action: PayloadAction<Document[]>) {
      state.resumes = action.payload;
    },
    setCoverLetters(state, action: PayloadAction<Document[]>) {
      state.coverLetters = action.payload;
    },
    setJobDescriptions(state, action: PayloadAction<Document[]>) {
      state.jobDescriptions = action.payload;
    },
  },
});

export const { setDocuments, setResumes, setCoverLetters, setJobDescriptions } = documentSlice.actions;

export default documentSlice.reducer;
