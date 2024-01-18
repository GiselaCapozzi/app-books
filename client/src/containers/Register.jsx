import useInputs from "../hooks/useInputs";
import useRegister from "../hooks/useRegister";
import Button from "../components/Button";

const Register = () => {

  const {
    handleChange,
    handleSubmit
  } = useRegister();
  const { inputs, renderLinks } = useInputs(handleChange);

  return (
    <div className='min-h-screen centrar bg-gray-50'>
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Registrarse</h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            {
              renderLinks(inputs)
            }
          </div>
          <div>
            <Button 
              children='Registrarse'
              type='submit'
              className='button-login'
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register