/* eslint-disable react-hooks/exhaustive-deps */
import { ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import ProductGridSkeleton from "./ProductGridSkeleton";
import SortSelect from "./SortSelect";
import CardProduct from "./CardProduct";
import { useProducts } from "@/context/ProductsContext";
import { useCart } from "@/context/CartContext";
import Pagination from "./Pagination";

const AlcatifasEventos = () => {
  const { filteredProducts, loading, filterProducts, changeProductType } = useProducts();
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [openFilters, setOpenFilters] = useState(true);
  const [sortType, setSortType] = useState("relevant");
  const [sortedProducts, setSortedProducts] = useState(filteredProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path.includes("alcatifas-eventos")) {
      changeProductType("alcatifas");
    }
  }, [location.pathname, changeProductType]);

  useEffect(() => {
    filterProducts(selectedCategory);
  }, [selectedCategory]);

  const handleSetCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleOpenFilters = () => {
    setOpenFilters(!openFilters);
  };

  const handleViewProduct = (productId) => {
    navigate(`/comercio-industria/alcatifas-eventos/${productId}`);
  };

  const handleClearFilters = (e) => {
    e.stopPropagation();
    setSelectedCategory("");
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
  }, [filteredProducts, sortType]);

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

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);


  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <>
      <section className="flex flex-col justify-between gap-10">
        <div className="w-full max-w-container mx-auto p-4 py-10 flex flex-col lg:flex-row justify-between gap-10">
          {/* Filtros */}
          <div className="flex flex-col justify-start gap-2">
            <div className="w-full lg:max-w-60 min-w-60 md:sticky relative md:top-10">
              <h2
                className="w-full my-2 text-2xl text-fofalText font-brandon-800 flex items-center cursor-pointer gap-2"
                onClick={handleOpenFilters}
              >
                Filtros
                <ChevronRight
                  className={`w-5 h-5 transition-all ease-in-out duration-300 ${openFilters ? "rotate-90" : "rotate-0"
                    }`}
                />
              </h2>
              {selectedCategory !== "" && (
                <span
                  className="absolute top-4 right-0 cursor-pointer w-fit ml-auto font-brandon-400 text-sm flex flex-nowra items-center gap-2"
                  onClick={handleClearFilters}
                >
                  Limpar filtros
                  <X size={10} />
                </span>
              )}
              {openFilters && (
                <div className="py-3 sm:block">
                  <div className="flex flex-col text-md">
                    {["curta duração", "média duração", "longa duração"].map((category, index, array) => (
                      <div
                        key={category}
                        className={`w-full border-t border-fofalText py-3 px-1 cursor-pointer hover:bg-zinc-300 ${selectedCategory === category ? 'bg-zinc-300' : ''} ${index === array.length - 1 ? 'border-b' : ''}`}
                      >
                        <p
                          className="font-brandon-400"
                          onClick={() => handleSetCategory(category)}
                        >
                          {`Eventos ${category.charAt(0).toUpperCase() + category.slice(1)}`}
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
            <SortSelect sortType={sortType} onSortChange={setSortType} />

            {loading ? (
              <ProductGridSkeleton />
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1fr_1fr_1fr] gap-0">
                  {currentProducts.map((product) => (
                    <CardProduct
                      key={product.id}
                      product={product}
                      onViewProduct={handleViewProduct}
                      onAddToCart={handleAddToCart} />
                  ))
                  }
                </div>
                {/* Paginação */}
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default AlcatifasEventos;
