// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import AOS from 'aos';


import MainLayout from './Layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import AutoTapetes from './pages/AutoTapetes';
import GlobalProvider from './context/GlobalContext';
import CoberturaPageUniversal from './pages/CoberturaUniversal/[id]';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import AutoCoberturasUniversaisPage from './pages/AutoCoberturasUniversaisPage';
import AutoCoberturasMedida from './pages/AutoCoberturasMedida';

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
                <BrowserRouter>
                    <MainLayout>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/auto/tapetes" element={<AutoTapetes />} />
                            <Route path="/auto/coberturas-medida" element={<AutoCoberturasMedida />} />
                            <Route path="/auto/coberturas-universais" element={<AutoCoberturasUniversaisPage />} />
                            <Route path="/auto/cobertura-universal/:id" element={<CoberturaPageUniversal />} />
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/signup" element={<SignupPage />} />
                        </Routes>
                    </MainLayout>
                </BrowserRouter>
                <Toaster
                    position="bottom-right"
                    reverseOrder={false}
                />
            </GlobalProvider>
        </>
    );
};

export default App;
