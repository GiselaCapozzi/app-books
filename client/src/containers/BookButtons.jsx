import Icon from '../components/Icon';
import Button from '../components/Button';
import {
  faBookBookmark,
  faBookOpen,
  faBookmark,
  faStar
} from '@fortawesome/free-solid-svg-icons';

const BookButtons = ({
  readStatus,
  handleStatusChange,
  isFavorite,
  toggleFavorite
}) => {
  return (
    <div className="m-auto flex space-x-2 items-center justify-center">
      <Button
        className='p-2 bg-blue-500 text-white rounded-md'
        onClick={() => handleStatusChange('unread')}
      >
        <div className='centrar flex-col'>
          <Icon
            icon={faBookBookmark}
            color={readStatus === 'unread' ? 'black' : 'white'}
            size='1x'
            className='m-auto'
          />
          Por leer
        </div>
      </Button>
      <Button
        onClick={() => handleStatusChange('reading')}
        className="p-2 bg-yellow-500 text-white rounded-md"
      >
        <div className='centrar flex-col'>
          <Icon
            icon={faBookOpen}
            color={readStatus === 'unread' ? 'black' : 'white'}
            size='1x'
            className='m-auto'
          />
          Leyendo
        </div>
      </Button>
      <Button
        onClick={() => handleStatusChange('read')}
        className="p-2 bg-green-500 text-white rounded-md"
      >
        <div className='centrar flex-col'>
          <Icon
            icon={faBookmark}
            color={readStatus === 'unread' ? 'black' : 'white'}
            size='1x'
            className='m-auto'
          />
          Leído
        </div>
      </Button>
      <Button
         className={`p-2 border-2 ${isFavorite ? 'bg-yellow-500' : 'bg-violet-400'} border-violet-600 text-white rounded-md`}
         onClick={toggleFavorite}
      >
        <div className='centrar flex-col'>
          <Icon
            icon={faStar}
            size='1x'
            className='m-auto'
          />
          Favorito
        </div>
      </Button>
    </div>
  )
}

export default BookButtons