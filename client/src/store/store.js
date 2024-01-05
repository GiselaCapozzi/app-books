import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from '../slice/auth/authSlice';
import booksReducer from '../slice/books/bookSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    books: booksReducer
  }
})