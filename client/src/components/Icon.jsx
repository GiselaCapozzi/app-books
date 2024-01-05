import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Icon = ({ icon, color, size, onClick, className }) => {

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