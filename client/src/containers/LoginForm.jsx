import Button from '../components/Button';
import useInputs from '../hooks/useInputs';

const LoginForm = ({ handleChange, handleSubmit }) => {

const { inputs, renderLinks } = useInputs(handleChange);

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          {
            renderLinks(inputs.slice(3,5))
          }
        </div>
      </div>
      <div>
        <Button 
          type='submit'
          className='button-login'
          children='Iniciar sesión'
        />
      </div>
    </form>
  )
}

export default LoginForm