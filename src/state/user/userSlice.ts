import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  firstName?: string;
  lastName?: string;
  userName?: string;
  email: string;
  photoString?: string;
  googleId?: string;
  token: string;
}

interface UserState {
  user: User | null;
  loading: boolean;
}

const initialState: UserState = {
  user: null,
  loading: true,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    resetUser(state) {
      state.user = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setUser, resetUser, setLoading } = userSlice.actions;

export default userSlice.reducer;
