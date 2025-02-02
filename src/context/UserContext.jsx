import { createContext, useContext, useState } from "react";
import { userData } from "@/lib/mock"; // Simula a chamada da API
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import axios from "axios";

const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(userData);
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    setLoading(true);

    try {
      const res = await axios.post("/auth/login", { email, password });

      setUser(res.data.user);
      res.status === 200 && toast.success("Login bem-sucedido!");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Utilizador ou palavra-passe incorreta. por favor tente nvamente."
      );
    } finally {
      setLoading(false);
    }
  };

  const signup = async (
    primeiro_nome,
    ultimo_nome,
    email,
    password,
    data_nascimento,
    politica_privacidade,
    empresa,
    pais,
    morada,
    codigo_postal,
    cidade,
    distrito,
    telefone,
    nif
  ) => {
    setLoading(true);

    try {
      const res = await axios.post("/auth/signup", {
        primeiro_nome,
        ultimo_nome,
        email,
        password,
        data_nascimento,
        politica_privacidade,
        empresa,
        pais,
        morada,
        codigo_postal,
        cidade,
        distrito,
        telefone,
        nif,
      });
      res.status === 201 && setUser(res.data.user);
      toast.success("Registo efetuado com sucesso, redirecionando para a página de login!");
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
