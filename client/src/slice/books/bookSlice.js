import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_ENDPOINTS } from "../../api";

const initialState = {
  books: [],
  status: 'idle',
  error: null
}

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (token) => {
try {
  const response = await fetch(`${API_ENDPOINTS.BOOKS}` || `https://app-books-beta.vercel.app/books`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  });

  if (!response.ok) {
    throw new Error('Error al obtener libros')
  }
  const data = await response.json();

if (!Array.isArray(data)) {
  throw new Error('Respuesta no válida')
}

  return data;
} catch (error) {
  console.log(error);
  throw error
}
})

export const createBook = createAsyncThunk('books/createBook', async ({ token, bookData }) => {
  try {
    const response = await fetch(`${API_ENDPOINTS.BOOKS}` || `https://app-books-beta.vercel.app/books`, {
      method: 'POST',
      body: JSON.stringify(bookData),
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    })
    const data = await response.json();
    return data || [];
  } catch (error) {
    console.log(error)
  }
})

export const updateBook = createAsyncThunk('books/updateBook', async ({ token, bookData, id }) => {
  try {
    const response = await fetch(`${API_ENDPOINTS.BOOKS}/${id}` || `https://app-books-beta.vercel.app/books/${id}`, {
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

export const deleteBook = createAsyncThunk('books/deleteBook', async ({ token, id }) => {
    try {
    const response = await fetch(`${API_ENDPOINTS.BOOKS}/${id}` || `https://app-books-beta.vercel.app/books/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: token
      }
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
        state.books = action.payload || [];
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
        state.books = state.books.map(book => book.id === action.payload.id ? action.payload : book);
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = state.books.filter(book => book.id !== action.payload);

      })
  }
})

export default booksSlice.reducer;