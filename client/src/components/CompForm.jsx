const CompForm = ({ 
  children, 
  type, 
  value, 
  name,
  onChange
}) => {
  return (
    <>
      <label className="block text-gray-700 text-sm font-bold mb-2">{children}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded"
        // required
      />
    </>
  )
}

export default CompForm