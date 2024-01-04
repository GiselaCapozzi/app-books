import { useAuth } from '../context/authContext';


const Home = () => {

const { user, isAuthenticated, token } = useAuth();
console.log({user, isAuthenticated, token})

return (
    <div>
      <p>{user && user.username}</p>
    </div>
  )
}

export default Home