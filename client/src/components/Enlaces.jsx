import { Link } from "react-router-dom"

const Enlaces = ({ to, children, onClick }) => {
  return (
    <>
      <li>
        <Link
        to={to}
        className="transition ease-in-out duration-500 text-black font-bold hover:text-white"
        onClick={onClick}
        >{children}</Link>
      </li>
    </>
  )
}

export default Enlaces