import PropTypes from 'prop-types';
import { createContext } from 'react';
import { UserContextProvider } from './UserContext';
import { ProductsProvider } from './ProductsContext';
import { CartProvider } from './CartContext';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    return (
        <GlobalContext.Provider value={{}}>
            <UserContextProvider>
                <ProductsProvider>
                    <CartProvider>
                        {children}
                    </CartProvider>
                </ProductsProvider>
            </UserContextProvider>
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;

GlobalProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
