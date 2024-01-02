export const useLogin = () => {
  
  const api_base_url = 'http://localhost:4000/auth';

  const loginUser = async (userData) => {
    try {
      const response = await fetch(`${api_base_url}/login`, {
        body: userData
      })
      const data = response.json();
      return data;
    } catch (error) {
      throw error.response.data
    }
  }
  
  return {
    loginUser
  }
}