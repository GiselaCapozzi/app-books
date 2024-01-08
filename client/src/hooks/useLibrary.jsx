import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from '../context/authContext';
import { fetchBooks } from '../slice/books/bookSlice';
import { useNavigate } from 'react-router-dom';

const useLibrary = () => {

  const dispatch = useDispatch();
  const { books, status, error } = useSelector(state => state.books);
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchBooks(token))
  }, [dispatch]);

  const goToCreateNewBook = () => {
    navigate('/new_book');
  }

  return {
    status,
    token,
    books,
    goToCreateNewBook
  }
}

export default useLibrary