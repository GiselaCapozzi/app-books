import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_ENDPOINTS } from '../../api';

const initialState = {
  booksUsers: [],
  status: 'idle',
  error: null
};

export const getAllBooksUsers = createAsyncThunk('books/getAllBooks', async () => {
  try {
    const response = await fetch(`https://app-books-beta.vercel.app/books/books_user`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error('Error al obtener los libros de los usuarios');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
})

export const booksUsersSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBooksUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllBooksUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.booksUsers = action.payload;
      })
      .addCase(getAllBooksUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  }
});

export default booksUsersSlice.reducer;