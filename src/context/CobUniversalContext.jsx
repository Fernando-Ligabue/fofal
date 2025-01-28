import { createContext, useContext, useState } from 'react';

import { coberturasData } from '@/lib/mock'; //alterar pela chamada da api
import PropTypes from 'prop-types';


const CobUniversalContext = createContext();

export function CobUniversalProvider({ children }) {
  const [products] = useState(coberturasData);

  const filterProducts = (category) => {
    return products.filter(product => product.category === category);
  };

  return (
    <CobUniversalContext.Provider value={{
      products,
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
    throw new Error('useCobUniversal tem de fornecer um CobUniversalProvider');
  }
  return context;
}