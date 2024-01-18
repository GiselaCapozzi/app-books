// BookImage.jsx
// Componente funcional que acepta tres propiedades y devuelve un
// elemento imagen

const BookImage = ({ portada, titulo, className }) => {
  return (
    <img 
    src={
      portada ||
      'https://www.cucea.udg.mx/sites/default/files/styles/publicaciones/public/publicaciones/portadas/sin_portada_8.jpg?itok=yR2MLoZs' 
      } 
    alt={titulo} 
    className={className}
    />
  )
}

export default BookImage