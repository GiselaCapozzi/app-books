import { useNavigate } from "react-router-dom"

const useBook = () => {
  const navigate = useNavigate();

const handleAbout = (titulo) => {
  navigate(`/library/${titulo}`, {
    state: {
      titulo
    }
  })
}
  
  return {
    handleAbout
  }
}

export default useBook