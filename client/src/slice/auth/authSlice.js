import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  token: null,
  user: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.user = action.payload.user;
      state.token = action.payload.token;
      sessionStorage.setItem('user', JSON.stringify(action.payload));
    },
    clearToken: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
    }
  }
})

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;