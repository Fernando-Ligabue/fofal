import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useCobUniversal } from "@/context/CobUniversalContext";
import { itemsAuto } from "@/lib/constants";
import { ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation, useNavigate } from "react-router-dom";

import ProductGridSkeleton from "./ProductGridSkeleton";

const CoberturasUniversais = () => {
  const { filteredProducts, loading, filterProducts } = useCobUniversal();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [openFilters, setOpenFilters] = useState(true);
  const [sortType, setSortType] = useState("relevant");
  const [sortedProducts, setSortedProducts] = useState(filteredProducts);
  const [currentPage, setCurrentPage] = useState(1);  // Track current page
  const productsPerPage = 9; // Number of products per page

  const navigate = useNavigate();
  const location = useLocation();

  const getLinkClassNames = (path) => {
    return location.pathname === path ? `font-brandon-800` : `font-brandon-400`;
  };

  useEffect(() => {
    filterProducts(selectedCategory);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  const handleSetCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleOpenFilters = () => {
    setOpenFilters(!openFilters);
  };

  const handleViewProduct = (productId) => {
    navigate(`/auto/cobertura-universal/${productId}`);
  };

  const sortProducts = (products) => {
    let sorted = [...products];

    switch (sortType) {
      case "low-high":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "relevant":
        sorted.sort((a, b) => {
          if (a.isNew && !b.isNew) return -1;
          if (!a.isNew && b.isNew) return 1;
          return 0;
        });
        break;
      default:
        break;
    }

    return sorted;
  };

  useEffect(() => {
    const sorted = sortProducts(filteredProducts);
    setSortedProducts(sorted);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredProducts, sortType]);

  // Handle URL state changes for pagination
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const page = queryParams.get("page");
    if (page) {
      setCurrentPage(Number(page));
    }
  }, [location.search]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    const queryParams = new URLSearchParams(location.search);
    queryParams.set("page", page);
    navigate(`${location.pathname}?${queryParams.toString()}`);
  };

  // Get current products to display based on pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  return (
    <>
      <Helmet>
        <title>FOFAL | Coberturas Universais</title>
        <meta name="description" content="Fofal - Coberturas Universais para automóveis, caravanas, autocaravanas, scooters" />
      </Helmet>

      <section className="w-full bg-banner flex-center text-center text-white p-4">
        <div
          className="grid grid-cols-1 md:grid-cols-3 max-w-container gap-6 pt-60 md:pt-40 pb-10"
        >
          {itemsAuto.map((item) => (
            <div
              className="cursor-pointer"
              key={item.id}
              onClick={() => navigate(item.url)}
            >
              <div className="rounded-2xl bg-bgCards p-4 flex-center flex-col">
                <img src={item.imageUrl} className="w-full" alt={item.title} />
              </div>
              <h3
                className={`text-2xl mt-4 ${getLinkClassNames(item.url)} text-fofalText`}
              >
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full h-2 bg-bgCards"></section>

      <section className="py-10 flex flex-col justify-between gap-10">
        <div className="w-full max-w-container mx-auto p-4 py-10 flex flex-col lg:flex-row justify-between gap-10">
          {/* Filtros */}
          <div className="flex flex-col justify-start gap-2">
            <div className="w-full lg:max-w-60 min-w-60 md:sticky relative md:top-10">
              <p
                className="w-full my-2 text-2xl text-fofalText font-brandon-800 flex items-center cursor-pointer gap-2"
                onClick={handleOpenFilters}
              >
                Filtros
                <ChevronRight
                  className={`w-5 h-5 transition-all ease-in-out duration-300 ${openFilters ? "rotate-90" : "rotate-0"}`}
                />
                {selectedCategory !== "" && (
                  <>
                    <span
                      className="w-fit ml-auto font-brandon-400 text-sm"
                      onClick={() => setSelectedCategory("")}
                    >
                      Limpar filtros
                    </span>
                    <X size={10} />
                  </>
                )}
              </p>
              {openFilters && (
                <div className="py-3 sm:block">
                  <div className="flex flex-col text-md">
                    {["autocaravana", "automovel", "caravana", "motociclo", "scooter"].map((category) => (
                      <div
                        key={category}
                        className="w-full border-t border-fofalText py-3 px-1 cursor-pointer hover:bg-zinc-300"
                      >
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

          {/* Produtos */}
          <div className="min-h-[60vh] flex flex-1 flex-col gap-4">
            <div className="w-full flex items-center gap-2">
              <p className="w-fit sm:ml-auto text-zinc-500 font-brandon-800 text-2xl">
                Ordenar por:
              </p>
              <select
                onChange={(e) => setSortType(e.target.value)}
                className="w-fit h-10 text-2xl px-2 font-brandon-500 border border-fofalText rounded focus:ring-fofalText focus:ring-1"
              >
                <option value="relevant">Destaques</option>
                <option value="low-high">Menor preço</option>
                <option value="high-low">Maior preço</option>
              </select>
            </div>

            {loading ? (
              <ProductGridSkeleton /> // Exibe o Skeleton durante o carregamento
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1fr_1fr_1fr] gap-0">
                {currentProducts.length > 0 ? (
                  currentProducts.map((product) => (
                    <div
                      key={product.id}
                      className="w-full flex flex-col justify-between border rounded-lg py-8 px-4 space-y-6 hover:bg-bgCards transition-all ease-in-out duration-300 group"
                    >
                      {/* Conteúdo do produto */}
                      <div className="relative">
                        {product.isNew && (
                          <span className="absolute top-1 left-1 z-50 text-fofalText border border-fofalText px-2 py-1 rounded text-sm pointer-events-none">
                            Novo
                          </span>
                        )}
                        <Carousel className="w-full max-w-full relative">
                          <CarouselContent>
                            {product.images.map((image, index) => (
                              <CarouselItem key={index}>
                                <img
                                  src={image}
                                  alt={product.title}
                                  className="w-full h-48 object-cover"
                                />
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious className="absolute top-1/2 left-4" />
                          <CarouselNext className="absolute top-1/2 right-4" />
                        </Carousel>
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
                          onClick={() => console.log("add-tocart")}
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
                        {product.price && !isNaN(product.price)
                          ? product.price.toFixed(2)
                          : "Preço indisponível"}{" "}
                        €
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
            )}

            {/* Paginação */}
            <div className="w-full flex justify-end items-center gap-4 mt-6">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-transparent text-fofalText rounded disabled:opacity-50"
              >
                Anterior
              </button>
              <span className="text-fofalText font-brandon-800">{currentPage} / {totalPages}</span>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-transparent text-fofalText rounded disabled:opacity-50"
              >
                Próxima
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoberturasUniversais;
