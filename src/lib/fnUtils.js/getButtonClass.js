    export const getButtonClass = () => {
        switch (true) {
            case location.pathname.includes('/auto/cobertura-universal/'):
                return 'bg-gradient-auto';
            case location.pathname.includes('/comercio-industria/alcatifas-eventos'):
                return 'bg-gradient-comInd';
            case location.pathname.includes('/comercio-industria/tapetes-entrada'):
                return 'bg-gradient-comInd';
            case location.pathname.includes('/casas/alcatifas-casa'):
                return 'bg-gradient-comInd';
            case location.pathname.includes('/casas/tapetes-entrada'):
                return 'bg-gradient-comInd';
            default:
                return 'bg-transparent';
        }
    };
