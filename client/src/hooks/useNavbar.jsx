// useNavbar.jsx
// Custom hook para administrar la funcionalidad relacionada con la navegacion en el componente Navbar

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { clearToken } from '../slice/auth/authSlice';

/**
 * Hook personalizado para gestionar la funcionalidad de la barra de navegación.
 * @returns {Object} Objeto con propiedades y funciones relacionadas con la navegación.
 */

export const useNavbar = () => {

  const { isAuthenticated } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Función para limpiar el token y eliminar el objeto 'user' almacenado en sessionStorage luego de cerrar sesión y a la vez redirigir al usuario a la página de inicio
  const handleClick = () => {
    try {
      dispatch(clearToken());
      sessionStorage.removeItem('user');
      navigate('/'); // Redirige al usuario a la página de inicio después de cerrar sesión.
    } catch (error) {
      console.error('Error limpiando el token:', error);
      // Lanza una nueva excepcion indicando que ha ocurrido un error al intentar eliminar el token
      throw new Error('Ha ocurrido un error al intentar eliminar el token');
    }
  }

// Representa enlaces de navegacion para una interfaz de usuario
  const links = [
    {
      id: 1,
      to: '/',
      label: 'Home',
      onClick: () => {
        navigate('/')
      }
    },
    {
      id: 2,
      to: '/library',
      label: 'Tu Biblioteca'
    },
    {
      id: 3,
      to: '/about',
      label: 'Acerca'
    },
    {
      id: 4,
      label: 'Cerrar sesión',
      onClick: handleClick
    },
    {
      id: 5,
      to: '/login',
      label: 'Iniciar sesión'
    },
    {
      id: 6,
      to: '/register',
      label: 'Registrarse'
    }
  ]

  // Contiene los primeros 4 enlaces del array original 'links'. Y son relevantes cuando un usuario a iniciado sesión
  const menuConUsuario = links.slice(0, 4);
  
  // Es una versión modificada de 'menuConUsuario' que elimina el enlace de 'Cerrar sesión' y agrega los enlaces de 'Iniciar sesión' y 'Registrarse'. Es relevante cuando el usuario no ha iniciado sesion. 
  const menuSinUsuario = menuConUsuario.slice(0, 3).concat( 
    {
      id: 5,
      to: '/login',
      label: 'Iniciar sesión'
    },
    {
      id: 6,
      to: '/register',
      label: 'Registrarse'
    }
  );

  return {
    links,
    isAuthenticated,
    menuConUsuario,
    menuSinUsuario,
    handleClick
  }
}
