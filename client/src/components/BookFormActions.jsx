import { useNavigate } from "react-router-dom"

const BookFormActions = ({ isEditing }) => {

  const navigate = useNavigate();

  return (
    <div className="mb-4 flex items-center justify-center w-full">
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md mx-2"
      >
        {
          isEditing ? 'Guardar libro editado' : 'Guardar nuevo libro'
        }
      </button>
      <button
        type="reset"
        onClick={() => navigate('/library')}
        className="bg-green-500 text-white px-4 py-2 rounded-md mx-2"
      >
        Salir
      </button>
    </div>
  )
}

export default BookFormActions