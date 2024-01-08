import { useState } from "react"
import { useDispatch } from 'react-redux';
import { createBook } from "../slice/books/bookSlice";
import { useAuth } from "../context/authContext";

const useNewBook = (initialValue) => {

  const [bookData, setBookData] = useState(initialValue);
  const dispatch = useDispatch();
  const { token } = useAuth();

  const handleChange = ({ target: { name, value } }) => {
    setBookData({
      ...bookData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createBook({token, bookData}));
  }
  
  return {
    bookData,
    handleChange,
    handleSubmit
  }
}

export default useNewBook