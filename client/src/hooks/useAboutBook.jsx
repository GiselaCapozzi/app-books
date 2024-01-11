import { useLocation, useNavigate } from 'react-router-dom';
import { deleteBook, fetchBooks } from '../slice/books/bookSlice';
import useAlerta from './useAlerta';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useAuth } from '../context/authContext';
import useLibrary from './useLibrary';

const useAboutBook = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { alertaPregunta } = useAlerta();
  const dispatch = useDispatch();
const { token } = useAuth();

  const {
    titulo,
    autor,
    isbn,
    editorial,
    portada,
    sinopsis,
    paginas,
    publicacion_year,
    id
  } = location.state.book;

  const onEdit = () => {
    navigate('/form_book', {
      state: {
        dataBook: {
          titulo,
          autor,
          isbn,
          editorial,
          portada,
          sinopsis,
          paginas,
          publicacion_year,
          id
        },
        isEditing: true
      }
    })
  }

  const onDelete = async (token, id) => {
    try {
      await alertaPregunta(`¿Quieres borrar ${titulo} de la biblioteca?`, 'warning', 'Si, borralo', 'No, conservarlo', async () => {
        // Dispatch the deleteBook action
        await dispatch(deleteBook({ token, id }));
  
        // Dispatch the fetchBooks action to get the updated list
        await dispatch(fetchBooks(token));
  
        // Navigate after both actions are completed
        navigate('/library');
      });
    } catch (error) {
      console.error("Error deleting book:", error);
      // Handle errors here if needed
    }
  };

  return {
    onEdit,
    onDelete,
    location
  }
}

export default useAboutBook