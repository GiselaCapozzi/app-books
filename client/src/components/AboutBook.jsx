import { useLocation } from 'react-router-dom';

const AboutBook = () => {

  const location = useLocation();

  const titulo = location.state.titulo;

  return (
    <div>{titulo}</div>
  )
}

export default AboutBook