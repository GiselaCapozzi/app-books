// Home.jsx
// Este componente representa la página de inicio, y si el usuario esta
// autenticadp muestra también el componente UserProfile

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import UserProfile from '../components/UserProfile';

const Home = () => {

  // Obtiene informacion sobre la autenticación, incluyendo el usuario
  // y el estado de autenticación
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  return (
    <div className='bg-gray-100'>
      {
        isAuthenticated &&
        <UserProfile
          navigate={navigate}
          user={user}
        />
      }
      <div className='text-center min-h-screen centrar flex-col'>
        <h1 className='text-4xl font-bold text-blue-600 mb-4'>Biblioteca Virtual</h1>
        <p className='text-gray-600 mb-8 flex w-60'>Visita nuestra extensa colección de libros y animate a agregar los tuyos propios</p>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
          onClick={() => navigate('/catalogue')}
        >
          Comienza a explorar
        </button>
      </div>
    </div>
  )
}

export default Home