// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import AOS from 'aos';


import MainLayout from './Layout/MainLayout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import AutoTapetes from './pages/AutoTapetes';
import GlobalProvider from './context/GlobalContext';
import CoberturaPageUniversal from './pages/CoberturaUniversal/[id]';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import AutoCoberturasUniversaisPage from './pages/AutoCoberturasUniversaisPage';
import AutoCoberturasMedida from './pages/AutoCoberturasMedida';
import TapetesEvents from './pages/TapetesEvents';
import TapetesEntrance from './pages/TapetesEntrance';
import TapetesOffice from './pages/TapetesOffice';
import AlcatifaEventosPage from './pages/AlcatifaEventos/[id]';
import CartPage from './pages/Cart';
import NotFound from './pages/NotFound';
import Nautica from './pages/Nautica';
import Aviation from './pages/Aviation';
import Houses from './pages/Houses';
import HousesEntrance from './pages/HousesEntrance';
import HousesProductPage from './pages/Houses/[id]';
import Grass from './pages/Grass';
import About from './pages/About';
import Contacts from './pages/Contacts';
import FAQS from './pages/FAQS';

const App = () => {
    useEffect(() => {
        AOS.init({
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);

    return (
        <>
            <Helmet>
                <title>FOFAL</title>
                <meta name="description" content="COBERTURAS PARA AUTOMÓVEIS - Personalize a cobertura para o seu automóvel - TAPETES AUTOMÓVEL - AVIÕES & BARCOS - Alcatifas" />
            </Helmet>

            <GlobalProvider>
                {/* <BrowserRouter basename='/a-fofal/'> */}
                <BrowserRouter>
                    <ScrollToTop />
                    <MainLayout>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/auto/tapetes" element={<AutoTapetes />} />
                            <Route path="/auto/coberturas-medida" element={<AutoCoberturasMedida />} />
                            <Route path="/auto/coberturas-universais" element={<AutoCoberturasUniversaisPage />} />
                            <Route path="/auto/cobertura-universal/:id" element={<CoberturaPageUniversal />} />
                            <Route path="/comercio-industria/alcatifas-eventos" element={<TapetesEvents />} />
                            <Route path="/comercio-industria/tapetes-entrada" element={<TapetesEntrance />} />
                            <Route path="/comercio-industria/tapetes-escritorio" element={<TapetesOffice />} />
                            <Route path="/comercio-industria/alcatifas-eventos/:id" element={<AlcatifaEventosPage />} />
                            <Route path="/comercio-industria/tapetes-entrada/:id" element={<AlcatifaEventosPage />} />
                            <Route path="/nautica" element={<Nautica />} />
                            <Route path="/aviacao" element={<Aviation />} />
                            <Route path="/casas/alcatifas-casa" element={<Houses />} />
                            <Route path="/casas/tapetes-entrada" element={<HousesEntrance />} />
                            <Route path="/casas/alcatifas-casa/:id" element={<HousesProductPage />} />
                            <Route path="/casas/tapetes-entrada/:id" element={<HousesProductPage />} />
                            <Route path="/relva" element={<Grass />} />
                            <Route path="/sobre" element={<About />} />
                            <Route path="/contacto" element={<Contacts />} />
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/signup" element={<SignupPage />} />
                            <Route path="/cart" element={<CartPage />} />
                            <Route path="/faqs" element={<FAQS />} />
                            <Route path="/*" element={<NotFound />} />
                        </Routes>
                    </MainLayout>
                </BrowserRouter>
                <Toaster position="bottom-right" reverseOrder={false}/>
            </GlobalProvider>
        </>
    );
};

export default App;
