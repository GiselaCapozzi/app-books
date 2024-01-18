// BookCard.jsx
// Este componente representa una lista de tarjetas de libros que 
// pueden ser ordenadas por diferentes criterios, con funcionanlidad 
// para ver más detalles sobre un libro específico. Si no hay libros, 
// muestra un mensaje indicando que no se han agragado 
// libros a la biblioteca

import useBook from "../hooks/useBook"
import Button from "../components/Button";
import NoElements from "../components/NoElements";
import { imagenSinLibro } from "../service/images";

const BookCard = ({ books }) => {

  // Destructurando propiedades del custom hook
  const {
    handleAbout,
    handleSort,
    sortedBooks,
  } = useBook(books);

  const nombreBotones = ['Título', 'Autor', 'Editorial', 'Año publicación'];

  return (
    <>
      <div className='centrar my-7'>
        <p>Ordenar por:</p>
        {
          nombreBotones.map((label, index) => (
            <Button
              key={index}
              className='text-sm items-end rounded bg-green-600 p-2 shadow-sm shadow-black hover:bg-green-500 transicion mx-1'
              onClick={() => handleSort(label)}
            >
              {label}
            </Button>
          ))
        }
      </div>
      {
        sortedBooks?.length > 0
          ? sortedBooks?.map(book => (
            <div key={book.id} className="max-w-96 max-h-96 rounded overflow-hidden shadow-inner shadow-blue-300 m-9 p-3 bg-gray-200">
              <div className=" flex flex-row">
                <div className="self-center ml-4">
                  <img className="max-w-32" src={book.portada || 'https://www.cucea.udg.mx/sites/default/files/styles/publicaciones/public/publicaciones/portadas/sin_portada_8.jpg?itok=yR2MLoZs'} alt={book.titulo} />
                </div>
                <div className="px-6 py-4">
                  <div className="flex font-bold text-md text-center mb-2">{book.titulo}</div>
                  <div className="flex flex-col max-w-52">
                    <p className="text-gray-700 text-xs"><span className="font-bold underline italic">Autor:</span> {book.autor}</p>
                    <p className="text-gray-700 text-xs"><span className="font-bold underline italic">Año de Publicación:</span> {book.publicacion_year}</p>
                    <p className="text-gray-700 text-xs"><span className="font-bold underline italic">Editorial:</span> {book.editorial}</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center w-full mt-2">
                <Button
                  className="items-end rounded bg-green-600 p-2 shadow-sm shadow-black hover:bg-green-500 transicion"
                  onClick={() => handleAbout(book)}
                >
                  Ver más
                </Button>
              </div>
            </div>
          )) :
          <NoElements
            children='Aún no has agregado libros a tu biblioteca'
            alt='sin libros'
            imagen={imagenSinLibro}
          />
      }
    </>
  )
}

export default BookCard