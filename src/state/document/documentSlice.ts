import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllDocuments } from '../../services/documents';
import { AppThunk } from '../store';

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

interface DocumentState {
  documents: Document[];
  loading: boolean;
  error: string | null;
}

const initialState: DocumentState = {
  documents: [],
  loading: false,
  error: null,
};

const documentSlice = createSlice({
  name: 'documents',
  initialState,
  reducers: {
    fetchDocumentsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDocumentsSuccess(state, action: PayloadAction<Document[]>) {
      state.documents = action.payload;
      state.loading = false;
    },
    fetchDocumentsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchDocumentsStart,
  fetchDocumentsSuccess,
  fetchDocumentsFailure,
} = documentSlice.actions;

export const fetchDocuments = (): AppThunk => async (dispatch, getState) => {
  const token = getState().user.user?.token;
  if (!token) return;

  dispatch(fetchDocumentsStart());
  try {
    const data = await getAllDocuments(token);
    dispatch(fetchDocumentsSuccess(data));
  } catch (error) {
    if (error instanceof Error) {
      dispatch(fetchDocumentsFailure(error.message));
    } else {
      dispatch(fetchDocumentsFailure('An unknown error occurred'));
    }
  }
};

export default documentSlice.reducer;