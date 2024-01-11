import useBook from "../hooks/useBook";
import Icon from './Icon';
import { faArrowsUpDown } from '@fortawesome/free-solid-svg-icons';

const BookTable = ({ books }) => {

  const { 
    handleAbout,
    handleSort,
    sortedBooks
  } = useBook(books);
  return (
    <div className={`container mx-auto my-16 flex items-center justify-center`}>
      <table className="bg-white border border-gray-300">
        <thead>
          <tr>
            <th
              className="p-3 border border-gray-300"
              onClick={handleSort}
            >
              <Icon
                icon={faArrowsUpDown}
                color='black'
                className='mr-2'
              />
              Título
            </th>
            <th
              onClick={handleSort}
              className="p-3 border border-gray-300"
            >
              <Icon
                icon={faArrowsUpDown}
                color='black'
                className='mr-2'
              />
              Autor
            </th>
            <th
              onClick={handleSort}
              className="cursor-pointer p-3 border border-gray-300">
              <Icon
                icon={faArrowsUpDown}
                color='black'
                className='mr-2'
              />
              Año de publicación
            </th>
            <th
              onClick={handleSort}
              className="p-3 border border-gray-300"
            >
              <Icon
                icon={faArrowsUpDown}
                color='black'
                className='mr-2'
              />
              Editorial
            </th>
            <th className="p-3 border border-gray-300">Portada</th>
            <th className="p-3 border border-gray-300"></th>
          </tr>
        </thead>
        <tbody>
          {
            sortedBooks?.length > 0 &&
            sortedBooks?.map(book => (
              <tr key={book.id} className="text-center">
                <td className="p-3 border border-gray-300">{book.titulo}</td>
                <td className="p-3 border border-gray-300">{book.autor}</td>
                <td className="p-3 border border-gray-300">{book.publicacion_year}</td>
                <td className="p-3 border border-gray-300">{book.editorial}</td>
                <td className="p-3 border border-gray-300">
                  <img
                    src={
                      book.portada ?
                        book.portada :
                        'https://www.cucea.udg.mx/sites/default/files/styles/publicaciones/public/publicaciones/portadas/sin_portada_8.jpg?itok=yR2MLoZs'}
                    alt={book.titulo}
                    className="w-16 h-24 object-cover m-auto" />
                </td>
                <td className="p-3 border border-gray-300">
                  <button
                    className="items-end rounded bg-green-600 p-2 shadow-sm shadow-black hover:bg-green-500 transicion"
                    onClick={() => handleAbout(book)}
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