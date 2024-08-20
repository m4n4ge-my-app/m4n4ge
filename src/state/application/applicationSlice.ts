import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Application } from '../../utils/mockDataGenerator';

interface ApplicationState {
  applications: Application[] | [];
  focusedApplication: Application | null;
}

const initialState: ApplicationState = {
  applications: [],
  focusedApplication: null,
};

const applicationSlice = createSlice({
  name: 'applications',
  initialState,
  reducers: {
    setApplications(state, action: PayloadAction<Application[]>) {
      state.applications = action.payload;
    },
    setFocusedApplication(state, action: PayloadAction<Application | null>) {
      state.focusedApplication = action.payload;
    },
  },
});

export const { setApplications, setFocusedApplication } =
  applicationSlice.actions;

export default applicationSlice.reducer;
