import { useDispatch } from "react-redux";
import { useAuth } from "../context/authContext";
import { clearToken } from '../slice/auth/authSlice';
import { useEffect } from "react";

export const useNavbar = () => {

  const { isAuthenticated } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {

  }, [dispatch])

  const links = [
    'Home',
    'Tu Biblioteca',
    'Acerca',
    'Cerrar sesión',
    'Iniciar sesión',
    'Registrarse'
  ]

  const conUsuario = links.slice(0, 4);
  const sinUsuario = links.slice(0, 3).concat('Iniciar sesión', 'Registrarse');
  
const handleClick = () => {
  try {
    dispatch(clearToken());
    sessionStorage.removeItem('user')
  } catch (error) {
    console.log(error)
  }
}

  return {
    links,
    isAuthenticated,
    conUsuario,
    sinUsuario,
    handleClick
  }
}
