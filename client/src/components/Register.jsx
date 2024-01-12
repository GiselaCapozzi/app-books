import useRegister from "../hooks/useRegister"

const Register = () => {

  const { 
    handleChange, 
    handleSubmit 
  } = useRegister();

  return (
    <div className='min-h-screen centrar bg-gray-50'>
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Registrarse</h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label className="sr-only">
                Nombre de usuario
              </label>
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                placeholder="Nombre de usuario"
                className="login-input"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="first-name" className="sr-only">
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                id="first-name"
                autoComplete="given-name"
                placeholder="Nombre"
                className="login-input"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="last-name" className="sr-only">
                Apellido
              </label>
              <input
                type="text"
                name="apellido"
                id="last-name"
                autoComplete="family-name"
                placeholder="Apellido"
                className="login-input"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Dirección de correo electrónico
              </label>
              <input
                type="email"
                name="email"
                id="email-address"
                autoComplete="email"
                placeholder="Correo electrónico"
                className="login-input"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Contraseña
              </label>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="new-password"
                placeholder="Contraseña"
                className="login-input"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="avatar" className="sr-only">
                Avatar (URL)
              </label>
              <input
                type="file"
                name="avatar"
                id="avatar"
                placeholder="URL del avatar"
                className="login-input"
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <button type="submit" className="button-login">
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register