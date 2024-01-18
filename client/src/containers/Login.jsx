import { useLogin } from "../hooks/useLogin";
import LoginForm from "../containers/LoginForm";

const Login = () => {

const { handleChange, handleSubmit } = useLogin();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Iniciar sesion</h2>
        </div>
        <LoginForm 
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  )
}

export default Login