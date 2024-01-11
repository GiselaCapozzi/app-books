import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { authSlice } from '../slice/auth/authSlice';
import booksReducer from '../slice/books/bookSlice';
import { thunk } from 'redux-thunk';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    books: booksReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})