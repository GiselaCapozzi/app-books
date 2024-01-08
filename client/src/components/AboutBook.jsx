import { useLocation } from 'react-router-dom';

const AboutBook = ({ onEdit, onDelete }) => {

  const location = useLocation();

  const {
    titulo,
    autor,
    isbn,
    editorial,
    portada,
    sinopsis,
    paginas,
    publicacion_year
  } = location.state.book;

  return (
    <div className='centrar flex-col bg-white p-4 mb-4 shadow-md rounded-md'>
      <img
        src={portada ? portada : 'https://www.cucea.udg.mx/sites/default/files/styles/publicaciones/public/publicaciones/portadas/sin_portada_8.jpg?itok=yR2MLoZs'}
        alt={titulo}
        className='mb-4 rounded-md'
      />
      <div className='centrar flex-col'>
        <h2 className="text-3xl text-center font-semibold m-5">{titulo.toUpperCase()}</h2>
        <div className='flex flex-wrap max-w-4xl justify-center items-center my-4 bg-gray-200 rounded-lg border-2 border-gray-400'>
          <p className="text-gray-600 flex flex-row text-center mx-4"><span className='font-bold mr-2'>Autor:</span>{`${autor}`}</p>
          <p className="text-gray-600 flex flex-row text-center mx-4"><span className='font-bold mr-2'>ISBN: </span>{`${isbn}`}</p>
          <p className="text-gray-600 flex flex-row text-center mx-4"><span className='font-bold mr-2'>Año de Publicación: </span>{`${publicacion_year}`}</p>
          <p className="text-gray-600 flex flex-row text-center mx-4"><span className='font-bold mr-2'>Editorial: </span>{`${editorial}`}</p>
          <p className="text-gray-600 flex flex-row text-center mx-4"><span className='font-bold mr-2'>Páginas: </span>{`${paginas}`}</p>
        </div>
        <div>
          <p className="text-gray-700"><span className='font-bold block text-center text-2xl'>Sinopsis</span>{sinopsis}</p>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <button className="mr-2 bg-blue-500 text-white px-4 py-2 rounded-md" onClick={onEdit}>
          Editar
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={onDelete}>
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default AboutBook