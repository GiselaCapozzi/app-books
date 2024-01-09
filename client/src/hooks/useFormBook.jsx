import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { createBook, updateBook } from "../slice/books/bookSlice";
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

  const id = initialValue.id;

  const handleChange = ({ target: { name, value } }) => {
    setBookData({
      ...bookData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bookData.titulo || !bookData.autor || !bookData.isbn) {
      return setError({
        titulo: !bookData.titulo ? 'El título no puede estar vació' : '',
        autor: !bookData.autor ? 'El autor no puede estar vació' : '',
        isbn: !bookData.isbn ? 'El código ISBN no puede estar vació' : '',
      });
    }

    if (isEditing) {
      dispatch(updateBook({ token, bookData, id }))
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: isEditing ? 'El libro ha sido actualizado' : 'El libro ha sido agregado',
        showConfirmButton: false,
        timer: 1500
      })
      navigate('/library')
    } else {
      dispatch(createBook({ token, bookData }));
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: isEditing ? 'El libro ha sido actualizado' : 'El libro ha sido agregado',
        showConfirmButton: false,
        timer: 1500
      })
      Swal.fire({
        title: '¿Queres seguir agregando?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Si, continuar!'
      }).then(result => {
        if (result.isDismissed) {
          navigate('/library')
        }
      })

      setBookData(initialValue);
      setError({
        titulo: '',
        autor: '',
        isbn: ''
      })
    }
  }

  return {
    bookData,
    handleChange,
    handleSubmit,
    error
  }
}

export default useFormBook