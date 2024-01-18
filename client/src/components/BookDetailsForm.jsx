// BookDetailsForm.jsx
// Muestra un formulario para completar con detalles de un libro 

import BookImage from "./BookImage"
import BookFormInput from "./BookFormInput"
import BookTextArea from "./BookTextArea"

const BookDetailsForm = ({
  bookData: {
    titulo,
    portada,
    autor,
    isbn,
    publicacion_year,
    editorial,
    paginas,
    sinopsis
  }, handleChange,
  error
}) => {
  return (
    <div className="col-span-2 mb-4">
      <BookFormInput
        type='text'
        children='Título'
        name='titulo'
        value={titulo}
        onChange={handleChange}
      />
      {
        !titulo && <p className='text-red-500 font-semibold centrar mb-3'>{error.titulo}</p>
      }
      <BookFormInput
        type='text'
        children='Portada'
        name='portada'
        value={portada}
        onChange={handleChange}
      />
      <BookImage
        portada={portada}
        className='w-40 m-auto my-5 rounded-lg shadow-md shadow-black'
        titulo={titulo}
      />
      <BookFormInput
        type='text'
        children='Autor'
        name='autor'
        value={autor}
        onChange={handleChange}
      />
      {
        !autor && <p className='text-red-500 font-semibold centrar mb-3'>{error.autor}</p>
      }
      <BookFormInput
        type='number'
        children='ISBN'
        name='isbn'
        value={isbn}
        onChange={handleChange}
      />
      {
        !isbn && <p className='text-red-500 font-semibold centrar mb-3'>{error.isbn}</p>
      }
      <BookFormInput
        type='number'
        children='Año de Publicación'
        name='publicacion_year'
        value={publicacion_year}
        onChange={handleChange}
      />
      <BookFormInput
        type='text'
        children='Editorial'
        name='editorial'
        value={editorial}
        onChange={handleChange}
      />
      <BookFormInput
        type='number'
        children='Cantidad de páginas'
        name='paginas'
        value={paginas}
        onChange={handleChange}
      />
      <BookTextArea 
        name='sinopsis'
        value={sinopsis}
        onChange={handleChange}
      />
    </div>
  )
}

export default BookDetailsForm