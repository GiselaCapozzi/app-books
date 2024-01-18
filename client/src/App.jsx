import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearToken, setToken } from './slice/auth/authSlice';
import { AuthProvider } from './context/authContext';

import Login from './containers/Login';
import Register from './containers/Register';
import Home from './containers/Home';
import Navbar from './containers/Navbar';
import Library from './containers/Library';
import AboutBook from './containers/AboutBook';
import FormBook from './containers/FormBook';
import Profile from './containers/Profile';
import Catalogue from './containers/Catalogue';
import InfoBook from './containers/InfoBook';

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
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />}/>
          <Route path='/library' element={<Library />} />
          <Route path={`/library/:titulo`} element={<AboutBook />} />
          <Route path={`catalogue/info_book/:titulo`} element={<
            InfoBook />}/>
          <Route path='/form_book' element={<FormBook />}/>
          <Route path='/catalogue' element={<Catalogue />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App;