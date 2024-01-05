import Icon from "./Icon";
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import Enlaces from "./Enlaces";
import { useState } from "react";

const renderLinks = (links) => {
  return links.map((link) => (
    <Enlaces key={link.id} to={link.to} onClick={link.onClick}>
      {link.label}
    </Enlaces>
  ))
}

const Menu = ({ 
  isAuthenticated, 
  conUsuario, 
  sinUsuario, 
}) => {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='flex my-5 lg:self-center'>
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {
                isOpen ?
                  <Icon
                    size='2x'
                    icon={faXmark}
                  /> :
                  <Icon
                    size='2x'
                    icon={faBars}
                  />
              }
            </button>
          </div>
          <div className={`lg:flex ${isOpen ? 'block' : 'hidden'}`}>
            <ul className="lg:flex items-center ml-7">
              {
                isAuthenticated 
                ? renderLinks(conUsuario)
                : renderLinks(sinUsuario)
              }
            </ul>
          </div>

        </div>
  )
}

export default Menu