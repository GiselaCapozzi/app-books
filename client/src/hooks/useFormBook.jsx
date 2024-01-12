import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { createBook, fetchBooks, updateBook } from "../slice/books/bookSlice";
import { useAuth } from "../context/authContext";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const useFormBook = (initialValue, isEditing) => {
  const [bookData, setBookData] = useState(initialValue, isEditing);
  const [error, setError] = useState({
    titulo: '',
    autor: '',
    isbn: ''
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useAuth();

useEffect(() => {
  dispatch(fetchBooks(token))
}, [dispatch, isEditing])

  const id = initialValue.id;

  const handleChange = ({ target: { name, value } }) => {
    setBookData({
      ...bookData,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!bookData.titulo || !bookData.autor || !bookData.isbn) {
      return setError({
        titulo: !bookData.titulo ? 'El título no puede estar vacío' : '',
        autor: !bookData.autor ? 'El autor no puede estar vacío' : '',
        isbn: !bookData.isbn ? 'El código ISBN no puede estar vacío' : '',
      });
    }
    try {
      if (isEditing) {
        await dispatch(updateBook({ token, bookData, id }));
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'El libro ha sido actualizado',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/library')
      } else {
        await dispatch(createBook({ token, bookData }));
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'El libro ha sido agregado',
          showConfirmButton: false,
          timer: 1500,
        });
        Swal.fire({
          title: '¿Quieres seguir agregando?',
          icon: 'question',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Sí, continuar!',
        }).then((result) => {
          if (result.isDismissed) {
            navigate('/library');
          }
        });
      }
  
      // Fetch the updated list of books
      await dispatch(fetchBooks(token));
  
      // Reset form data and errors
      setBookData(initialValue);
      setError({
        titulo: '',
        autor: '',
        isbn: '',
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    bookData,
    handleChange,
    handleSubmit,
    error
  }
}

export default useFormBook