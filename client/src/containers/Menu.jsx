// Menu.jsx
// Este componente Menu es una barra de navegación que adapta su apariencia según el tamaño de la pantalla y la autenticación del usuario. Además, utiliza iconos de FontAwesome para mejorar la experiencia visual.

import Icon from "../components/Icon";
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import Enlaces from "../components/Enlaces";
import { useState } from "react";

// Convierte un array de objetos de enlace en un array de elementos 
// de enlace, utilizando la información proporcionada en cada objeto, 
// para establecer las propiedades key, to, onClick y el contenido 
// del enlace.
const renderLinks = (links) => {
  return links.map((link) => (
    <Enlaces key={link.id} to={link.to} onClick={link.onClick}>
      {link.label}
    </Enlaces>
  ))
}

const Menu = ({ 
  isAuthenticated, 
  menuConUsuario, 
  menuSinUsuario, 
}) => {

  // Determina si el menú está abierto o cerrado en dispositivos móviles
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
                ? renderLinks(menuConUsuario)
                : renderLinks(menuSinUsuario)
              }
            </ul>
          </div>

        </div>
  )
}

export default Menu