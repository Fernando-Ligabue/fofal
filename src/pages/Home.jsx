import { useEffect } from 'react';
import AOS from 'aos';

import FiltersHome from '@/components/FiltersHome';

import { heroHome, sobMedidaBanner, categoriesHome, iconsHome } from '@/lib/constants';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
    useEffect(() => {
        AOS.init({
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);

    return (
        <>
            {/* Hero Section */}
            <section
                className="w-full min-h-screen bg-banner flex items-center justify-center text-center text-white p-4"
                style={{ backgroundImage: `url(${heroHome})` }}
            >
                <div className="hero-content py-60" data-aos="fade-up" data-aos-delay="300">
                    <h1 className="text-4xl md:text-6xl font-brandon-900  mb-4 text-fofalYellow">PERSONALIZAÇÃO</h1>
                    <h2 className="text-4xl md:text-6xl font-brandon-900  mb-6">EXECUTAMOS À MEDIDA</h2>
                    <FiltersHome />
                </div>
            </section>

            {/* Text Section */}
            <section className="p-12 w-full" data-aos="fade-up" data-aos-delay="300">
                <div className='w-full max-w-container mx-auto  grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4'>
                    <div className="w-full max-w-96 text-fofalText text-2xl font-brandon-300 leading-relaxed">
                        <p>Oferecemos um atendimento de excelência, flexibilidade e acabamentos de elevada qualidade.</p>
                    </div>
                    <div className="right w-full text-lg leading-relaxed">
                        <h2 className='text-5xl text-fofalText font-brandon-500'>
                            Em todos os trabalhos fornecemos produtos à medida e personalizados, executando o levantamento
                            de medidas no local e aplicação dos trabalhos se necessário.
                        </h2>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="categories px-12 py-12 space-y-20" data-aos="fade-up" data-aos-delay="300">
                <h2 className="text-3xl font-brandon-800 mb-6 max-w-container mx-auto">Categorias</h2>

                <div className="category-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-container mx-auto">
                    {categoriesHome.map((item) => ((
                        <NavLink to={item.href} key={item.id} className="relative overflow-hidden rounded-xl transition-transform hover:scale-105 text-center">
                            <img
                                src={item.imageUrl}
                                alt="Automóvel"
                                className="w-full rounded-xl transition-all ease-in-out"
                            />
                            <h3 className="text-2xl mt-4 font-brandon-800">{item.label}</h3>
                            <p className='font-brandon-400 text-lg'>{item.description}</p>
                        </NavLink>
                    )))}
                </div>

                <div className="category-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {iconsHome.map((item) => ((
                        <div key={item.id} className="relative overflow-hidden flex flex-col justify-between items-center text-center">
                            <img
                                src={item.imageUrl}
                                alt={item.label}
                                className="w-14 h-14"
                            />
                            <h3 className="text-2xl mt-4 font-brandon-800">{item.label}</h3>
                            <p className='font-brandon-400 text-lg'>{item.description}</p>
                        </div>
                    )))}
                </div>
            </section>

            {/* Custom Product Section */}
            <section
                className="h-screen bg-banner flex flex-col items-center justify-center text-white"
                style={{ backgroundImage: `url(${sobMedidaBanner})` }}
                data-aos="fade-up" data-aos-delay="300"
            >
                <h2 className="text-7xl font-brandon-800 mb-6">Produto à medida</h2>
                <div className="buttons flex space-x-4">
                    <button className="text-white font-brandon-500 text-2xl btn-white">
                        Aviões
                    </button>
                    <button className="text-white font-brandon-500 text-2xl btn-white">
                        Barcos
                    </button>
                </div>
            </section>
        </>
    );
};

export default HomePage;
