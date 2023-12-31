import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearToken, setToken } from './slice/auth/authSlice';
import { AuthProvider } from './context/authContext';

import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Library from './components/Library';
import AboutBook from './components/AboutBook';
import FormBook from './components/FormBook';

const App = () => {

  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const storedUser = JSON.parse(sessionStorage.getItem('user'));
  if (storedUser) {
    dispatch(setToken(storedUser))
  }

  const tokenData = token && JSON.parse(atob(token.split('.')[1]));

  if (tokenData && tokenData.exp < Date.now() / 1000) {
    dispatch(clearToken())
    window.location.href = '/'
  }

  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/library' element={<Library />} />
          <Route path={`/library/:titulo`} element={<AboutBook />} />
          <Route path='/form_book' element={<FormBook />}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App;