// useBook.jsx
// Es un hook para gestionar operaciones relacionadas con libros

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const useBook = (books) => {
  const navigate = useNavigate();
  const [sortedBooks, setSortedBooks] = useState(books);
  const [iAscending, setIsAscending] = useState(true);

  // Esta función se llama con un objeto 'book', la cual navegará a
  // la ruta correspondiente en la biblioteca y pasará la
  // información del libro como estado a esa página.
  const handleAbout = (book) => {
    navigate(`/library/${book.titulo}`, {
      state: {
        book
      }
    })
  }

  // Ordena los libros según diferentes criterios
  const handleSort = (label) => {
    const sorted = [...sortedBooks].sort((a, b) => {
      switch (label) {
        case 'Año publicación':
          return iAscending
            ? a.publicacion_year - b.publicacion_year
            : b.publicacion_year - a.publicacion_year;
        case 'Título':
          return iAscending
            ? a.titulo.localeCompare(b.titulo)
            : b.titulo.localeCompare(a.titulo);
        case 'Autor':
          return iAscending
            ? a.autor.localeCompare(b.autor)
            : b.autor.localeCompare(a.autor);
        case 'Editorial':
          return iAscending
            ? a.editorial.localeCompare(b.editorial)
            : b.editorial.localeCompare(a.editorial);
        default:
          return 0;
      }
    })
    setSortedBooks(sorted);
    setIsAscending(!iAscending);
  }

  return {
    handleAbout,
    handleSort,
    sortedBooks
  }
}

export default useBook