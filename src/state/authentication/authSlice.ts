import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
  isLoading: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
    setAuthState(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
      state.isLoading = false;
    },
  },
});

export const { login, logout, setAuthState } = authSlice.actions;

export default authSlice.reducer;
