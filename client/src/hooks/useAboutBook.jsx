import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const useAboutBook = () => {

  const navigate = useNavigate();
  const location = useLocation();

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

  const onDelete = () => {

  }

  return {
    onEdit,
    onDelete,
    location
  }
}

export default useAboutBook