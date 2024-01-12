import { useState } from 'react';
import { API_ENDPOINTS } from '../api';
import useAlerta from '../hooks/useAlerta';

const useRegister = () => {

  const [registerData, setRegisterData] = useState({
    username: '',
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    avatar: ''
  });
  
  const { alertaMensaje } = useAlerta();

  const handleChange = ({ target: { name, value } }) => {
    setRegisterData({
      ...registerData,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(registerData);
      alertaMensaje('success', 'Usuario registrado con exito!!')
    } catch (error) {
      console.log(error)
    }
  }
  
  const registerUser = async (registerData) => {
    try {
      const response = await fetch(`${API_ENDPOINTS.USERS}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw errorData;
      }

      const responseData = await response.json();
      return responseData;
    } catch (error) {
      throw error;
    }
  }

  return {
    handleChange,
    handleSubmit
  }
}

export default useRegister