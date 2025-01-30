import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { GiShoppingCart } from "react-icons/gi";
import { Heart, Menu, Search, User2, X } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { navLinks } from '@/lib/constants';
import logoSvg from '/logo-svg.svg';
import logoAuto from '/logo-auto.svg';
import logoComInd from '/logo-comind.svg';
import logoNautico from '/logo-nautico.svg';
import logoCasa from '/logo-casa.svg';
import { useUser } from '@/context/UserContext';

const Header = () => {
    const { user } = useUser();
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
        switch (location.pathname) {
            case '/auto':
                return logoAuto;
            case '/com-ind':
                return logoComInd;
            case '/nautica':
                return logoNautico;
            case '/aviation':
                return logoNautico;
            case '/house':
                return logoCasa;
            default:
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
                    <div className='w-full flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0'>
                        <div className="logo">
                            <NavLink to="/" className={getLinkClassNames('/')}>
                                <img src={getLogoSrc()} className='w-full max-w-52' alt="Logo FOFAL" />
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
                        <div className={`flex items-center space-x-4 ${isHome ? 'text-white' : 'text-black'}`}>
                            <Button className={`bg-transparent font-brandon-400 px-8 py-2 !border border-1 rounded-full ${isHome ? 'text-white border-white' : 'text-black border-black hover:bg-white'}`}
                            onClick={handleLoginPage}
                            >
                                Login
                            </Button>
                            {user && (
                                <div className={`flex space-x-2 ${isHome ? 'text-white' : 'text-black'}`}>
                                    <Search size={22} className={`text-current`} />
                                    <Heart size={22} className={`text-current`} />
                                    <User2 size={22} className={`text-current`} />
                                    <div className='relative'>
                                        <GiShoppingCart size={22} className={`text-current rotate-logo`} />
                                        <span className='h-3 w-3 bg-gradient text-white text-[8px] rounded-full absolute top-0 left-0 flex justify-center items-center font-brandon-300'>2</span>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                    <div className={`xl:hidden flex items-center mt-4 md:mt-0 ${isHome ? 'text-white' : 'text-black'}`}>
                        <Menu
                            size={48}
                            onClick={toggleSidebar}
                            className="p-2 rounded-md cursor-pointer"
                        />
                    </div>
                </div>
            </div>

            {/* Sidebar mobile */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-70 z-50 xl:hidden transition-all duration-300 ease-in-out ${isSidebarOpen ? 'w-full' : 'w-0'
                    }`}
            >
                <div
                    className={`flex flex-col justify-center items-center gap-14 bg-black text-white h-full p-4 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <X
                        size={28}
                        onClick={toggleSidebar}
                        className="absolute top-16 right-4 text-white cursor-pointer"
                    />
                    <div className="logo">
                        <NavLink to="/" className={getLinkClassNames('/')}>
                            <img src={logoSvg} className='w-full max-w-52' alt="Logo FOFAL" onClick={toggleSidebar} />
                        </NavLink>
                    </div>
                    <ul className="space-y-8 text-center">
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
