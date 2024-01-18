// BookActions.jsx
// Renderiza dos botones uno para editar y otro para eliminar el libro

const BookActions = ({ onEdit, onDelete, token, id }) => {
  return (
    <div className='mt-4 flex justify-end'>
      <button
        className='mr-2 bg-blue-500 text-white px-4 py-2 rounded-md'
        onClick={onEdit}
      >
        Editar
      </button>
      <button
        className='bg-red-500 text-white px-4 py-2 rounded-md'
        onClick={() => onDelete(token, id)}
      >
        Eliminar
      </button>
    </div>
  )
}

export default BookActions