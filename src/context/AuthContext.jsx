// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);

  // Sync with sessionStorage on mount
  useEffect(() => {
    const logged = sessionStorage.getItem("isLoggedIn") === "true";
    setIsLogged(logged);
  }, []);

  const login = () => {
    sessionStorage.setItem("isLoggedIn", "true");
    setIsLogged(true);
  };

  const logout = () => {
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("userProfile"); // optional
    setIsLogged(false);
  };

  return (
    <AuthContext.Provider value={{ isLogged, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
