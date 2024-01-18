import { useLocation, useNavigate } from 'react-router-dom';
import { deleteBook, fetchBooks } from '../slice/books/bookSlice';
import useAlerta from './useAlerta';
import useCustomDispatch from './useCustomDispatch';

const useAboutBook = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { alertaPregunta } = useAlerta();
  const { customDispatch } = useCustomDispatch();

  // Deestructurar los detalles del libro directamente desde location.state.book
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

  // Función para navegar al formulario de edición del libro
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

  // Función para borrar un libro
  // Muestra una alerta de confirmación antes de borrar, si la respuesta es positiva prosigue a enviar la acción deleteBook y luego envía la acción fetchBooks para obtener la lista actualizada y finalmente navega a la biblioteca luego de completar ambas acciones
  const onDelete = async (token, id) => {
    try {
      await alertaPregunta(`¿Quieres borrar ${titulo} de la biblioteca?`, 'warning', 'Si, borrar', 'No, conservar', async () => {
        await customDispatch(deleteBook({ token, id }));
        await customDispatch(fetchBooks(token));
        navigate('/library');
      });
    } catch (error) {
      console.error("Error deleting book:", error);
      throw new Error('Error al borrar un libro');
    }
  };

  return {
    onEdit,
    onDelete,
    location
  }
}

export default useAboutBook