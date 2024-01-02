const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Iniciar sesion</h2>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Dirección de correo electrónico
              </label>
              <input
                type="email"
                name="email"
                id="email-address"
                autoComplete="email"
                required
                placeholder="Correo electrónico"
                className="login-input"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Contraseña</label>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="current-password"
                required
                placeholder="Contraseña"
                className="login-input"
              />
            </div>
          </div>
          <div>
            <button type="submit" className="button-login">
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login