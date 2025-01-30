import { createContext, useContext, useState, useEffect } from 'react';
import { coberturasData } from '@/lib/mock'; // Simulando a chamada à API
import PropTypes from 'prop-types';

const CobUniversalContext = createContext();

export function CobUniversalProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setProducts(coberturasData);  
      setFilteredProducts(coberturasData);
      setLoading(false);  
    }, 3000);
  }, []);  
  
  const filterProducts = (category) => {
    if (!category) {
      if (filteredProducts !== products) {
        setFilteredProducts(products);
      }
    } else {
      const filtered = products.filter(product => product.category === category);
      if (filtered !== filteredProducts) { 
        setFilteredProducts(filtered);
      }
    }
  };

  return (
    <CobUniversalContext.Provider value={{
      products,
      filteredProducts,
      loading,
      filterProducts
    }}>
      {children}
    </CobUniversalContext.Provider>
  );
}

CobUniversalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export function useCobUniversal() {
  const context = useContext(CobUniversalContext);
  if (!context) {
    throw new Error('useCobUniversal deve ser usado dentro de um CobUniversalProvider');
  }
  return context;
}
