import useNewBook from "../hooks/useNewBook"
import CompForm from "./CompForm"

const NewBook = () => {

  const {
    bookData,
    handleChange,
    handleSubmit
  } = useNewBook({
    titulo: '',
    autor: '',
    isbn: '',
    publicacion_year: 0,
    editorial: '',
    paginas: 0,
    portada: '',
    sinopsis: ''
  });

  // const cortarFoto = (bookData.portada.split('\\'))[2];
  // console.log(cortarFoto)

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 mb-4">
          <CompForm
            type='text'
            children='Título'
            name='titulo'
            value={bookData.titulo}
            onChange={handleChange}
          />
          <CompForm
            type='text'
            children='Portada'
            name='portada'
            value={bookData.portada}
            onChange={handleChange}
          />
          <img src={!bookData.portada ? 'https://www.cucea.udg.mx/sites/default/files/styles/publicaciones/public/publicaciones/portadas/sin_portada_8.jpg?itok=yR2MLoZs' : bookData.portada} alt="" />
          <CompForm
            type='text'
            children='Autor'
            name='autor'
            value={bookData.autor}
            onChange={handleChange}
          />
          <CompForm
            type='number'
            children='ISBN'
            name='isbn'
            value={bookData.isbn}
            onChange={handleChange}
          />
          <CompForm
            type='number'
            children='Año de Publicación'
            name='publicacion_year'
            value={bookData.publicacion_year}
            onChange={handleChange}
          />
          <CompForm
            type='text'
            children='Editorial'
            name='editorial'
            value={bookData.editorial}
            onChange={handleChange}
          />
          <CompForm
            type='number'
            children='Cantidad de páginas'
            name='paginas'
            value={bookData.paginas}
            onChange={handleChange}
          />
          <label className="block text-gray-700 text-sm font-bold mb-2">Sinopsis</label>
          <textarea
            name="sinopsis"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            value={bookData.sinopsis}
            onChange={handleChange}
          >
          </textarea>
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Guardar Libro
          </button>
        </div>
      </div>
    </form>
  )
}

export default NewBook