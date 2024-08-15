import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './navigation/sidebarSlice';
import userReducer from './user/userSlice';
import feedbackReducer from './feeback/feedbackSlice';
import applicationReducer from './application/applicationSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    sidebar: sidebarReducer,
    feedback: feedbackReducer,
    applications: applicationReducer,
  },
});

// this will help us see the shape of the store and also type the state retuturned by useselctor hook.
export type RootState = ReturnType<typeof store.getState>;
// similarly, this will help us type the dispatch function returned by useDispatch hook.
export type AppDispatch = typeof store.dispatch;
