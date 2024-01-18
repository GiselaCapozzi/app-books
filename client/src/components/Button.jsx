// Button.jsx
// Define un componente llamado Button reutilizable, el cual toma
// ciertas propiedades y devuelve un elemento button con las propiedades
// correspondientes

const Button = ({ children, onClick, className, type }) => {
  return (
    <button
      onClick={onClick}
      className={className}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button