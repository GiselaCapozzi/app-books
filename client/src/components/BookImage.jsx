const BookImage = ({ portada, titulo }) => {
  return (
    <img 
    src={
      !portada ? 
      'https://www.cucea.udg.mx/sites/default/files/styles/publicaciones/public/publicaciones/portadas/sin_portada_8.jpg?itok=yR2MLoZs' 
      : portada} 
    alt={titulo} 
    className="w-40 m-auto my-5 rounded-lg shadow-md shadow-black"
    />
  )
}

export default BookImage