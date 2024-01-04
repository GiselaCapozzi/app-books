import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars, faBookOpenReader } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useNavbar } from '../hooks/useNavbar';
import Enlaces from './Enlaces';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const {
    isAuthenticated,
    conUsuario,
    sinUsuario,
    handleClick
  } = useNavbar();

  return (
    <nav className="bg-emerald-400 p-4">
      <div className="container mx-auto flex flex-col  justify-between">
        <div className="text-white font-bold text-xl self-center">
          <FontAwesomeIcon
            icon={faBookOpenReader}
            color='white'
            className='text-5xl cursor-pointer'
            onClick={() => navigate('/')}
          />
        </div>
        <div className='flex my-5 lg:self-center'>
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {
                isOpen ?
                  <FontAwesomeIcon icon={faXmark} className='text-2xl' /> :
                  <FontAwesomeIcon icon={faBars} className='text-2xl' />
              }
            </button>
          </div>
          <div className={`lg:flex ${isOpen ? 'block' : 'hidden'}`}>
            <ul className="lg:flex items-center ml-7">
              {
                isAuthenticated ? conUsuario.map((link, index) => (
                  link === 'Cerrar sesión' ?
                    <Enlaces
                      key={index}
                      onClick={handleClick}>
                      {link}
                    </Enlaces> :
                      link === 'Home' ?
                    <Enlaces
                      key={index}
                      to='/'
                    >
                      {link}
                    </Enlaces> : 
                    link === 'Tu Biblioteca' ?
                    <Enlaces
                      key={index}
                      to='/library'
                    >
                      {link}
                    </Enlaces> :
                    link === 'Acerca' ? 
                    <Enlaces
                      key={index}
                      to='/about'
                    >
                      {link}
                    </Enlaces> : null
                )) : (
                  sinUsuario.map((link, index) => (
                    link === 'Iniciar sesión' ?
                      <Enlaces
                        to='/login'
                        key={index}
                      >{link}</Enlaces> :
                      link === 'Registrarse' ?
                        <Enlaces
                          key={index}
                          to='/register'
                        >{link}</Enlaces> :
                        link === 'Home' ?
                        <Enlaces
                          key={index}
                          to='/'
                        >{link}</Enlaces> :
                        link === 'Acerca' ?
                        <Enlaces
                          key={index}
                          to='/about'
                        >{link}</Enlaces> : null
                  ))
                )
              }
            </ul>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
