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

import { fetchAPI } from "@/lib/utils";
const SignupPage = () => {
  const { signup, loading } = useUser();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log(fetchAPI())
  }, []);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    birthDate: "",
    company: "",
    country: "",
    address: "",
    zipCode: "",
    city: "",
    district: "",
    phone: "",
    nif: "",
    privacyPolicy: false,
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

  const phoneRegex = /^\d+$/;
  const nifRegex = /^\d+$/;

  const validateFormRegister = () => {
    if (!formData.first_name.trim() || formData.first_name.length < 5) {
      toast.error(
        "Por favor, insira o primeiro nome, deve conter ao menos 5 caracteres."
      );
      return false;
    }

    if (!formData.last_name.trim() || formData.last_name.length < 5) {
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

    if (!formData.birthDate || formData.birthDate.trim() === "") {
      toast.error("Por favor, insira a data de nascimento.");
      return false;
    }

    if (!formData.country) {
      toast.error("Por favor, selecione o país.");
      return false;
    }

    if (!formData.address || formData.address.length < 5) {
      toast.error(
        "Por favor, preencha a address, deve conter ao menos 5 caracteres."
      );
      return false;
    }

    if (
      !formData.zipCode ||
      !codigoPostalRegex.test(formData.zipCode)
    ) {
      toast.error(
        "Por favor, insira um código postal válido (formato: 0000-000)."
      );
      return false;
    }

    if (!formData.city || formData.city.length < 3) {
      toast.error(
        "Por favor, preencha a city, deve conter ao menos 3 caracteres."
      );
      return false;
    }

    if (!formData.district || formData.district.length < 3) {
      toast.error(
        "Por favor, preencha o district, deve conter ao menos 3 caracteres."
      );
      return false;
    }

    if (
      !formData.phone ||
      formData.phone.length < 9 ||
      formData.phone.length > 13 ||
      !phoneRegex.test(formData.phone)
    ) {
      toast.error(
        "Por favor, insira um número de phone válido, entre 9 e 13 dígitos."
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

    if (!formData.privacyPolicy) {
      toast.error(
        "Para efetuar o registo, você deve aceitar a nossa Política de Privacity e Cookies."
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
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      birthDate: "",
      company: "",
      country: "",
      address: "",
      zipCode: "",
      city: "",
      district: "",
      phone: "",
      nif: "",
      privacyPolicy: false,
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
                    id="first_name"
                    type="text"
                    value={formData.first_name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        first_name: e.target.value,
                      })
                    }
                    label="Primeiro Nome"
                    placeholder="John"
                    icon={User2}
                  />
                  <InputForm
                    id="last_name"
                    type="text"
                    value={formData.last_name}
                    onChange={(e) =>
                      setFormData({ ...formData, last_name: e.target.value })
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
                  id="birthDate"
                  type="date"
                  value={formData.birthDate}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      birthDate: e.target.value,
                    })
                  }
                  label="Data de Nascimento"
                  icon={Calendar}
                />

                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                  <InputForm
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
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
                        id="country"
                        value={formData.country}
                        onChange={(selectedCountry) => {
                          setFormData({
                            ...formData,
                            country: selectedCountry,
                          });
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                  <InputForm
                    id="address"
                    type="text"
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    label="Endereço"
                    placeholder="Rua, Av, etc"
                    icon={MapPinHouse}
                  />
                  <div className="flex-1">
                    <InputForm
                      id="zipCode"
                      type="text"
                      value={formData.zipCode}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          zipCode: e.target.value,
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
                    id="city"
                    type="text"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    label="Cidade"
                    placeholder="Sua cidade"
                    icon={Building}
                  />
                  <div className="flex-1">
                    <InputForm
                      id="district"
                      type="text"
                      value={formData.district}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          district: e.target.value,
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
                    id="phone"
                    type="text"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    label="Telefone"
                    placeholder="+351 999 999 999"
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
                    id="privacyPolicy"
                    type="checkbox"
                    checked={formData.privacyPolicy}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        privacyPolicy: e.target.checked,
                      });
                    }}
                  />
                  <span className="block text-sm font-brandon-500 text-zinc-400">
                    Li e compreendi a Política de Privacidade e Cookies
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent 
                    rounded-full text-sm font-medium text-white bg-gradient-auto max-w-96 mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
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
