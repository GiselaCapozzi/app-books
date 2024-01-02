import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar';

const App = () => {

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