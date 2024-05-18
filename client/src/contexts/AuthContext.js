import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { loginRequest, registerRequest } from "../services/auth";
import { useToast } from "@chakra-ui/react"; // Import useToast from ChakraUI

import useLocalStorage from "../utils/useLocalStorage";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useLocalStorage("token", null);
  const [user, setUser] = useLocalStorage("user", null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const toast = useToast(); // Initialize useToast

  useEffect(() => {
    setLoading(true);
    if (token) {
      const decodedToken = jwt_decode(token);
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp < currentTime) {
        setToken(null);
        setUser(null);
      }
    }
    setLoading(false);
  }, [token, setToken, setUser]);

  const handleToken = (token) => {
    setToken(token);
    const decodedToken = jwt_decode(token);
    setUser({
      email: decodedToken.sub,
      firstName: decodedToken.firstName,
      lastName: decodedToken.lastName,
      role: decodedToken.role,
    });
    if (decodedToken.role === "ADMIN") {
      navigate("/admin");
    } else {
      navigate("/");
    }
  };

  const login = async (e) => {
    e.preventDefault();
    let response = await loginRequest(
      e.target.email.value,
      e.target.password.value
    );
    let data = await response.json();

    if (response.ok) {
      handleToken(data.token);
    } else {
      toast({
        title: "Login Failed",
        description: "Please check your credentials and try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const register = async (e) => {
    e.preventDefault();
    let response = await registerRequest(
      e.target.email.value,
      e.target.firstName.value,
      e.target.lastName.value,
      e.target.password.value,
      e.target.password2.value
    );
    let data = await response.json();
    if (response.ok) {
      handleToken(data.token);
    } else {
      toast({
        title: "Registration Failed",
        description: "Please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    navigate("/login");
  };

  const voluntaryLogout = () => {
    setToken(null);
    setUser(null);
    toast({
      title: "Logged out",
      description: "You have been logged out.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const contextData = {
    token,
    user,
    loading,
    login,
    register,
    logout,
    voluntaryLogout,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
