import useBook from "../hooks/useBook"

const BookCard = ({ books }) => {
const { handleAbout } = useBook();

  return (
    <>
      {
        books.length > 0
        && books?.map(book => (
          <div key={book.id} className="max-w-96 max-h-96 rounded overflow-hidden shadow-inner shadow-blue-300 m-9 p-3 bg-gray-200">
            <div className=" flex flex-row">
              <div className="self-center ml-4">
                <img className="max-w-32" src={book.portada ? book.portada : 'https://www.cucea.udg.mx/sites/default/files/styles/publicaciones/public/publicaciones/portadas/sin_portada_8.jpg?itok=yR2MLoZs'} alt={book.titulo} />
              </div>
              <div className="px-6 py-4">
                <div className="flex font-bold text-md text-center mb-2">{book.titulo}</div>
                <div className="flex flex-col max-w-52">
                  <p className="text-gray-700 text-xs"><span className="font-bold underline italic">Autor:</span> {book.autor}</p>
                  <p className="text-gray-700 text-xs"><span className="font-bold underline italic">ISBN:</span> {book.isbn}</p>
                  <p className="text-gray-700 text-xs"><span className="font-bold underline italic">Año de Publicación:</span> {book.publicacion_year}</p>
                  <p className="text-gray-700 text-xs"><span className="font-bold underline italic">Editorial:</span> {book.editorial}</p>
                  <p className="text-gray-700 text-xs"><span className="font-bold underline italic">Páginas:</span> {book.paginas}</p>
                </div>
                <p className="text-gray-700 text-xs mt-2">{book.sinopsis.slice(0, 50)}...</p>
              </div>
            </div>
            <div className="flex justify-center w-full">
              <button 
              className="items-end rounded bg-green-600 p-2 shadow-sm shadow-black hover:bg-green-500 transicion"
              onClick={() => handleAbout(book.titulo)}
              >
                Ver más
              </button>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default BookCard