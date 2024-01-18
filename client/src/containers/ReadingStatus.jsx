const ReadingStatus = ({
  readStatus,
  handleStatusChange,
  paginas
}) => {
  return (
    <div className="mt-4 centrar flex-col">
        <label className="block text-center">Estado de lectura: </label>
        <select
          className="my-3 p-2 w-72 border-2 border-emerald-300 rounded-md"
          onChange={handleStatusChange}
          value={readStatus}
        >
          <option value=""></option>
          <option value="unread">Por leer</option>
          <option value="reading">Leyendo</option>
          <option value="read">Leído</option>
        </select>
      {
        readStatus &&
        (
          <div className="mt-4">
            <label className="block">Páginas leídas:</label>
            <div className="flex items-center">
              <input
                type="range"
                min='0'
                max={paginas}
                // value={bookInfo.progress}
                // onChange={handleProgressChange}
                className="mt-1 p-2 border-gray-300 w-64 appearance-none bg-blue-300 rounded-full outline-none"
              />
              {/* <p className="mx-2">{bookInfo.progress}</p> */}
            </div>
          </div>
        )
      }
        </div>
  )
}

export default ReadingStatus