import { createContext, useContext } from 'react';
import { useSelector } from 'react-redux';

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('No hay un proveedor de autentificación')
  return context;
}

export const AuthProvider = ({ children }) => {
  const { user, isAuthenticated, token } = useSelector(state => state.auth);

  const value = { user, isAuthenticated, token };

  sessionStorage.setItem('user', JSON.stringify(value));

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};