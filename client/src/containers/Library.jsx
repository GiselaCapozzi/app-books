// Library.jsx
// Destinado a mostrar una lista de libros, permite agregar nuevos libros
// y ajusta lapresentación según el tamaño de la pantalla

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BookTable from './BookTable';
import BookCard from './BookCard';
import useLibrary from '../hooks/useLibrary';
import { fetchBooks } from '../slice/books/bookSlice';
import Button from '../components/Button';

const Library = () => {

  const {
    status,
    error,
    token,
    books,
    goToCreateNewBook,
  } = useLibrary();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks(token))
  }, [dispatch])

  if (status === 'loading') {
    return <div>Cargando ...</div>
  }

  if (status === 'failed' && error != 'Unexpected end of JSON input') {
    return <div>Error...</div>
  }

  return (
    <div>
      {
        token &&
        <div>
          <div className='centrar w-full'>
            <Button
              children='Agregar un nuevo libro'
              className='button-login'
              onClick={goToCreateNewBook}
            />
          </div>
          <div className='hidden lg:block'>
            <BookTable
              books={books}
            />
          </div>
          <div className='md:block lg:hidden flex w-full flex-wrap justify-center items-center'>
            <BookCard
              books={books}
            />
          </div>
        </div>
      }
    </div>
  )
}

export default Library