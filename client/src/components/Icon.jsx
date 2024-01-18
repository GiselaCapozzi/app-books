// Icon.jsx
// Renderiza iconos utilizando la biblioteca FontAwesome

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Icon = ({ icon, color, size, onClick, className, border }) => {

  return (
    <FontAwesomeIcon
      icon={icon}
      color={color}
      size={size}
      className={`cursor-pointer ${className}`}
      onClick={onClick}
    />
  )
}

export default Icon