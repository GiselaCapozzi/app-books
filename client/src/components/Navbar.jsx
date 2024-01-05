import { faBookOpenReader } from '@fortawesome/free-solid-svg-icons';
import { useNavbar } from '../hooks/useNavbar';
import Icon from './Icon';
import Menu from './Menu';

const Navbar = () => {

  const {
    isAuthenticated,
    conUsuario,
    sinUsuario
  } = useNavbar();

  return (
    <nav className="bg-emerald-400 p-4">
      <div className="container mx-auto flex flex-col  justify-between">
        <div className="text-white font-bold text-xl self-center">
          <Icon 
            icon={faBookOpenReader}
            color='white'
            onClick={() => navigate('/')}
            size='3x'
          />
        </div>
        <Menu 
          isAuthenticated={isAuthenticated}
          conUsuario={conUsuario}
          sinUsuario={sinUsuario}
        />
      </div>
    </nav>
  );
};

export default Navbar;
