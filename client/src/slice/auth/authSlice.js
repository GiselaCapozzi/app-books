import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      sessionStorage.setItem('token', action.payload)
    },
    clearToken: (state) => {
      state.token = null;
      sessionStorage.removeItem('token')
    }
  }
})

export const { setToken, clearToken } = authSlice.actions;