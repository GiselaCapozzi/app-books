import { createContext, useContext, useReducer } from 'react';
import authReducer from '../slice/auth/authSlice.js';
import { useDispatch, useSelector } from 'react-redux';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { user, isAuthenticated, token } = useSelector(state => state.auth);

  const value = { user, isAuthenticated, token };

  sessionStorage.setItem('user', JSON.stringify(value));

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

export const useAuth = () => {
  return useContext(AuthContext);
}