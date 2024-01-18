const NoElements = ({ children, imagen, alt }) => {
  return (
    <div className="centrar flex-col my-7">
            <p className="text-red-600 uppercase text-xl my-3">{children}</p>
            
            <img
              src={imagen}
              alt={alt}
              className='max-w-64 my-7'
            />
          </div>
  )
}

export default NoElements