import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { GiShoppingCart } from "react-icons/gi";
import { Heart, LogOut, Menu, Search, User2, X } from 'lucide-react';

import { navLinks } from '@/lib/constants';
import logoSvg from '/logo-svg.svg';
import logoAuto from '/logo-auto.svg';
import logoComInd from '/logo-comind.svg';
import logoNautico from '/logo-nautico.svg';
import logoCasa from '/logo-casa.svg';
import { useUser } from '@/context/UserContext';
import useCart from '@/hooks/useCart';

const Header = () => {
    const { user, logout } = useUser();
    const { cartCountItems } = useCart();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };

    const isHome = location.pathname === '/';

    const getLinkClassNames = (path) => {
        const pathPrefix = path.substring(0, 4);
        const pathnamePrefix = location.pathname.substring(0, 4);

        return pathnamePrefix === pathPrefix
            ? `mx-2 font-brandon-800 cursor-pointer underline ${isHome ? 'text-white' : 'text-black'}`
            : `mx-2 cursor-pointer ${isHome ? 'text-white' : 'text-black'}`;
    };

    const getLogoSrc = () => {
        if (location.pathname.includes('/auto')) {
            return logoAuto;
        } else if (location.pathname.includes('/comercio-industria')) {
            return logoComInd;
        } else if (location.pathname.includes('/nautica')) {
            return logoNautico;
        } else if (location.pathname.includes('/aviacao')) {
            return logoNautico;
        } else if (location.pathname.includes('/casas')) {
            return logoCasa;
        } else {
            return logoSvg;
        }
    };

    const handleLoginPage = () => {
        navigate('/login');
    }

    return (
        <header className='w-full absolute top-0 left-0 z-50'>
            <div className='w-full mx-auto text-white font-brandon-300 text-xs p-2 bg-primary flex justify-center items-center'>
                <p className='font-brandon-400'>RÁPIDO, PORTES GRÁTIS E DEVOLUÇÕES</p>
            </div>
            <div className='w-full max-w-container mx-auto'>
                <div className='flex justify-between items-start md:items-center gap-6 px-4 sm:py-4'>
                    <div className=' reative w-full flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0 gap-2'>
                        <div className="logo">
                            <NavLink to="/" className={getLinkClassNames('/')}>
                                <img src={getLogoSrc()} className='w-full max-w-52 min-w-52' alt="Logo FOFAL" />
                            </NavLink>
                        </div>

                        {/* Nav desktop */}
                        <nav className="hidden xl:flex justify-between items-center p-2.5 text-white z-50">
                            <ul className="menu flex list-none text-xl font-brandon-400">
                                {/* Navegação Interna */}
                                {navLinks.map((link, index) => (
                                    <li key={index} className='hover:underline'>
                                        <NavLink
                                            to={link.link}
                                            className={() => getLinkClassNames(link.link)}
                                        >
                                            {link.title}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Botões para login e ícones de ações */}
                        <div className={`w-full sm:w-fit flex justify-center sm:justify-between items-center space-x-4 ${isHome ? 'text-white' : 'text-black'}`}>
                            <div className={`flex space-x-2 ${isHome ? 'text-white' : 'text-black'}`}>
                                {user && (<Search size={22} className={`text-current`} />)}
                                {user && (<Heart size={22} className={`text-current`} />)}
                                {user && (<User2 size={22} className={`text-current cursor-pointer`} onClick={() => navigate('/profile')} />)}
                                <div className='relative cursor-pointer' onClick={() => navigate('/cart')}>
                                    <GiShoppingCart size={22} className={`text-current rotate-logo`} />
                                    <span className='h-3 w-3 bg-gradient-auto text-white text-[8px] rounded-full absolute top-0 left-0 flex justify-center items-center font-brandon-300'>{cartCountItems()}</span>
                                </div>
                            </div>
                            {!user &&
                                <button className={`bg-transparent font-brandon-400 px-8 py-2 border rounded-full transition-all ease-in-out duration-300 ${isHome ? 'text-white border-white btn-gradient' : 'text-black border-black btn-gradient hover:text-white hover:border-black'}`}
                                    onClick={handleLoginPage}
                                >
                                    Login
                                </button>
                            }
                            {user && (
                                <>
                                    <LogOut className="block cursor-pointer" size={24} onClick={logout} />
                                </>
                            )}
                        </div>
                    </div>
                    <div className={`absolute md:relative right-2 xl:hidden flex items-center mt-4 md:mt-0 ${isHome ? 'text-white' : 'text-black'}`}>
                        <Menu
                            size={44}
                            onClick={toggleSidebar}
                            className="p-2 rounded-md cursor-pointer"
                        />
                    </div>
                </div>
            </div>

            {/* Sidebar mobile */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-70 z-50 xl:hidden transition-all duration-300 ease-in-out ${isSidebarOpen ? 'w-full' : 'w-0 -left-10'
                    }`}
            >
                <div
                    className={`flex flex-col justify-center items-center gap-6 bg-black text-white h-full p-4 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <X
                        size={28}
                        onClick={toggleSidebar}
                        className="absolute top-16 right-4 text-white cursor-pointer"
                    />
                    <div className="logo">
                        <NavLink to="/" className={getLinkClassNames('/')}>
                            <img src={logoSvg} className='w-full max-w-52 min-w-52' alt="Logo FOFAL" onClick={toggleSidebar} />
                        </NavLink>
                    </div>
                    <ul className="space-y-4 text-center">
                        {navLinks.map((link, index) => (
                            <li key={index} className='font-brandon-400'>
                                <NavLink
                                    to={link.link}
                                    onClick={toggleSidebar}
                                >
                                    {link.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
