import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface FeedbackState {
  open: boolean;
  message: string;
  severity: 'error' | 'warning' | 'info' | 'success';
}

// Define the initial state using that type
const initialState: FeedbackState = {
  open: false,
  message: '',
  severity: 'info',
};

export const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
    // Action to show the toast with a message and severity
    show: (
      state,
      action: PayloadAction<{
        message: string;
        severity: FeedbackState['severity'];
      }>
    ) => {
      state.open = true;
      state.message = action.payload.message;
      state.severity = action.payload.severity;
    },
    // Action to hide the toast
    hide: (state) => {
      state.open = false;
    },
  },
});

// Export actions
export const { show, hide } = feedbackSlice.actions;

// Export reducer
export default feedbackSlice.reducer;
