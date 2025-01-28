import { coberturasData } from '@/lib/mock';
import { createContext, useContext, useState } from 'react';

const ShopContext = createContext();

// eslint-disable-next-line react/prop-types
export function ShopProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [products] = useState(coberturasData);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const filterProducts = (category) => {
    return products.filter(product => product.category === category);
  };

  return (
    <ShopContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      products,
      filterProducts
    }}>
      {children}
    </ShopContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useShop() {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop tem de fornecer um ShopProvider');
  }
  return context;
}