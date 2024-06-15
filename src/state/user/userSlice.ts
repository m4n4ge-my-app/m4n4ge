import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  photoString: string;
  googleId: string;
}

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
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
  },
});

export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
