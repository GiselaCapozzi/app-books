import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { useDispatch } from 'react-redux';
import { setToken } from './slice/auth/authSlice';
import { AuthProvider } from './context/authContext';
import Library from './components/Library';
import AboutBook from './components/AboutBook';

const App = () => {

  const dispatch = useDispatch();

  const storedUser = JSON.parse(sessionStorage.getItem('user'));

  if (storedUser) {
    dispatch(setToken(storedUser))
  }

  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/library' element={<Library />}/>
          <Route path={`/library/:titulo`} element={<AboutBook />}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App;