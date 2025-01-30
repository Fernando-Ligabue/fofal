import { createContext, useContext, useState } from 'react';
import { userData } from '@/lib/mock'; // Simula a chamada da API
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import axios from 'axios';

const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(userData);
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    setLoading(true);

    try {
      const res = await axios.post("/auth/login", { email, password });
      
      setUser(res.data.user); 
      toast.success("Login bem-sucedido!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Utilizador ou palavra-passe incorreta. por favor tente nvamente.");
    } finally {
      setLoading(false);
    }
  };

  const signup = async (email, password) => {
    setLoading(true);

    try {
      const res = await axios.post("/auth/signup", { email, password });
      toast.success("Registo efetuado com sucesso, direcionando para o login!");
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
    <UserContext.Provider value={{
      user,
      login,
      signup,
      logout,
      loading,
    }}>
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
    throw new Error('useUser deve ser usado dentro de um UserContextProvider');
  }
  return context;
}
