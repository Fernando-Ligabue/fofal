import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LogIn, Mail, Lock, ArrowRight, Loader, Eye, EyeClosed } from "lucide-react";

import { useUser } from "@/context/UserContext";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const { login, loading } = useUser();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);



    const handleShowPassword = () => setShowPassword(!showPassword);
    const handleSubmit = (e) => {
        e.preventDefault();

        login(email, password);
        setEmail("");
        setPassword("");
    };

    return (
        <section className="flex flex-col justify-between gap-10" data-aos="fade-up" data-aos-delay="300">
            <div className='w-full max-w-container mx-auto flex flex-col justify-center py-60 sm:py-40 sm:px-6 lg:px-8 space-y-6'>
                <div className='sm:mx-auto sm:w-full sm:max-w-md'>
                    <h1 className='mt-6 text-center text-5xl font-brandon-400 text-fofalText'>Login</h1>
                </div>

                <div className="w-full max-w-lg mx-auto">
                    <div className='py-8 px-4 sm:rounded-lg sm:px-10'>
                        <form onSubmit={handleSubmit} className='space-y-14'>
                            <div className="space-y-6">
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
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className='input-form'
                                            placeholder='email@example.com'
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor='password' className='block text-sm font-brandon-500 text-fofalText'>
                                        Palavra Passe
                                    </label>
                                    <div className='mt-1 relative rounded-md shadow-sm'>
                                        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                            <Lock className='h-5 w-5 text-zinc-300' aria-hidden='true' />
                                        </div>
                                        <div className='absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer' onClick={handleShowPassword}>
                                            {showPassword ? (
                                                <EyeClosed className='h-5 w-5 text-zinc-300' aria-hidden='true' />
                                            ) : (
                                                <Eye className='h-5 w-5 text-zinc-300' aria-hidden='true' />
                                            )
                                            }
                                        </div>
                                        <input
                                            id='password'
                                            type={showPassword ? "text" : "password"}
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className='input-form'
                                            placeholder='••••••••'
                                        />
                                    </div>
                                </div>
                            </div>

                            <p className='flex justify-between items-center gap-4 mt-8 text-center text-sm text-zinc-400'>
                                <span className="font-brandon-500 cursor-pointer" onClick={() => { }}>Esqueceu-se da palavra-passe?</span>{" "}
                                <Link to='/signup' className='font-brandon-500 text-fofalText'>
                                    Registar Nova Conta <ArrowRight className='inline h-4 w-4' />
                                </Link>
                            </p>

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
