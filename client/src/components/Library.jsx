import BookTable from './BookTable';
import BookCard from './BookCard';
import useLibrary from '../hooks/useLibrary';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBooks } from '../slice/books/bookSlice';

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
        <>
          <button
            onClick={goToCreateNewBook}
            className='button-login'>Agregar un nuevo libro</button>
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
        </>
      }
    </div>
  )
}

export default Library