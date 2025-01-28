import PropTypes from 'prop-types';
import { CobUniversalProvider } from './CobUniversalContext'; // Importe outros contextos aqui se necessário
import { createContext } from 'react';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    return (
        <GlobalContext.Provider value={{}}>
            <CobUniversalProvider>
                {children}
            </CobUniversalProvider>
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;

GlobalProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
