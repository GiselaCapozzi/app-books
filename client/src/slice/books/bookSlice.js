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

export const createBook = createAsyncThunk('books/createBook', async ({ token, bookData }) => {
  try {
    const response = await fetch(`${API_ENDPOINTS.BOOKS}`, {
      method: 'POST',
      body: JSON.stringify(bookData),
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    })
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error)
  }
})

export const updateBook = createAsyncThunk('books/updateBook', async ({ token, bookData, id }) => {
  try {
    const response = await fetch(`${API_ENDPOINTS.BOOKS}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      },
      body: JSON.stringify(bookData)
    })

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error)
  }
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
        console.log(action.error)
      })
      .addCase(createBook.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books.push(action.payload);
      })
      .addCase(updateBook.fulfilled, (state, action) => {
        state.status= 'succeeded';
        const index = state.books.findIndex(book => book.id === action.payload.id);
        if (index !== -1) {
          state.books[index] = action.payload;
        }
      })
  }
})

export default booksSlice.reducer;