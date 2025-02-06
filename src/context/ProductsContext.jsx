/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Mockup de produtos (dados genéricos)
import { alcatifasData, coberturasData } from '@/lib/mock';


const ProductsContext = createContext();

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
    const loadProducts = () => {
      setLoading(true);

      setTimeout(() => {
        let loadedProducts = [];
        switch (productType) {
          case 'alcatifas':
            loadedProducts = alcatifasData;
            break;
          case 'coberturas':
            loadedProducts = coberturasData;
            break;
        }

        setProducts(loadedProducts);
        setFilteredProducts(loadedProducts);
        
        // Persist data in localStorage
        if (loadedProducts.length > 0) {
          localStorage.setItem('products', JSON.stringify(loadedProducts));
          localStorage.setItem('filteredProducts', JSON.stringify(loadedProducts));
        }
        
        setLoading(false);
      }, 1000);
    };

    loadProducts();
  }, [productType]);

  // Update localStorage when key states change
  useEffect(() => {
    if (productType) {
      localStorage.setItem('productType', productType);
    }
  }, [productType]);

  const filterProducts = (category) => {
    let filtered;
    if (!category) {
      filtered = products;
    } else {
      filtered = products.filter(product => product.category === category);
    }
    
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
      changeProductType,
    }}>
      {children}
    </ProductsContext.Provider>
  );
}

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useProducts() {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProducts deve ser usado dentro de um ProductsProvider');
  }
  return context;
}