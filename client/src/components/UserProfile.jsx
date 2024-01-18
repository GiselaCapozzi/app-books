// UserProfile.jsx
// Representación visual de la información del usuario, con la capacidad
// de redirigir al usuario a su perfil cuando se hace clic en él

import { Link } from 'react-router-dom';
import Icon from './Icon';
import { faUserLarge } from '@fortawesome/free-solid-svg-icons';

const UserProfile = ({ navigate, user }) => {
  return (
    <div
      className='flex justify-end items-center p-4'
      onClick={() => navigate('/profile')}
    >
      <div className='centrar rounded border-2 border-cyan-400 p-1 hover:bg-sky-400'>
        {!user.avatar ? (
          <Icon icon={faUserLarge} size='1x' color='blue' className='avatar' />
        ) : (
          <img src={user.avatar} alt="avatar" className='avatar' />
        )}
        <Link className='ml-2 font-semibold'>{user.username}</Link>
      </div>
    </div>
  )
}

export default UserProfile