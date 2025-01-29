/* eslint-disable react-hooks/exhaustive-deps */
import { useCobUniversal } from "@/context/CobUniversalContext";
import { ChevronRight, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const CoberturasUniversais = () => {
  const { products } = useCobUniversal();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortType, setSortType] = useState('relevant');
  const [openFilters, setOpenFilters] = useState(true)

  const navigate = useNavigate();

  // Função para filtrar os produtos com base na categoria
  const filterProducts = (category) => {
    if (!category) return products;
    return products.filter((product) => product.category === category);
  };

  const sortProducts = () => {
    let sortered = filteredProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilteredProducts(sortered.sort((a, b) => (a.price - b.price)));
        break;

      case 'high-low':
        setFilteredProducts(sortered.sort((a, b) => (b.price - a.price)));
        break;

      case 'relevant':
        setFilteredProducts(sortered.sort((a, b) => {
          if (a.isNew && !b.isNew) return -1;
          if (!a.isNew && b.isNew) return 1;

          return 0;
        }));
        break;

      default:
        applyFilters();
        break;
    }
  }

  const applyFilters = () => {
    let filtered = products.slice();
    setFilteredProducts(filtered);
  };

  const handleOpenFilters = () => {
    setOpenFilters(!openFilters);
  }

  useEffect(() => {
    setFilteredProducts(filterProducts(selectedCategory));
  }, [products, selectedCategory]);

  useEffect(() => {
    sortProducts();
  }, [sortType]);


  const handleSetCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleViewProduct = (productId) => {
    navigate(`/auto/cobertura-universal/${productId}`);
  };

  return (
    <section className="py-10 flex flex-col lg:flex-row justify-between gap-10">
      {/* filtros */}
      <div className="flex flex-col justify-start gap-2">
        <div className="w-full lg:max-w-60 min-w-60 md:sticky relative md:top-10">
          <p className="w-full my-2 text-2xl text-fofalText font-brandon-800 flex items-center cursor-pointer gap-2" onClick={handleOpenFilters}>
            Filtros
            <ChevronRight className={`w-5 h-5 transition-all ease-in-out duration-300 ${openFilters ? 'rotate-90' : 'rotate-0'}`} />
            {selectedCategory !== '' && <><span className="w-fit ml-auto font-brandon-400 text-sm" onClick={() => setSelectedCategory('')}>Limpar filtros</span> <X size={10} /></>}
          </p>
          {openFilters && (
            <div className='py-3 sm:block'>
              <div className="flex flex-col text-md">
                {['autocaravana', 'automovel', 'caravana', 'motociclo', 'scooter'].map((category) => (
                  <div key={category} className="w-full border-t border-fofalText py-3 px-1 cursor-pointer hover:bg-zinc-300">
                    <p
                      className="font-brandon-400"
                      onClick={() => handleSetCategory(category)}
                    >
                      {`Coberturas Universais ${category.charAt(0).toUpperCase() + category.slice(1)}`}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* produtos */}
      <div className="min-h-[60vh] flex flex-1 flex-col gap-4">
        <div className="w-full flex items-center gap-2">
          <p className="w-fit sm:ml-auto text-zinc-500 font-brandon-800 text-2xl">
            Ordernar por:
          </p>
          <select onChange={(e) => setSortType(e.target.value)} className='w-fit h-10 text-2xl px-2 font-brandon-500 border border-fofalText rounded focus:ring-fofalText focus:ring-1'>
            <option value='relevant'>Destaques</option>
            <option value='low-high'>Menor preço</option>
            <option value='high-low'>Maior preço</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1fr_1fr_1fr] gap-0">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="w-full flex flex-col justify-between border rounded-lg py-8 px-4 space-y-6 hover:bg-bgCards transition-all ease-in-out duration-300 group"
              >
                <div className="relative">
                  {product.isNew && (
                    <span className="absolute top-1 left-1 text-fofalText border border-fofalText px-2 py-1 rounded text-sm">
                      Novo
                    </span>
                  )}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover mb-4"
                  />
                </div>

                <div className="flex gap-2 mt-4 w-full justify-end">
                  <button
                    className="px-4 py-2 bg-bgCards group-hover:bg-white font-brandon-800 text-sm"
                    onClick={() => handleViewProduct(product.id)}
                  >
                    Ver produto
                  </button>
                  <button
                    className="px-4 py-2 bg-bgCards group-hover:bg-white font-brandon-800 text-sm"
                    onClick={() => console.log('add-tocart')}
                  >
                    Adicionar carrinho
                  </button>
                </div>

                <div className="flex flex-col">
                  <h3 className="text-lg font-bold">{product.title}</h3>
                  <p className="text-sm font-brandon-400">
                    Tamanho {product.size} – {product.dimensions}
                  </p>
                </div>
                <p className="text-lg font-brandon-800 mt-2">
                  {(product.price && !isNaN(product.price)) ? product.price.toFixed(2) : 'Preço indisponível'} €
                </p>
              </div>
            ))
          ) : (
            <div className="w-full flex flex-1 justify-center items-center">
              <p className="text-fofalText font-brandon-800 text-2xl">
                Nenhum produto encontrado
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CoberturasUniversais;
