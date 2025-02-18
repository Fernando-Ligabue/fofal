import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import axios from "axios";
import { userData } from "@/lib/mock";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export function UserContextProvider({ children }) {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const [user, setUser] = useState(userData || null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (email, password) => {
    setLoading(true);

    try {
      const res = await axios.post(`${baseUrl}/auth/login`, { email, password });
      setUser(res.data.user);
      toast.success("Login bem-sucedido!");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
        "Utilizador ou palavra-passe incorreta. por favor tente nvamente."
      );
    } finally {
      setLoading(false);
    }
  };

  const signup = async (userData) => {
    setLoading(true);

    try {
      console.log(userData);
      const res = await axios.post(`${baseUrl}/auth/register`, userData, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      });
      setUser(res.data.user);
      toast.success("Registo efetuado com sucesso, redirecionando para a página de login!");
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Ocorreu um erro");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    toast.success("Logout efetuado!");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser deve ser usado dentro de um UserContextProvider");
  }
  return context;
}
