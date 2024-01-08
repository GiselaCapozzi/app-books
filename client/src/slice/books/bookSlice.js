import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_ENDPOINTS } from "../../api";

const initialState = {
  books: [],
  status: 'idle',
  error: null
}

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (token) => {
  const response = await fetch(`${API_ENDPOINTS.BOOKS}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  });

  if (!response.ok) {
    throw new Error('Error al obtener libros')
  }
  const data = await response.json();
  return data;
})

export const createBook = createAsyncThunk('books/createBook', async ({token, bookData}) => {
    const response = await fetch(`${API_ENDPOINTS.BOOKS}`, {
    method: 'POST',
    body: JSON.stringify(bookData),
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  })
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
      .addCase(createBook.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books.push(action.payload);
      })
  }
})

export default booksSlice.reducer;