import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from '../context/authContext';
import { fetchBooks } from '../slice/books/bookSlice';
import BookTable from './BookTable';
import BookCard from './BookCard';

const Library = () => {

  const dispatch = useDispatch();
  const { books, status, error } = useSelector(state => state.books);
  const { token } = useAuth();

  useEffect(() => {
    dispatch(fetchBooks(token))
  }, [dispatch]);

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