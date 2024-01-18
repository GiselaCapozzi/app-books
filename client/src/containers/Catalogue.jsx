// Catalogue.jsx
// Representa la interfaz de un catalogo de libros, utiliza el hook
// para obtener los datos del catálogo

import useCatalogue from "../hooks/useCatalogue"
import BookCatalogue from "../components/BookCatalogue"

const Catalogue = () => {

  const { mixedBooks, user, goAboutBook } = useCatalogue();

  return (
    <div className='m-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {
        mixedBooks?.map((book, index) => (
          <BookCatalogue
            key={index}
            nickname={user && user.username}
            {...book}
            goAboutBook={() => goAboutBook(book)}
            book={book}
          />
        ))
      }
    </div>
  )
}

export default Catalogue