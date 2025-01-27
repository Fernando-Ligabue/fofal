import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { GiShoppingCart } from "react-icons/gi";
import { Heart, Menu, Search, User2, X } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { navLinks } from '@/lib/constants';
import logoSvg from '/logo-svg.svg';

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation(); // Obter a localização atual

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };

    const getLinkClassNames = (path) => {
        return location.pathname === path
            ? 'mx-2 text-white font-bold underline cursor-pointer'
            : 'mx-2 text-white no-underline cursor-pointer';
    };

    return (
        <header className='w-full absolute top-0 left-0'>
            <div className='w-full mx-auto text-white font-brandon-300 text-xs p-2 bg-primary flex justify-center items-center'>
                <p className='font-brandon-400'>RÁPIDO, PORTES GRÁTIS E DEVOLUÇÕES</p>
            </div>
            <div className='w-full max-w-container mx-auto'>
                <div className='flex justify-between items-start md:items-center gap-6 px-4 py-4'>
                    <div className='w-full flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0'>
                        <div className="logo">
                            <NavLink to="/" className={getLinkClassNames('/')}>
                                <img src={logoSvg} className='w-full max-w-52' alt="Logo FOFAL" />
                            </NavLink>
                        </div>

                        {/* Nav desktop */}
                        <nav className="hidden xl:flex justify-between items-center p-2.5 text-white z-50">
                            <ul className="menu flex list-none text-xl font-brandon-400">
                                {/* Navegação Interna */}
                                {navLinks.map((link, index) => (
                                    <li key={index}>
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
                        <div className="flex items-center space-x-4">
                            <Button className='bg-transparent text-white font-brandon-400 px-8 py-2 !border border-1 border-white rounded-full'>
                                Login
                            </Button>
                            <div className="flex space-x-2">
                                <Search size={22} className='text-white' />
                                <Heart size={22} className='text-white' />
                                <User2 size={22} className='text-white' />
                                <GiShoppingCart size={22} className='text-white rotate-logo' />
                            </div>
                        </div>
                    </div>
                    <div className="xl:hidden flex items-center mt-4 md:mt-0">
                        <Menu
                            size={48}
                            onClick={toggleSidebar}
                            className="text-white p-2 rounded-md cursor-pointer"
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
                        size={36}
                        onClick={toggleSidebar}
                        className="absolute top-8 right-4 text-white cursor-pointer"
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
                                    className={() => getLinkClassNames(link.link)}
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
