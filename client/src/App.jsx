import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { useDispatch } from 'react-redux';
import { setToken } from './slice/auth/authSlice';

const App = () => {

  const dispatch = useDispatch();

  const storedToken = sessionStorage.getItem('token');

  if (storedToken) {
    dispatch(setToken(storedToken))
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;