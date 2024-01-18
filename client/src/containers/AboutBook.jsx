// AboutBook.jsx
// Mustra la información general del libro especifico, además de tener
// dos botones con la opción de editar o eliminar el mismo

import useAboutBook from '../hooks/useAboutBook';
import { useAuth } from '../context/AuthContext';
import BookInfo from '../components/BookInfo';
import BookError from '../components/BookError';
import BookActions from '../components/BookActions';

const AboutBook = () => {

  const {
    onEdit,
    onDelete,
    location
  } = useAboutBook();
  const { token } = useAuth();

  // Chequea si location.state.book is definido antes de desestructurar
  if (!location.state || !location.state.book) {
    // Esto ocurre en el caso en donde location.state.book no este definido
    return <BookError children='Error: la información del libro no está disponible.'/>
  }

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

  return (
    <div className='centrar flex-col bg-white p-4 mb-4 shadow-md rounded-md'>
      <BookInfo 
        portada={portada}
        titulo={titulo}
        autor={autor}
        isbn={isbn}
        publicacion_year={publicacion_year}
        editorial={editorial}
        paginas={paginas}
        sinopsis={sinopsis}
      />
      <BookActions 
        onEdit={onEdit}
        onDelete={onDelete}
        token={token}
        id={id}
      />
    </div>
  )
}

export default AboutBook