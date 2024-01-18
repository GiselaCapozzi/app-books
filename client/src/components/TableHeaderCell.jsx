import { faArrowsUpDown } from "@fortawesome/free-solid-svg-icons"
import Icon from "./Icon"

const TableHeaderCell = ({ label, onClick }) => {
  return (
    <th
      onClick={onClick}
      className='commonCellStyle'
    >
      <Icon 
        icon={faArrowsUpDown}
        color='black'
        className='mr-2'
      />
      {label}
    </th>
  )
}

export default TableHeaderCell