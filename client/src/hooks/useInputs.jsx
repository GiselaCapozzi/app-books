const useInputs = (handleChange) => {

  const inputs = [
    {
      id: 'username',
      htmlFor: 'username',
      children: 'Nombre se usuario',
      type: 'text',
      name: 'username',
      placeholder: 'Nombre se usuario'
    },
    {
      id: 'first-name',
      htmlFor: 'first-name',
      children: 'Nombre',
      type: 'text',
      name: 'nombre',
      placeholder: 'Nombre'
    },
    {
      id: 'last-name',
      htmlFor: 'last-name',
      children: 'Apellido',
      type: 'text',
      name: 'apellido',
      placeholder: 'Apellido'
    },
    {
      id: 'email',
      htmlFor: 'email-address',
      children: 'Dirección de correo electrónico',
      type: 'email',
      name: 'email',
      placeholder: 'Correo electrónico'
    },
    {
      id: 'password',
      htmlFor: 'password',
      children: 'Contraseña',
      type: 'password',
      name: 'password',
      placeholder: 'Contraseña'
    },
    {
      id: 'avatar',
      htmlFor: 'avatar',
      children: 'Avatar',
      type: 'file',
      name: 'avatar',
      placeholder: 'URL del avatar'
    }
  ]

  const renderLinks = (links) => {
    return links.map((link) => (
      <div key={link.id}>
        <label htmlFor={link.htmlFor} className="sr-only">{link.children}</label>
        <input
          type={link.type}
          name={link.name}
          id={link.id}
          placeholder={link.placeholder}
          className="login-input"
          onChange={handleChange}
        />
      </div>
    ))
  }

  return {
    inputs,
    renderLinks
  }
}

export default useInputs;