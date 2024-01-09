const BookFormInput = ({ 
  children, 
  type, 
  value, 
  name,
  onChange
}) => {
  return (
    <div>
      <label className="block text-center text-blue-700 text-sm font-bold mb-2">{children}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border-b-2 text-center border-slate-700 mb-3"
        // required
      />
    </div>
  )
}

export default BookFormInput