// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Automovel from './pages/Automovel';
import { Toaster } from 'react-hot-toast';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <MainLayout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/automovel" element={<Automovel />} />
                    </Routes>
                </MainLayout>
            </BrowserRouter>
            <Toaster
                position="bottom-right"
                reverseOrder={false}
            />
        </>
    );
};

export default App;
