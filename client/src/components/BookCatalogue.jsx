// BookCatalogue.jsx
// Representación visual de un libro en un catálogo

import BookImage from "./BookImage";
import BookDetails from "./BookDetails";
import AddedByInfo from "./AddedByInfo";
import Button from "./Button";

const BookCatalogue = ({
  username,
  titulo,
  autor,
  sinopsis,
  portada,
  nickname,
  goAboutBook,
  book
}) => {

  return (
    <div className='max-w-72 mx-auto h-auto bg-emerald-200 shadow-lg rounded-md relative'>
      <BookImage 
        portada={portada}
        className='m-auto w-auto h-64 mb-4 object-contain rounded-md'
        titulo={titulo}
      />
      <BookDetails 
        titulo={titulo}
        autor={autor}
        sinopsis={sinopsis}
      />
      <div className="absolute bottom-0 left-0 right-0">
        <AddedByInfo 
          nickname={nickname}
          username={username}
        />
        <Button
          children='Saber más'
          onClick={() => goAboutBook(book)}
          className='button-login mt-2'
        />
      </div>
    </div>
  );
};

export default BookCatalogue;
