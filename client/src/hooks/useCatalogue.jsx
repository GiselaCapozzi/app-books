import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { getAllBooksUsers } from "../slice/booksAllUser/booksUsersSlice";
import { useNavigate } from "react-router-dom";

const useCatalogue = () => {
  const dispatch = useDispatch();
  const { status, booksUsers, error } = useSelector(state => state.booksUsers);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllBooksUsers())
  }, [])

  const mixedArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  }

  const mixedBooks = mixedArray(booksUsers);

  const goAboutBook = (book, index, updateBookInfo) => {
    navigate(`info_book/${book.titulo}`, {
      state: { ...book, index }
    })
  }
  return {
    mixedBooks,
    user,
    goAboutBook
  }
}

export default useCatalogue