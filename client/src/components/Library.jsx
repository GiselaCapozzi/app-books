import BookTable from './BookTable';
import BookCard from './BookCard';
import useLibrary from '../hooks/useLibrary';

const Library = () => {

  const {
    status,
    token,
    books,
    goToCreateNewBook
  } = useLibrary();

  if (status === 'loading') {
    return <div>Cargando ...</div>
  }

  if (status === 'failed') {
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