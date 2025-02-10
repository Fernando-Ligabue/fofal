import { useState } from "react";
import { Link } from "react-router-dom";
import {
  LogIn,
  Mail,
  Lock,
  ArrowRight,
  Loader,
} from "lucide-react";

import { useUser } from "@/context/UserContext";
import InputForm from "@/components/InputForm";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const { login, loading } = useUser();

  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleSubmit = (e) => {
    e.preventDefault();

    login(formData);

    setFormData({ email: "", password: "" });
  };

  return (
    <section
      className="flex flex-col justify-between gap-10"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div className="w-full max-w-container mx-auto flex flex-col justify-center py-60 sm:py-40 sm:px-6 lg:px-8 space-y-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h1 className="mt-6 text-center text-5xl font-brandon-400 text-fofalText">
            Login
          </h1>
        </div>

        <div className="w-full max-w-lg mx-auto">
          <div className="py-8 px-4 sm:rounded-lg sm:px-10">
            <form onSubmit={handleSubmit} autoComplete="on" className="space-y-14">
              <div className="space-y-6">
                <div>
                  <InputForm
                    id="email"
                    type="email"
                    autocomplete="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    label="Email"
                    placeholder="email@example.com"
                    icon={Mail}
                  />
                </div>

                <div>
                  <InputForm
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    label="Palavra Passe"
                    placeholder="••••••••"
                    icon={Lock}
                    showPassword={showPassword}
                    toggleShowPassword={handleShowPassword}
                  />
                </div>
              </div>

              <p className="flex justify-between items-center gap-4 mt-8 text-center text-sm text-zinc-400">
                <span
                  className="font-brandon-500 cursor-pointer"
                  onClick={() => {}}
                >
                  Esqueceu-se da palavra-passe?
                </span>{" "}
                <Link to="/signup" className="font-brandon-500 text-fofalText">
                  Registar Nova Conta <ArrowRight className="inline h-4 w-4" />
                </Link>
              </p>

              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent 
							rounded-full text-sm font-medium text-white bg-gradient-auto max-w-96 mx-auto"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader
                      className="mr-2 h-5 w-5 animate-spin"
                      aria-hidden="true"
                    />
                    A carregar...
                  </>
                ) : (
                  <>
                    <LogIn className="mr-2 h-5 w-5" aria-hidden="true" />
                    Entrar
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LoginPage;
