import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_ENDPOINTS } from "../../api";

const initialState = {
  books: [],
  status: 'idle',
  error: null
}

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (token) => {

  const response = await fetch('http://localhost:4000/books', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  });

if (!response.ok) {
  throw new Error('Error al obtener libros')
}

  const data = await response.json();
  console.log(data)
  return data;
})

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  }
})

export default booksSlice.reducer;