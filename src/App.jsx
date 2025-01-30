// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';


import MainLayout from './Layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Automovel from './pages/Automovel';
import GlobalProvider from './context/GlobalContext';
import CoberturaPage from './pages/CoberturaUniversal/[id]';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';

const App = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <GlobalProvider>
            <BrowserRouter>
                <MainLayout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/auto" element={<Automovel />} />
                        <Route path="/auto/cobertura-universal/:id" element={<CoberturaPage />} />
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
    );
};

export default App;
