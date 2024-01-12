import { faUser, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";

const BookCatalogue = ({
  username,
  titulo,
  autor,
  sinopsis,
  portada
}) => {
  
  return (
    <div className='max-w-72 mx-auto h-auto bg-emerald-200 shadow-lg rounded-md relative'>
      <img
        src={portada}
        alt=""
        className='m-auto w-auto h-64 mb-4 object-contain rounded-md'
      />
      <div className="mx-2 h-56">
        <h2 className='text-xl font-bold'>{titulo}</h2>
        <p className='text-sm text-gray-700 mb-4 mt-0'>{autor}</p>
        <p className='text-gray-600'>{sinopsis.slice(0, 50)}...</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <div className="flex items-center justify-end">
          <Icon
            icon={faUserCircle}
            color='blue'
            className='mx-1'
            size='1x'
          />
          <p className="text-xs mr-4">Agregado por @{username}</p>
        </div>
        <button className="button-login mt-2">Saber más</button>
      </div>
    </div>
  );
};

export default BookCatalogue;
