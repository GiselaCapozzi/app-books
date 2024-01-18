const BookError = ({ children }) => {
  return (
    <div className='centrar flex-col bg-white p-4 mb-4 shadow-md rounded-md'>
      <p>{children}</p>
    </div>
  )
}

export default BookError