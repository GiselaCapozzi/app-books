// Navbar.jsx
// Este componente representa la barra de navegación de la aplicación.

import { faBookOpenReader } from '@fortawesome/free-solid-svg-icons';
import { useNavbar } from '../hooks/useNavbar';
import Icon from '../components/Icon';
import Menu from './Menu';

const Navbar = () => {

  const {
    isAuthenticated,
    menuConUsuario,
    menuSinUsuario
  } = useNavbar();

  return (
    <nav className='bg-emerald-400 p-4'>
      <div className='container mx-auto flex flex-col  justify-between'>
        <div className='text-white font-bold text-xl self-center'>
          <Icon 
            icon={ faBookOpenReader }
            color='white'
            onClick={() => navigate('/')}
            size='3x'
          />
        </div>
        <Menu 
          isAuthenticated={ isAuthenticated }
          menuConUsuario={ menuConUsuario }
          menuSinUsuario={ menuSinUsuario }
        />
      </div>
    </nav>
  );
};

export default Navbar;
