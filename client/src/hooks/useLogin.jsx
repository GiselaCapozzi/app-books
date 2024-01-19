import { useState } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../slice/auth/authSlice";
import { API_ENDPOINTS } from "../api";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      const { user, token, isAuthenticated = true } = await loginUser(userData);
      dispatch(setToken({ user, token, isAuthenticated }))
      sessionStorage.setItem('user', JSON.stringify({user, token, isAuthenticated }))
      navigate('/')
      alert('Inicio sesión')
    } catch (error) {

    }
  }

  const loginUser = async (userData) => {
    try {
      const response = await fetch(`${API_ENDPOINTS.USERS}/login` || `https://app-books-beta.vercel.app/auth/login`, {
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