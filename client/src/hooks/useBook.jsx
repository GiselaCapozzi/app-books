import { useNavigate } from "react-router-dom"

const useBook = () => {
  const navigate = useNavigate();

const handleAbout = (book) => {
  navigate(`/library/${book.titulo}`, {
    state: {
      book
    }
  })
}
  
  return {
    handleAbout
  }
}

export default useBook