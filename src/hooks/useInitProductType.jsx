// useInitProductType.js
import { useEffect } from 'react';
import useProducts from './useProducts';

const useInitProductType = (type) => {
    const { changeProductType } = useProducts();

    useEffect(() => {
        changeProductType(type);
    }, [changeProductType, type]);
};

export default useInitProductType;
