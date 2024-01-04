import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { useDispatch } from 'react-redux';
import { setToken } from './slice/auth/authSlice';
import { AuthProvider } from './context/AuthContext';

const App = () => {

  const dispatch = useDispatch();

  // const storedToken = sessionStorage.getItem('token');
  const storedUser = sessionStorage.getItem('user');

  if (storedUser) {
    dispatch(setToken(JSON.parse(storedUser)))
  }

  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App;