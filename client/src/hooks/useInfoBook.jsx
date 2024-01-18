import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const useInfoBook = () => {
  
  const location = useLocation();
  const {
    titulo,
    autor,
    editorial,
    isbn,
    paginas,
    portada,
    publicacion_year,
    sinopsis,
    id
  } = location.state
  const [favorites, setFavorites] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [readStatus, setReadStatus] = useState('');

  const handleStatusChange = () => {

  }

  const toggleFavorite = () => {

  }

  
  return {
    titulo,
    autor,
    editorial,
    isbn,
    paginas,
    portada,
    publicacion_year,
    sinopsis,
    readStatus,
    isFavorite,
    handleStatusChange,
    toggleFavorite
  }
}

export default useInfoBook