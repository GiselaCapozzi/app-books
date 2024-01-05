import { useDispatch } from "react-redux";
import { useAuth } from "../context/authContext";
import { clearToken } from '../slice/auth/authSlice';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useNavbar = () => {

  const { isAuthenticated } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {

  }, [dispatch])

  
  const handleClick = () => {
    try {
      dispatch(clearToken());
      sessionStorage.removeItem('user')
    } catch (error) {
      console.log(error)
    }
  }

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

  const conUsuario = links.slice(0, 4);
  const sinUsuario = links.slice(0, 3).concat({
    id: 5,
    to: '/login',
    label: 'Iniciar sesión'
  },
  {
    id: 6,
    to: '/register',
    label: 'Registrarse'
  });

  return {
    links,
    isAuthenticated,
    conUsuario,
    sinUsuario,
    handleClick
  }
}
