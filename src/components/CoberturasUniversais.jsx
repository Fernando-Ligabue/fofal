/* eslint-disable react-hooks/exhaustive-deps */
import { useProducts } from "@/context/ProductsContext";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import ProductGridSkeleton from "./ProductGridSkeleton";
import SortSelect from "./SortSelect";
import CardProduct from "./CardProduct";
import { useCart } from "@/context/CartContext";
import Pagination from "./Pagination";

const CoberturasUniversais = () => {
  const { filteredProducts, loading, changeProductType } = useProducts();
  const { addToCart } = useCart();
  const [sortType, setSortType] = useState("relevant");
  const [sortedProducts, setSortedProducts] = useState(filteredProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path.includes("coberturas-universais")) {
      changeProductType("coberturas");
    }
  }, [location.pathname, changeProductType]);

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
      <section className="py-10 flex flex-col justify-between gap-10">
        <div className="w-full max-w-container mx-auto p-4 py-10 flex flex-col lg:flex-row justify-between gap-10">
          {/* Produtos */}
          <div className="min-h-[60vh] flex flex-1 flex-col gap-4">
            <SortSelect sortType={sortType} onSortChange={setSortType} />
            {loading ? (
              <ProductGridSkeleton />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1fr_1fr_1fr] gap-0">
                {currentProducts.length > 0 ? (
                  currentProducts.map((product) => (
                    <CardProduct
                      key={product.id}
                      product={product}
                      onViewProduct={handleViewProduct}
                      onAddToCart={handleAddToCart}
                    />
                  ))
                ) : (
                  <div className="w-full flex flex-1 justify-center items-center">
                    <p className="text-fofalText font-brandon-800 text-2xl">Nenhum produto encontrado</p>
                  </div>
                )}
              </div>
            )}

            {/* Paginação */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CoberturasUniversais;
