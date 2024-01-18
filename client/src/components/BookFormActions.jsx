// BookFormActions.jsx
// Renderiza dos botones, uno dependiendo si se esta creando un nuevo
// libro o si se esta editando cambia su texto y el otro es para volver
// atras sin realizar cambios

import { useNavigate } from "react-router-dom";
import Button from './Button';

const BookFormActions = ({ isEditing }) => {

  const navigate = useNavigate();

  return (
    <div className="mb-4 flex items-center justify-center w-full">
      <Button 
        children={isEditing ? 'Guardar libro editado' : 'Guardar nuevo libro'}
        className='bg-blue-500 text-white px-4 py-2 rounded-md mx-2'
        type='submit'
      />
      <Button 
        children='Salir'
        onClick={() => navigate('/library')}
        className='bg-green-500 text-white px-4 py-2 rounded-md mx-2'
      />
    </div>
  )
}

export default BookFormActions