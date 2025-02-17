import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Mockup de produtos (dados genéricos)
import { alcatifasData, coberturasData, alcatifasHousesData } from '@/lib/mock';

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
          case 'alcatifas-casa':
            loadedProducts = alcatifasHousesData;
            break;
        }

        console.log('Produtos carregados:', loadedProducts);  
        
        setProducts(loadedProducts);
        setFilteredProducts(loadedProducts);
        
        if (loadedProducts.length > 0) {
          localStorage.setItem('products', JSON.stringify(loadedProducts));
          localStorage.setItem('filteredProducts', JSON.stringify(loadedProducts));
        }
        
        setLoading(false);
      }, 1000);
    };

    loadProducts();
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

// eslint-disable-next-line react-refresh/only-export-components
export function useProducts() {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProducts deve ser usado dentro de um ProductsProvider');
  }
  return context;
}