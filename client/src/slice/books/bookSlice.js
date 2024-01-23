import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  status: 'idle',
  error: null
}

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (token) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
    };

    if (token) {
      headers.Authorization = token;
    }

    const response = await fetch(`https://app-books-beta.vercel.app/books`, {
      headers,
    });

    if (!response.ok) {
      throw new Error('Error al obtener libros');
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error('Respuesta no válida');
    }

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

export const createBook = createAsyncThunk('books/createBook', async ({ token, bookData }, { rejectWithValue }) => {
  try {
    const response = await fetch(`https://app-books-beta.vercel.app/books`, {
      method: 'POST',
      body: JSON.stringify(bookData),
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    });

    if (!response.ok) {
      // Handle non-successful response status (e.g., 4xx, 5xx)
      const errorData = await response.json();
      return rejectWithValue(errorData);
    }

    const data = await response.json();
    return data || [];
  } catch (error) {
    // Handle other errors (e.g., network issues)
    console.error(error);
    return rejectWithValue({ message: 'An error occurred during the request.' });
  }
});

export const updateBook = createAsyncThunk('books/updateBook', async ({ token, bookData, id }) => {
  try {
    const response = await fetch(`https://app-books-beta.vercel.app/books/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      },
      body: JSON.stringify(bookData)
    });

    if (!response.ok) {
      // Si la respuesta no es exitosa, lanzar una excepción con el código de estado.
      throw new Error(`Error al actualizar el libro. Código de estado: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error en la función updateBook:', error);
    // Puedes lanzar el error nuevamente si quieres que se maneje en el código que llama a esta función.
    // throw error;
    // O devolver un objeto de error personalizado.
    return { error: error.message || 'Error desconocido al actualizar el libro.' };
  }
});

export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async ({ token, id }, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://app-books-beta.vercel.app/books/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: token
        }
      });

      if (!response.ok) {
        // Si la respuesta no es exitosa, lanzamos un error con el código de estado
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al eliminar el libro');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      // Manejamos el error utilizando rejectWithValue para que Redux Toolkit lo maneje correctamente
      return rejectWithValue(error.message || 'Error al eliminar el libro');
    }
  }
);

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
      })
      .addCase(createBook.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createBook.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books.push(action.payload);
      })
      .add(createBook.reject, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ? action.payload : 'An error occurred';
      })
      .addCase(updateBook.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateBook.fulfilled, (state, action) => {
        state.status= 'succeeded';
        state.books = state.books.map(book => book.id === action.payload.id ? action.payload : book);
      })
      .addCase(updateBook.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteBook.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = state.books.filter(book => book.id !== action.payload);
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  }
})

export default booksSlice.reducer;