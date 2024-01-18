// BookFeatures.jsx
// 

import BookInfo from './BookInfo';
import ReadingStatus from '../containers/ReadingStatus';
import BookButtons from '../containers/BookButtons';

const BookFeatures = ({
  titulo,
  sinopsis,
  autor,
  paginas,
  isbn,
  publicacion_year,
  editorial,
  portada,
  readStatus,
  handleStatusChange,
  isFavorite,
  toggleFavorite
}) => {

  return (
    <div className="p-4">
      <BookInfo
        titulo={titulo}
        sinopsis={sinopsis}
        autor={autor}
        paginas={paginas}
        isbn={isbn}
        publicacion_year={publicacion_year}
        editorial={editorial}
        portada={portada}
      />
      <ReadingStatus
        readStatus={readStatus}
        handleStatusChange={handleStatusChange}
        paginas={paginas}
      />
      <BookButtons 
        readStatus={readStatus}
        handleStatusChange={handleStatusChange}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
      />
    </div>
  )
}

export default BookFeatures