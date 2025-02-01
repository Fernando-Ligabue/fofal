import { useUser } from "@/context/UserContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  EarthIcon,
  Lock,
  LogIn,
  Mail,
  Package,
  Phone,
  User2,
  UserRoundCogIcon,
  Building2,
  MapPinHouse,
  Map,
  Building,
  Loader,
} from "lucide-react";

import SelectCountry from "@/components/SelectCountry";
import InputForm from "@/components/InputForm";
import toast from "react-hot-toast";
const SignupPage = () => {
  const { signup, loading } = useUser();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [formData, setFormData] = useState({
    primeiro_nome: "",
    ultimo_nome: "",
    email: "",
    password: "",
    data_nascimento: "",
    empresa: "",
    pais: "",
    morada: "",
    codigo_postal: "",
    cidade: "",
    distrito: "",
    telefone: "",
    nif: "",
    politica_privacidade: false,
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{10,}$/;

  const codigoPostalRegex = /^\d{4}-\d{3}$/;

  const telefoneRegex = /^\d+$/;
  const nifRegex = /^\d+$/;

  const validateFormRegister = () => {
    if (!formData.primeiro_nome.trim() || formData.primeiro_nome.length < 5) {
      toast.error(
        "Por favor, insira o primeiro nome, deve conter ao menos 5 caracteres."
      );
      return false;
    }

    if (!formData.ultimo_nome.trim() || formData.ultimo_nome.length < 5) {
      toast.error(
        "Por favor, insira o último nome, deve conter ao menos 5 caracteres."
      );
      return false;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      toast.error("Por favor, insira um email válido.");
      return false;
    }

    if (!formData.password) {
      toast.error("Por favor, insira uma palavra passe.");
      return false;
    }

    if (!passwordRegex.test(formData.password)) {
      toast.error(
        "A palavra passe deve ter pelo menos 10 caracteres, uma letra maiúscula, uma letra minúscula e um caractere especial."
      );
      return false;
    }

    if (formData.password !== confirmPassword) {
      toast.error("As palavras passes não coincidem.");
      return false;
    }

    if (!formData.data_nascimento || formData.data_nascimento.trim() === "") {
      toast.error("Por favor, insira a data de nascimento.");
      return false;
    }

    if (!formData.pais) {
      toast.error("Por favor, selecione o país.");
      return false;
    }

    if (!formData.morada || formData.morada.length < 5) {
      toast.error(
        "Por favor, preencha a morada, deve conter ao menos 5 caracteres."
      );
      return false;
    }

    if (
      !formData.codigo_postal ||
      !codigoPostalRegex.test(formData.codigo_postal)
    ) {
      toast.error(
        "Por favor, insira um código postal válido (formato: 0000-000)."
      );
      return false;
    }

    if (!formData.cidade || formData.cidade.length < 3) {
      toast.error(
        "Por favor, preencha a cidade, deve conter ao menos 3 caracteres."
      );
      return false;
    }

    if (!formData.distrito || formData.distrito.length < 3) {
      toast.error(
        "Por favor, preencha o distrito, deve conter ao menos 3 caracteres."
      );
      return false;
    }

    if (
      !formData.telefone ||
      formData.telefone.length < 9 ||
      formData.telefone.length > 13 ||
      !telefoneRegex.test(formData.telefone)
    ) {
      toast.error(
        "Por favor, insira um número de telefone válido, entre 9 e 13 dígitos."
      );
      return false;
    }

    if (
      !formData.nif ||
      formData.nif.length < 9 ||
      formData.nif.length > 9 ||
      !nifRegex.test(formData.nif)
    ) {
      toast.error(
        "Por favor, insira um número de NIF válido com no máximo 9."
      );
      return false;
    }

    if (!formData.politica_privacidade) {
      toast.error(
        "Para efetuar o registo, você deve aceitar a nossa Política de Privacidade e Cookies."
      );
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateFormRegister();
    if (!isValid) {
      return;
    }

    signup(formData);

    setFormData({
      primeiro_nome: "",
      ultimo_nome: "",
      email: "",
      password: "",
      data_nascimento: "",
      empresa: "",
      pais: "",
      morada: "",
      codigo_postal: "",
      cidade: "",
      distrito: "",
      telefone: "",
      nif: "",
      politica_privacidade: false,
    });
    setConfirmPassword("");
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
            Registar Nova Conta
          </h1>
        </div>

        <div className="w-full max-w-lg mx-auto">
          <div className="py-8 px-4 sm:rounded-lg sm:px-10">
            <form
              onSubmit={handleSubmit}
              autoComplete="on"
              className="space-y-10"
            >
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                  <InputForm
                    id="primeiro_nome"
                    type="text"
                    value={formData.primeiro_nome}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        primeiro_nome: e.target.value,
                      })
                    }
                    label="Primeiro Nome"
                    placeholder="John"
                    icon={User2}
                  />
                  <InputForm
                    id="ultimo_nome"
                    type="text"
                    value={formData.ultimo_nome}
                    onChange={(e) =>
                      setFormData({ ...formData, ultimo_nome: e.target.value })
                    }
                    label="Último Nome"
                    placeholder="Doe"
                    icon={User2}
                  />
                </div>

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

                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
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
                  <InputForm
                    id="confirm-password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    label="Confirmar Palavra Passe"
                    placeholder="••••••••"
                    icon={Lock}
                    showPassword={showConfirmPassword}
                    toggleShowPassword={handleShowConfirmPassword}
                  />
                </div>

                <InputForm
                  id="data_nascimento"
                  type="date"
                  value={formData.data_nascimento}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      data_nascimento: e.target.value,
                    })
                  }
                  label="Data de Nascimento"
                  icon={Calendar}
                />

                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                  <InputForm
                    id="empresa"
                    type="text"
                    value={formData.empresa}
                    onChange={(e) =>
                      setFormData({ ...formData, empresa: e.target.value })
                    }
                    label="Empresa"
                    placeholder="Empresa xyz"
                    icon={Building2}
                  />
                  <div className="flex-1">
                    <span className="block text-sm font-brandon-500 text-fofalText">
                      País
                    </span>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <EarthIcon
                          className="h-5 w-5 text-zinc-300"
                          aria-hidden="true"
                        />
                      </div>
                      <SelectCountry
                        id="pais"
                        value={formData.pais}
                        onChange={(selectedCountry) => {
                          setFormData({
                            ...formData,
                            pais: selectedCountry,
                          });
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                  <InputForm
                    id="morada"
                    type="text"
                    value={formData.morada}
                    onChange={(e) =>
                      setFormData({ ...formData, morada: e.target.value })
                    }
                    label="Morada"
                    placeholder="Rua, Av, etc"
                    icon={MapPinHouse}
                  />
                  <div className="flex-1">
                    <InputForm
                      id="codigo_postal"
                      type="text"
                      value={formData.codigo_postal}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          codigo_postal: e.target.value,
                        })
                      }
                      label="Código Postal"
                      placeholder="Rua, Av, etc"
                      icon={Package}
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                  <InputForm
                    id="cidade"
                    type="text"
                    value={formData.cidade}
                    onChange={(e) =>
                      setFormData({ ...formData, cidade: e.target.value })
                    }
                    label="Cidade"
                    placeholder="Sua cidade"
                    icon={Building}
                  />
                  <div className="flex-1">
                    <InputForm
                      id="distrito"
                      type="text"
                      value={formData.distrito}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          distrito: e.target.value,
                        })
                      }
                      label="Distrito"
                      placeholder="Lisboa, Porto, etc"
                      icon={Map}
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                  <InputForm
                    id="telefone"
                    type="text"
                    value={formData.telefone}
                    onChange={(e) =>
                      setFormData({ ...formData, telefone: e.target.value })
                    }
                    label="Telefone"
                    placeholder="Seu telefone"
                    icon={Phone}
                  />
                  <div className="flex-1">
                    <InputForm
                      id="nif"
                      type="text"
                      value={formData.nif}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          nif: e.target.value,
                        })
                      }
                      label="NIF"
                      placeholder="999 999 999"
                      icon={UserRoundCogIcon}
                    />
                  </div>
                </div>

                <div className="flex justify-start items-center gap-2">
                  <InputForm
                    id="politica_privacidade"
                    type="checkbox"
                    checked={formData.politica_privacidade}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        politica_privacidade: e.target.checked,
                      });
                    }}
                  />
                  <span className="block text-sm font-brandon-500 text-zinc-400">
                    Li e compreendi a politica de privacidade e cookies
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent 
                    rounded-full text-sm font-medium text-white bg-gradient max-w-96 mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
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
                    Registar
                  </>
                )}
              </button>

              <p className="flex flex-col md:flex-row justify-between md:items-center gap-4 mt-8 text-center text-sm text-zinc-400">
                <span className="font-brandon-500 pointer-events-none">
                  Já possui uma conta?
                </span>
                <Link to="/login" className="font-brandon-500 text-fofalText">
                  Efetuar Login <ArrowRight className="inline h-4 w-4" />
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
