import { useShop } from "@/context/ShopContext";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const CoberturasUniversais = () => {
  const { products, addToCart } = useShop();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const navigate = useNavigate();

  // Função para filtrar os produtos com base na categoria
  const filterProducts = (category) => {
    if (!category) return products;
    return products.filter((product) => product.category === category);
  };

  useEffect(() => {
    setFilteredProducts(filterProducts(selectedCategory));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products, selectedCategory]);

  const handleSetCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleViewProduct = (productId) => {
    navigate(`/produto/${productId}`);
  };

  return (
    <section className="py-10 flex flex-col lg:flex-row justify-between gap-10">
      {/* filtros */}
      <div className="flex flex-col justify-start gap-6">
        <div className="min-w-60">
          <p className="my-2 text-2xl text-fofalText font-brandon-800 flex items-center cursor-pointer gap-2">
            Filtros
          </p>
          <div className={`py-3 sm:block`}>
            <div className="flex flex-col text-md">
              {['autocaravana', 'automovel', 'caravana', 'motociclo', 'scooter'].map((category) => (
                <div key={category} className="border-t border-fofalText py-3">
                  <p
                    className="cursor-pointer font-brandon-400 hover:font-brandon-800"
                    onClick={() => handleSetCategory(category)}
                  >
                    {`Coberturas Universais ${category.charAt(0).toUpperCase() + category.slice(1)}`}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* produtos */}
      <div className="flex flex-col gap-4">
        <div className="w-full">
          <p className="w-fit ml-auto font-brandon-800 text-2xl">
            Ordernar por:{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-0">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="w-full min-w-80 flex flex-col justify-between border rounded-lg py-8 px-4 space-y-6 hover:bg-bgCards transition-all ease-in-out duration-300 group"
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
                    onClick={() => addToCart(product)}
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
