import { createContext, useContext } from 'react';
import { useSelector } from 'react-redux';

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error('No hay un proveedor de autentificación')
  return context;
}

export const AuthProvider = ({ children }) => {
  const { user, isAuthenticated, token } = useSelector(state => state.auth);

  const value = { user, isAuthenticated, token };

  sessionStorage.setItem('user', JSON.stringify(value));

  return <authContext.Provider value={value}>{children}</authContext.Provider>
};