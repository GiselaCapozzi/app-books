// BookTable.jsx
// Representa una tabla de libros, con la capacidad de ordenar los libros y mostrar unformación detallada de cada uno al hacer clic en un botón. Si no hay libros se muestra un mensaje indicando que la biblioteca está vacía.

import useBook from "../hooks/useBook";
import NoElements from "../components/NoElements";
import { imagenSinLibro } from "../service/images";
import TableHeaderCell from "../components/TableHeaderCell";

const BookTable = ({ books }) => {

  const {
    handleAbout,
    handleSort,
    sortedBooks
  } = useBook(books);

  return (
    <div className={`container mx-auto my-16 centrar`}>
      {
        sortedBooks ?
          <table className="bg-white border border-gray-300">
            <thead>
              <tr>
                <TableHeaderCell label='Título' onClick={handleSort} />
                <TableHeaderCell label='Autor' onClick={handleSort} />
                <TableHeaderCell label='Año de publicación' onClick={handleSort} />
                <TableHeaderCell label='Editorial' onClick={handleSort} />
                <th className='commonCellStyle'>Portada</th>
                <th className='commonCellStyle'></th>
              </tr>
            </thead>
            <tbody>
              {
                sortedBooks?.length > 0 &&
                sortedBooks?.map(book => (
                  <tr key={book.id} className="text-center">
                    <td className='commonCellStyle'>{book.titulo}</td>
                    <td className='commonCellStyle'>{book.autor}</td>
                    <td className='commonCellStyle'>{book.publicacion_year}</td>
                    <td className='commonCellStyle'>{book.editorial}</td>
                    <td className='commonCellStyle'>
                      <img
                        src={
                          book.portada ||
                          'https://www.cucea.udg.mx/sites/default/files/styles/publicaciones/public/publicaciones/portadas/sin_portada_8.jpg?itok=yR2MLoZs'}
                        alt={book.titulo}
                        className='w-16 h-24 object-cover m-auto' />
                    </td>
                    <td className='commonCellStyle'>
                      <button
                        className='items-end rounded bg-green-600 p-2 shadow-sm shadow-black hover:bg-green-500 transicion'
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
          : (
            <NoElements
              children='Aún no has agregado libros a tu biblioteca'
              alt='sin libros'
              imagen={imagenSinLibro}
            />
          )
      }
    </div>
  )
}

export default BookTable