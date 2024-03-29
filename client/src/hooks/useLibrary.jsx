import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from '../context/AuthContext';
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
    navigate('/form_book');
  }

  return {
    status,
    error,
    token,
    books,
    goToCreateNewBook,
    fetchBooks
  }
}

export default useLibrary