import { useAuth } from '../context/authContext';
import { Link, useNavigate } from 'react-router-dom';
import Icon from './Icon';
import { faUserLarge } from '@fortawesome/free-solid-svg-icons';

const Home = () => {

  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  return (
    <div className='bg-gray-100'>
      {
        isAuthenticated &&
        <div
          className='flex justify-end items-center p-4'
          onClick={() => navigate('/profile')}
        >
          <div className={`centrar rounded border-2 border-cyan-400 p-1 hover:bg-sky-400`}>
            {
              !user.avatar
                ? <Icon
                  icon={faUserLarge}
                  size='1x'
                  color='blue'
                  className='avatar'
                />
                : <img
                  src={user.avatar}
                  alt="avatar"
                  className='avatar'
                />
            }
            <Link className='ml-2 font-semibold'>{user.username}</Link>
          </div>
        </div>
      }
      <div className="text-center min-h-screen centrar flex-col">
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