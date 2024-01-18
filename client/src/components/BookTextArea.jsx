// BookTextArea.jsx
// Renderiza un textarea destinada a la entrada de la sinopsis de un libro

const BookTextArea = ({ name, value, onChange }) => {
  return (
    <>
      <label className="block text-blue-700 text-sm font-bold mb-2">Sinopsis</label>
      <textarea
        name={name}
        className="w-full p-2 border-b-2 border-slate-700 rounded focus:outline-none focus:border-blue-500"
        value={value}
        onChange={onChange}
      />
    </>
  )
}

export default BookTextArea