// import React from 'react'

import { useUser } from "@/context/UserContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Building, Building2, Calendar, EarthIcon, Eye, EyeClosed, Loader, Lock, LogIn, Mail, Map, MapPinHouse, Package, Phone, User2, UserRoundCogIcon } from "lucide-react";
import SelectCountry from "@/components/SelectCountry";


const SignupPage = () => {
  const { signup, loading } = useUser();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);



  const [formData, setFormData] = useState({
    primeiro_nome: '',
    ultimo_nome: '',
    email: '',
    password: '',
    data_nascimento: '',
    politica_privacidade: '',
    empresa: '',
    pais: '',
    morada: '',
    codigo_postal: '',
    cidade: '',
    distrito: '',
    telefone: '',
    nif: '',
  });

  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(formData);
  };

  return (
    <section className="flex flex-col justify-between gap-10" data-aos="fade-up" data-aos-delay="300">
      <div className='w-full max-w-container mx-auto flex flex-col justify-center py-60 sm:py-40 sm:px-6 lg:px-8 space-y-6'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <h1 className='mt-6 text-center text-5xl font-brandon-400 text-fofalText'>Registar Nova Conta</h1>
        </div>

        <div
          className='w-full max-w-lg mx-auto'
        >
          <div className='py-8 px-4 sm:rounded-lg sm:px-10'>
            <form onSubmit={handleSubmit} className='space-y-14'>
              <div className="space-y-4">
                <div className="flex justify-between items-center gap-4">
                  <div>
                    <label htmlFor='primeiro_nome' className='block text-sm font-brandon-500 text-fofalText'>
                      Primeiro Nome
                    </label>
                    <div className='mt-1 relative rounded-md shadow-sm'>
                      <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                        <User2 className='h-5 w-5 text-zinc-300' aria-hidden='true' />
                      </div>
                      <input
                        id='primeiro_nome'
                        type='text'
                        required
                        value={formData.primeiro_nome}
                        onChange={(e) => setFormData({ ...formData, primeiro_nome: e.target.value })}
                        className='input-form w-full'
                        placeholder='John'
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor='ultimo_nome' className='block text-sm font-brandon-500 text-fofalText'>
                      Último Nome
                    </label>
                    <div className='mt-1 relative rounded-md shadow-sm'>
                      <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                        <User2 className='h-5 w-5 text-zinc-300' aria-hidden='true' />
                      </div>
                      <input
                        id='ultimo_nome'
                        type='text'
                        required
                        value={formData.ultimo_nome}
                        onChange={(e) => setFormData({ ...formData, ultimo_nome: e.target.value })}
                        className='input-form w-full'
                        placeholder='Doe'
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor='email' className='block text-sm font-brandon-500 text-fofalText'>
                    Email
                  </label>
                  <div className='mt-1 relative rounded-md shadow-sm'>
                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                      <Mail className='h-5 w-5 text-zinc-300' aria-hidden='true' />
                    </div>
                    <input
                      id='email'
                      type='email'
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className='input-form'
                      placeholder='email@example.com'
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center gap-4">
                  <div>
                    <label htmlFor='password' className='block text-sm font-brandon-500 text-fofalText'>
                      Palavra Passe
                    </label>
                    <div className='mt-1 relative rounded-md shadow-sm'>
                      <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                        <Lock className='h-5 w-5 text-gray-400' aria-hidden='true' />
                      </div>
                      <input
                        id='password'
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className='input-form'
                        placeholder='••••••••'
                      />
                      <div className='absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer' onClick={handleShowPassword}>
                        {showPassword ? (
                          <EyeClosed className='h-5 w-5 text-zinc-300' aria-hidden='true' />
                        ) : (
                          <Eye className='h-5 w-5 text-zinc-300' aria-hidden='true' />
                        )
                        }
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor='confirm-password' className='block text-sm font-brandon-500 text-fofalText'>
                      Confirmar Palavra Passe
                    </label>
                    <div className='mt-1 relative rounded-md shadow-sm'>
                      <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                        <Lock className='h-5 w-5 text-gray-400' aria-hidden='true' />
                      </div>
                      <input
                        id='confirm-password'
                        type={showConfirmPassword ? 'text' : 'password'}
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className='input-form'
                        placeholder='••••••••'
                      />
                      <div className='absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer' onClick={handleShowConfirmPassword}>
                        {showConfirmPassword ? (
                          <EyeClosed className='h-5 w-5 text-zinc-300' aria-hidden='true' />
                        ) : (
                          <Eye className='h-5 w-5 text-zinc-300' aria-hidden='true' />
                        )
                        }
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor='data_nascimento' className='block text-sm font-brandon-500 text-fofalText'>
                    Data de Nascimento
                  </label>
                  <div className='mt-1 relative rounded-md shadow-sm'>
                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                      <Calendar className='h-5 w-5 text-gray-400' aria-hidden='true' />
                    </div>
                    <input
                      id='data_nascimento'
                      type='date'
                      required
                      value={formData.data_nascimento}
                      onChange={(e) => setFormData({ ...formData, data_nascimento: e.target.value })}
                      className='input-form'
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center gap-4">
                  <div>
                    <label htmlFor='empresa' className='block text-sm font-brandon-500 text-fofalText'>
                      Empresa
                    </label>
                    <div className='mt-1 relative rounded-md shadow-sm'>
                      <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                        <Building2 className='h-5 w-5 text-zinc-300' aria-hidden='true' />
                      </div>
                      <input
                        id='empresa'
                        type='text'
                        required
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                        className='input-form w-full'
                        placeholder='Empresa xyz'
                      />
                    </div>
                  </div>

                  <div className="flex-1">
                    <label htmlFor='pais' className='block text-sm font-brandon-500 text-fofalText'>
                      País
                    </label>
                    <div className='mt-1 relative rounded-md shadow-sm'>
                      <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                        <EarthIcon className='h-5 w-5 text-zinc-300' aria-hidden='true' />
                      </div>
                      <SelectCountry />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center gap-4">
                  <div>
                    <label htmlFor='morada' className='block text-sm font-brandon-500 text-fofalText'>
                      Morada
                    </label>
                    <div className='mt-1 relative rounded-md shadow-sm'>
                      <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                        <MapPinHouse className='h-5 w-5 text-zinc-300' aria-hidden='true' />
                      </div>
                      <input
                        id='morada'
                        type='text'
                        required
                        value={formData.morada}
                        onChange={(e) => setFormData({ ...formData, morada: e.target.value })}
                        className='input-form w-full'
                        placeholder='Av, Rua, etc...'
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor='codigo_postal' className='block text-sm font-brandon-500 text-fofalText'>
                      Código Postal
                    </label>
                    <div className='mt-1 relative rounded-md shadow-sm'>
                      <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                        <Package className='h-5 w-5 text-zinc-300' aria-hidden='true' />
                      </div>
                      <input
                        id='codigo_postal'
                        type='text'
                        required
                        value={formData.codigo_postal}
                        onChange={(e) => setFormData({ ...formData, codigo_postal: e.target.value })}
                        className='input-form w-full'
                        placeholder='0000-000'
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center gap-4">
                  <div>
                    <label htmlFor='cidade' className='block text-sm font-brandon-500 text-fofalText'>
                      Cidade
                    </label>
                    <div className='mt-1 relative rounded-md shadow-sm'>
                      <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                        <Building className='h-5 w-5 text-zinc-300' aria-hidden='true' />
                      </div>
                      <input
                        id='cidade'
                        type='text'
                        required
                        value={formData.cidade}
                        onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                        className='input-form w-full'
                        placeholder='Cidade...'
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor='distrito' className='block text-sm font-brandon-500 text-fofalText'>
                      Distrito
                    </label>
                    <div className='mt-1 relative rounded-md shadow-sm'>
                      <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                        <Map className='h-5 w-5 text-zinc-300' aria-hidden='true' />
                      </div>
                      <input
                        id='distrito'
                        type='text'
                        required
                        value={formData.distrito}
                        onChange={(e) => setFormData({ ...formData, distrito: e.target.value })}
                        className='input-form w-full'
                        placeholder='Distrito...'
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center gap-4">
                  <div>
                    <label htmlFor='telefone' className='block text-sm font-brandon-500 text-fofalText'>
                      Telefone
                    </label>
                    <div className='mt-1 relative rounded-md shadow-sm'>
                      <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                        <Phone className='h-5 w-5 text-zinc-300' aria-hidden='true' />
                      </div>
                      <input
                        id='telefone'
                        type='text'
                        required
                        value={formData.telefone}
                        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                        className='input-form w-full'
                        placeholder='+351 999 999 999'
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor='nif' className='block text-sm font-brandon-500 text-fofalText'>
                      NIF
                    </label>
                    <div className='mt-1 relative rounded-md shadow-sm'>
                      <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                        <UserRoundCogIcon className='h-5 w-5 text-zinc-300' aria-hidden='true' />
                      </div>
                      <input
                        id='nif'
                        type='text'
                        required
                        value={formData.nif}
                        onChange={(e) => setFormData({ ...formData, nif: e.target.value })}
                        className='input-form w-full'
                        placeholder='999 999 999'
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <div className='mt-1 relative rounded-md shadow-sm'>
                    <input
                      id='politica_privacidade'
                      type='checkbox'
                      required
                      value={formData.politica_privacidade}
                      onChange={(e) => setFormData({ ...formData, politica_privacidade: e.target.value })}
                      className='input-form w-full'
                    />
                  </div>
                  <label htmlFor='ultimo_nome' className='block text-sm font-brandon-500 text-zinc-400'>
                    Li e compreendi a politica de privacidade e cokies
                  </label>
                </div>

              </div>
              <button
                type='submit'
                className='w-full flex justify-center py-2 px-4 border border-transparent 
							rounded-full text-sm font-medium text-white bg-gradient max-w-96 mx-auto'
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader className='mr-2 h-5 w-5 animate-spin' aria-hidden='true' />
                    A carregar...
                  </>
                ) : (
                  <>
                    <LogIn className='mr-2 h-5 w-5' aria-hidden='true' />
                    Registar
                  </>
                )}
              </button>
            </form>

            <p className='flex justify-between items-center gap-4 mt-8 text-center text-sm text-zinc-400'>
              <span className="font-brandon-500 pointer-events-none">Já possui uma conta?</span>{" "}
              <Link to='/login' className='font-brandon-500 text-fofalText'>
                Faça Login <ArrowRight className='inline h-4 w-4' />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignupPage