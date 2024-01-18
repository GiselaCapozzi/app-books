// FormBook.jsx
// Componente de formulario que se utiliza para agregar o editar 
// información sobre libros en una biblioteca

import { useLocation } from 'react-router-dom';
import useFormBook from '../hooks/useFormBook';
import BookDetailsForm from "../components/BookDetailsForm";
import BookFormActions from "../components/BookFormActions";
import BookError from '../components/BookError';

const FormBook = () => {

const location = useLocation();
const isEditing = location.state?.isEditing || false;
const {
    bookData,
    handleChange,
    handleSubmit,
    error
  } = useFormBook(
    {
    titulo: isEditing ? location.state.dataBook.titulo : '',
    autor: isEditing ? location.state.dataBook.autor : '',
    isbn: isEditing ? location.state.dataBook.isbn : '',
    publicacion_year: isEditing ? location.state.dataBook.publicacion_year : 0,
    editorial: isEditing ? location.state.dataBook.editorial : '',
    paginas: isEditing ? location.state.dataBook.paginas : 0,
    portada: isEditing ? location.state.dataBook.portada : '',
    sinopsis: isEditing ? location.state.dataBook.sinopsis : '',
    id: isEditing ? location.state.dataBook.id : null
  }, isEditing);

const formHeading = isEditing 
  ? `Editar ${location.state.dataBook.titulo} de la biblioteca`
  : 'Agregar libro a la biblioteca';

  if (isEditing && !location.state || isEditing && !location.state.dataBook) {
    // Esto ocurre en el caso en donde location.state.book no este definido
    return <BookError children='Error: el formulario no está disponible.'/>
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <p className="text-xl text-center font-bold my-7">{formHeading}</p>
      <div className="grid grid-cols-2 gap-4 ">
        <BookDetailsForm 
          bookData={bookData}
          handleChange={handleChange}
          error={error}
        />
      </div>
      <BookFormActions 
          isEditing={isEditing}
        />
    </form>
  )
}

export default FormBook