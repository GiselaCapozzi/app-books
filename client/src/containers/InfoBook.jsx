// InfoBook.jsx
// Este componente sirve como parte de un sistema de visualizaciones 
// de información de un libro, utilizando ganchos personalizados y otros
// componentes para representar detalles como la imagen de la portada del
// libro y varias características del libro

import BookFeatures from '../components/BookFeatures';
import useInfoBook from '../hooks/useInfoBook';

const InfoBook = () => {

  const {
    titulo,
    autor,
    editorial,
    isbn,
    paginas,
    portada,
    publicacion_year,
    sinopsis,
    readStatus,
    isFavorite,
    handleStatusChange,
    toggleFavorite
  } = useInfoBook();

  return (
    <div className="my-7 max-x-md mx-auto md:max-w-2xl">
      <div className="flex items-center justify-center">
        {/* <BookImage
          className='max-w-52'
          titulo={titulo}
          portada={portada}
        /> */}
      </div>
      <BookFeatures
        titulo={titulo}
        sinopsis={sinopsis}
        autor={autor}
        paginas={paginas}
        isbn={isbn}
        publicacion_year={publicacion_year}
        editorial={editorial}
        portada={portada}
        readStatus={readStatus}
        handleStatusChange={handleStatusChange}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
      />
    </div>
  )
}

export default InfoBook