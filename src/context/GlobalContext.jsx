import PropTypes from 'prop-types';
import { CobUniversalProvider } from './CobUniversalContext'; // Importe outros contextos aqui se necessário
import { createContext } from 'react';
import { UserContextProvider } from './UserContext';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    return (
        <GlobalContext.Provider value={{}}>
            <UserContextProvider>
                <CobUniversalProvider>
                    {children}
                </CobUniversalProvider>
            </UserContextProvider>
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;

GlobalProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
