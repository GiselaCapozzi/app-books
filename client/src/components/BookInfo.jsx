// BookInfo.jsx
// Refleja cada información del libro

const BookInfo = ({ 
  portada,
  titulo,
  autor,
  isbn,
  publicacion_year,
  editorial,
  paginas,
  sinopsis
 }) => {
  return (
    <div className='centrar flex-col'>
    <img
      src={portada || 'https://www.cucea.udg.mx/sites/default/files/styles/publicaciones/public/publicaciones/portadas/sin_portada_8.jpg?itok=yR2MLoZs'}
      alt={titulo}
      className='mb-4 rounded-md max-h-96'
    />
    <h2 className='text-3xl text-center font-semibold m-5'>{titulo.toUpperCase()}</h2>
    <div className='flex flex-wrap max-w-4xl justify-center items-center my-4 bg-gray-200 rounded-lg border-2 border-gray-400'>
      <p className='text-gray-600 flex flex-row text-center mx-4'><span className='font-bold mr-2'>Autor:</span>{`${autor}`}</p>
      <p className='text-gray-600 flex flex-row text-center mx-4'><span className='font-bold mr-2'>ISBN: </span>{`${isbn}`}</p>
      <p className='text-gray-600 flex flex-row text-center mx-4'><span className='font-bold mr-2'>Año de Publicación: </span>{`${publicacion_year}`}</p>
      <p className='text-gray-600 flex flex-row text-center mx-4'><span className='font-bold mr-2'>Editorial: </span>{`${editorial}`}</p>
      <p className='text-gray-600 flex flex-row text-center mx-4'><span className='font-bold mr-2'>Páginas: </span>{`${paginas}`}</p>
    </div>
    <div>
      <p className='text-gray-700'>{sinopsis}</p>
    </div>
  </div>
  )
}

export default BookInfo