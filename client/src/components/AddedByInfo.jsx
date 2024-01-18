import { faUserCircle } from "@fortawesome/free-solid-svg-icons"
import Icon from "./Icon"

const AddedByInfo = ({ username, nickname }) => {
  return (
    <div className="flex items-center justify-end">
    <Icon
      icon={faUserCircle}
      color='blue'
      className='mx-1'
      size='1x'
    />
    <p className="text-xs mr-4">Agregado por @{username == nickname ? 'mi' : username}</p>
  </div>
  )
}

export default AddedByInfo