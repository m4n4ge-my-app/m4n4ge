import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import sidebarReducer from './navigation/sidebarSlice';
import userReducer from './user/userSlice';
import feedbackReducer from './feedback/feedbackSlice';
import applicationReducer from './application/applicationSlice';
import documentReducer from './document/documentSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    sidebar: sidebarReducer,
    feedback: feedbackReducer,
    applications: applicationReducer,
    documents: documentReducer,
  },
});

// this will help us see the shape of the store and also type the state returned by useSelector hook.
export type RootState = ReturnType<typeof store.getState>;
// similarly, this will help us type the dispatch function returned by useDispatch hook.
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
