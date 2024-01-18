// BookDetails.jsx
// Muestra ciertos detalles sobre el libro

const BookDetails = ({ titulo, autor, sinopsis }) => {
  return (
    <div className="mx-2 h-56">
      <h2 className='text-xl font-bold'>{titulo}</h2>
      <p className='text-sm text-gray-700 mb-4 mt-0'>{autor}</p>
      <p className='text-gray-600'>{sinopsis.slice(0, 50)}...</p>
    </div>
  )
}

export default BookDetails