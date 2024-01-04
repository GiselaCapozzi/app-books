import { useAuth } from '../context/AuthContext';


const Home = () => {

const { user, isAuthenticated, token } = useAuth();
console.log({user, isAuthenticated, token})

return (
    <div>
      <p>{user.username}</p>
    </div>
  )
}

export default Home