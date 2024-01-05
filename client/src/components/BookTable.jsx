import useBook from "../hooks/useBook"

const BookTable = ({ books }) => {

  const { handleAbout } = useBook();

  return (
    <div className={`container mx-auto my-16`}>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="p-3 border border-gray-300">Titulo</th>
            <th className="p-3 border border-gray-300">Autor</th>
            <th className="p-3 border border-gray-300">ISBN</th>
            <th className="p-3 border border-gray-300">Año de publicación</th>
            <th className="p-3 border border-gray-300">Editorial</th>
            <th className="p-3 border border-gray-300">Páginas</th>
            <th className="p-3 border border-gray-300">Portada</th>
            <th className="p-3 border border-gray-300">Sinopsis</th>
            <th className="p-3 border border-gray-300"></th>
          </tr>
        </thead>
        <tbody>
          {
            books.length > 0 &&
            books?.map(book => (
              <tr key={book.id}>
                <td className="p-3 border border-gray-300">{book.titulo}</td>
                <td className="p-3 border border-gray-300">{book.autor}</td>
                <td className="p-3 border border-gray-300">{book.isbn}</td>
                <td className="p-3 border border-gray-300">{book.publicacion_year}</td>
                <td className="p-3 border border-gray-300">{book.editorial}</td>
                <td className="p-3 border border-gray-300">{book.paginas}</td>
                <td className="p-3 border border-gray-300">
                  <img src={book.portada ? book.portada : 'https://www.cucea.udg.mx/sites/default/files/styles/publicaciones/public/publicaciones/portadas/sin_portada_8.jpg?itok=yR2MLoZs'} alt="portada" className="w-16 h-24 object-cover" />
                </td>
                <td className="p-3 border border-gray-300">{book.sinopsis.slice(0,50)}...</td>
                <td>
                  <button
                    className="items-end rounded bg-green-600 p-2 shadow-sm shadow-black hover:bg-green-500 transicion"
                    onClick={() => handleAbout(book.titulo)}
                  >
                    Ver más
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default BookTable