import useFormBook from "../hooks/useFormBook"
import BookDetailsForm from "./BookDetailsForm";
import BookFormActions from "./BookFormActions";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom"

const FormBook = () => {

const location = useLocation();
const isEditing = location.state && location.state.isEditing;
const navigate = useNavigate();

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

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      {
        isEditing 
        ? <p className="text-xl text-center font-bold my-7">Editar {location.state.dataBook.titulo} de la biblioteca</p> 
        : <p className="text-xl text-center font-bold my-7">Agregar libro a la biblioteca</p>
      }
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