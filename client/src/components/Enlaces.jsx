// Enlaces.jsx
// Proporciona una forma de crear enlaces de navegación

import { Link } from "react-router-dom"

const Enlaces = ({ to, children, onClick }) => {
  return (
    <>
      <li>
        <Link
        to={to}
        className="transicion text-black font-bold hover:text-white lg:ml-7"
        onClick={onClick}
        >{children}</Link>
      </li>
    </>
  )
}

export default Enlaces