/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import ProductGridSkeleton from "./ProductGridSkeleton";
import SortSelect from "./SortSelect";
import CardProduct from "./CardProduct";
import { useProducts } from "@/context/ProductsContext";
import { useCart } from "@/context/CartContext";
// import FilterAlcatifas from "./FiltersAlcatifas";
import Pagination from "./Pagination";
import FiltersEntranceCarpets from "./FiltersEntranceCarpets";

const TapetesEntrada = () => {
  const { filteredProducts, loading, filterProducts, changeProductType } = useProducts();
  const { addToCart } = useCart();
  const [selectedCategory,] = useState("");
  const [sortType, setSortType] = useState("relevant");
  const [sortedProducts, setSortedProducts] = useState(filteredProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path.includes("comercio-industria/tapetes-entrada")) {
      changeProductType("comercial-tapetes-entrada");
    }
  }, [location.pathname, changeProductType]);

  useEffect(() => {
    filterProducts(selectedCategory);
  }, [selectedCategory]);

  const handleViewProduct = (productId) => {
    navigate(`/comercio-industria/tapetes-entrada/${productId}`);
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
              <FiltersEntranceCarpets />
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

export default TapetesEntrada;
