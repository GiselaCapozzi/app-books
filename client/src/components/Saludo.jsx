const Saludo = () => {

  const [name, setName] = useState('Usuario');

  return (
    <div>
      <h1>Hola, {name}</h1>
      <p>Bienvenido a mi aplicacion React</p>
    </div>
  )
}

export default Saludo