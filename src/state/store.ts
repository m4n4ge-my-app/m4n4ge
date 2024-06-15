import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './navigation/sidebarSlice';
import authReducer from './authentication/authSlice';
import userReducer from './user/userSlice';

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    auth: authReducer,
    user: userReducer,
  },
});

// this will help us see the shape of the store and also type the state retuturned by useselctor hook.
export type RootState = ReturnType<typeof store.getState>;
// similarly, this will help us type the dispatch function returned by useDispatch hook.
export type AppDispatch = typeof store.dispatch;
