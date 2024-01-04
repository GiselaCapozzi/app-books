import { useState } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../slice/auth/authSlice";
import { API_ENDPOINTS } from "../api";

export const useLogin = () => {

  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })

  const handleChange = ({ target: { name, value } }) => {
    setUserData({
      ...userData,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user, token } = await loginUser(userData);
      console.log(user)
      dispatch(setToken({ user, token }))
      alert('Inicio sesión')
    } catch (error) {

    }
  }

  const loginUser = async (userData) => {
    try {
      const response = await fetch(`${API_ENDPOINTS.USERS}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
      })

      if (!response.ok) {
        const errorData = await response.json();
        throw errorData;
      }

      const responseData = await response.json();
      return responseData;
    } catch (error) {
      throw error.error
    }
  }

  return {
    handleChange,
    handleSubmit
  }
}