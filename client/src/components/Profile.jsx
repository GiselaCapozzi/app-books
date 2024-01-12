import { faUserLarge } from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";
import { useAuth } from "../context/authContext";

const Profile = () => {

  // const user = {
  //   username: 'nombre_de_usuario',
  //   firstName: 'Nombre',
  //   lastName: 'Apellido',
  //   email: 'correo@ejemplo.com',
  // };

const { user } = useAuth();
  return (
    <div className="flex justify-center items-center max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0 flex">
        {
              !user.avatar
                ? <Icon
                  icon={faUserLarge}
                  size='7x'
                  color='blue'
                  className='avatar'
                />
                : <img
                  src={user.avatar}
                  alt="avatar"
                  className='avatar'
                />
            }
        </div>
        <div className="p-8">
          <div className="uppercase trecking-wide text-sm text-indigo-500 font-semibold">
            {user.username}
          </div>
          <p className="block mt-1 text-lg leading-tight font-medium text-black">{user.nombre} {user.apellido}</p>
          <p className="mt-2 text-gray-500">{user.email}</p>
        </div>
      </div>
    </div>
  )
}

export default Profile