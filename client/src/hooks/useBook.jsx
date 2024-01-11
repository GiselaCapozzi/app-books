import { useNavigate } from "react-router-dom";
import { useState } from "react";

const useBook = (books) => {
  const navigate = useNavigate();

const handleAbout = (book) => {
  navigate(`/library/${book.titulo}`, {
    state: {
      book
    }
  })
}

const [sortedBooks, setSortedBooks] = useState(books);
  const [iAscending, setIsAscending] = useState(true);

  const handleSort = (e) => {
    const sorted = [...sortedBooks].sort((a, b) => {
      if (e.target.innerText === 'Año de publicación') {
        return iAscending
          ? a.publicacion_year - b.publicacion_year
          : b.publicacion_year - a.publicacion_year;
      } else if (e.target.innerText === 'Título') {
        return iAscending
          ? a.titulo.localeCompare(b.titulo)
          : b.titulo.localeCompare(a.titulo)
      } else if (e.target.innerText === 'Autor') {
        return iAscending
          ? a.autor.localeCompare(b.autor)
          : b.autor.localeCompare(a.autor)
      } else if (e.target.innerText === 'Editorial') {
        return iAscending
          ? a.editorial.localeCompare(b.editorial)
          : b.editorial.localeCompare(a.editorial)
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