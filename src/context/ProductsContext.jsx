/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-case-declarations */
import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Mockup de produtos (dados genéricos)
import { fetchAlcatifasHouses, fetchEntranceCarpetsHouses } from '@/lib/actions/houses';
import { fetchEntranceCarpetsComercial, fetchAlcatifasComercial } from '@/lib/actions/comercial';
import { fetchUniversalCovers } from '@/lib/actions/automotive';

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('products');
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  const [loading, setLoading] = useState(true);

  const [filteredProducts, setFilteredProducts] = useState(() => {
    const savedFilteredProducts = localStorage.getItem('filteredProducts');
    return savedFilteredProducts ? JSON.parse(savedFilteredProducts) : [];
  });

  const [productType, setProductType] = useState(() =>
    localStorage.getItem('productType') || null
  );

  useEffect(() => {
  const loadProducts = async () => {
    setLoading(true);

    // criação de cache de produtos para evitar requisições a db
    const cachedProducts = localStorage.getItem(`products-${productType}`);
    if (cachedProducts) {
      const parsed = JSON.parse(cachedProducts);
      setProducts(parsed);
      setFilteredProducts(parsed);
      setLoading(false);
      return;
    }

    let loadedProducts = [];

    switch (productType) {
      case 'alcatifas':
        const resAlcCom = await fetchAlcatifasComercial();
        loadedProducts = resAlcCom.data;
        break;
      case 'comercial-tapetes-entrada':
        const resCarpetCom = await fetchEntranceCarpetsComercial();
        loadedProducts = resCarpetCom.data;
        break;
      case 'coberturas':
        const resCovers = await fetchUniversalCovers();
        loadedProducts = resCovers.data;
        break;
      case 'alcatifas-casa':
        const resAlcHouse = await fetchAlcatifasHouses();
        loadedProducts = resAlcHouse.data;
        break;
      case 'tapetes-entrada':
        const resCarpetHouse = await fetchEntranceCarpetsHouses();
        loadedProducts = resCarpetHouse.data;
        break;
      default:
        loadedProducts = [];
    }

    setProducts(loadedProducts);
    setFilteredProducts(loadedProducts);
    localStorage.setItem(`products-${productType}`, JSON.stringify(loadedProducts));

    setLoading(false);
  };

  if (productType) {
    loadProducts();
  }
}, [productType]);


  useEffect(() => {
    if (productType) {
      localStorage.setItem('productType', productType);
    }
  }, [productType]);

  const filterProducts = (category, preFilteredProducts = null) => {
    let filtered;

    if (preFilteredProducts) {
      filtered = preFilteredProducts;
    }
    else if (!category) {
      filtered = products;
    } else {
      filtered = products.filter(product => product.category.toLowerCase() === category);
    }

    setFilteredProducts(filtered);
    localStorage.setItem('filteredProducts', JSON.stringify(filtered));
  };

  const filterProductsByTapeteType = (selectedTapetes) => {
    if (selectedTapetes.length === 0) {
      setFilteredProducts(products);
      localStorage.setItem('filteredProducts', JSON.stringify(products));
      return;
    }

    const filtered = products.filter(product => {
      return selectedTapetes.some(tapete => {
        const titleMatch = product.title.includes(tapete.value);

        const categoryMatch = product.category === tapete.ambiente;

        if (tapete.value === "Tapete de Entrada Alumínio") {
          return titleMatch && categoryMatch;
        }

        return titleMatch;
      });
    });

    setFilteredProducts(filtered);
    localStorage.setItem('filteredProducts', JSON.stringify(filtered));
  };

  const changeProductType = (newType) => {
    setProductType(newType);
  };

  return (
    <ProductsContext.Provider value={{
      products,
      filteredProducts,
      loading,
      filterProducts,
      filterProductsByTapeteType,
      changeProductType,
    }}>
      {children}
    </ProductsContext.Provider>
  );
}

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};