import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Icon = ({ icon, color, size, onClick }) => {

  return (
    <FontAwesomeIcon 
      icon={icon}
      color={color}
      size={size}
      className="cursor-pointer"
      onClick={onClick}   
    />
  )
}

export default Icon