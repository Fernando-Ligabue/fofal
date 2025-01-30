import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const categorias = ['Carrinha', 'Carro',];
const marcas = {
    'Carrinha': ['Volkswagen', 'Citroen', 'Renault'],
    'Carro': ['Volkswagen', 'Citroen', 'Renault'],
};

const anos = Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - i);
const modelos = {
    'Volkswagen': ['Tiguan', 'Polo', 'T-Cross'],
    'Citroen': ['C3', 'C4', 'C5'],
};

const FiltersHome = () => {
    const [dropdowns, setDropdowns] = useState({
        categoria: '',
        marca: '',
        ano: '',
        modelo: ''
    });
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    const selectOption = (dropdown, value) => {
        setDropdowns(prev => ({
            ...prev,
            [dropdown]: value,
            ...(dropdown === 'categoria' && { marca: null, ano: null, modelo: null }),
            ...(dropdown === 'marca' && { modelo: null }),
            ...(dropdown === 'marca' && { ano: null })
        }));
        setOpenDropdown(null);
    };

    const handleSubmit = () => {
        console.log('Consulta enviada:', dropdowns);
        setDropdowns({
            categoria: '',
            marca: '',
            ano: '',
            modelo: ''
        });
    };

    const renderDropdown = (dropdown, options) => (
        <div className="relative w-full md:w-48">
            <button
                onClick={() => toggleDropdown(dropdown)}
                className="flex items-center justify-between w-full px-4 py-2 border rounded-full capitalize font-brandon-400"
            >
                {dropdowns[dropdown] || `${dropdown}`}
                <ChevronDown size={20} />
            </button>
            {openDropdown === dropdown && (
                <div className="absolute z-10 w-full bg-white font-brandon-400 text-fofalText sm:text-white text-left sm:bg-transparent max-h-52 mt-1 border rounded-xl shadow-lg overflow-y-auto no-scrollbar cursor-pointer">
                    {options.map(option => (
                        <div
                            key={option}
                            onClick={() => selectOption(dropdown, option)}
                            className="px-4 py-2 hover:bg-gray-100 hover:text-fofalText font-brandon-400 cursor-pointer"
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );

    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-6">
            {renderDropdown('categoria', categorias)}
            {renderDropdown('marca', dropdowns.categoria ? marcas[dropdowns.categoria] : ["Selecione a categoria"])}
            {renderDropdown('ano', anos)}
            {renderDropdown('modelo', dropdowns.marca ? modelos[dropdowns.marca] || [] : ["Selecione a marca"])}
            <button
                onClick={handleSubmit}
                disabled={!dropdowns.modelo}
                className="px-6 py-2 bg-white hover:bg-white/90 text-fofalText rounded-full !border border-1 border-white disabled:opacity-50"
            >
                Personalizar
            </button>
        </div>
    );
};

export default FiltersHome;