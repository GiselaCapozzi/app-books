import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { authSlice } from '../slice/auth/authSlice';
import booksReducer from '../slice/books/bookSlice';
import booksUsersReducer from '../slice/booksAllUser/booksUsersSlice';
import { thunk } from 'redux-thunk';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    books: booksReducer,
    booksUsers: booksUsersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})