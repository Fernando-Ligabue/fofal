// import { createContext, useContext, useState } from 'react';

// import { coberturasData } from '@/lib/mock'; //alterar pela chamada da api
// import PropTypes from 'prop-types';


// const CobUniversalContext = createContext();

// export function CobUniversalProvider({ children }) {
//   const [products] = useState(coberturasData);

//   const filterProducts = (category) => {
//     return products.filter(product => product.category === category);
//   };

//   return (
//     <CobUniversalContext.Provider value={{
//       products,
//       filterProducts
//     }}>
//       {children}
//     </CobUniversalContext.Provider>
//   );
// }

// CobUniversalProvider.propTypes = {
//     children: PropTypes.node.isRequired,
// };

// // eslint-disable-next-line react-refresh/only-export-components
// export function useCobUniversal() {
//   const context = useContext(CobUniversalContext);
//   if (!context) {
//     throw new Error('useCobUniversal tem de fornecer um CobUniversalProvider');
//   }
//   return context;
// }
import { createContext, useContext, useState, useEffect } from 'react';
import { coberturasData } from '@/lib/mock'; // Simulando a chamada à API
import PropTypes from 'prop-types';

const CobUniversalContext = createContext();

export function CobUniversalProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Inicializa com true para carregar no início
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Simulando a chamada à API
    setTimeout(() => {
      setProducts(coberturasData);  
      setFilteredProducts(coberturasData);
      setLoading(false);  
    }, 3000);
  }, []);  // [] significa que isso vai rodar apenas uma vez na montagem do componente
  
  const filterProducts = (category) => {
    if (!category) {
      if (filteredProducts !== products) { // Verificação se já está atualizado
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
