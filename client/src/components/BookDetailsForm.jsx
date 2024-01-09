import BookImage from "./BookImage"
import BookFormInput from "./BookFormInput"

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
        !titulo && <p>{error.titulo}</p>
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
      />
      <BookFormInput
        type='text'
        children='Autor'
        name='autor'
        value={autor}
        onChange={handleChange}
      />
      {
        !autor && <p>{error.autor}</p>
      }
      <BookFormInput
        type='number'
        children='ISBN'
        name='isbn'
        value={isbn}
        onChange={handleChange}
      />
      {
        !isbn && <p>{error.isbn}</p>
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
      <label className="block text-blue-700 text-sm font-bold mb-2">Sinopsis</label>
      <textarea
        name="sinopsis"
        className="w-full p-2 border-b-2 border-slate-700 rounded focus:outline-none focus:border-blue-500"
        value={sinopsis}
        onChange={handleChange}
      />
    </div>
  )
}

export default BookDetailsForm