import { useCart } from '@/context/CartContext';
import { MinusCircle, PlusCircle } from 'lucide-react';
import PropTypes from 'prop-types';
import React from 'react'
import { useLocation } from 'react-router-dom';

const QuantitySelector = ({ product }) => {
    const [quantity, setQuantity] = React.useState(1);
    const { addToCart } = useCart();
    const location = useLocation();

    const getButtonClass = () => {
        switch (true) {
            case location.pathname.includes('/auto/cobertura-universal/'):
                return 'bg-gradient-auto';
            case location.pathname.includes('/comercio-industria/alcatifas-eventos'):
                return 'bg-gradient-comInd';
            default:
                return 'bg-transparent';
        }
    };

    const handleIncreaseQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };

    const handleAddToCart = () => {
        if (product) {
            const productWithQuantity = { ...product, quantity };
            addToCart(productWithQuantity);
        }
    };

    return (
        <>
            <div className="w-full flex justify-start items-center gap-4 text-lg text-fofalText border-t border-fofalText py-4">
                <p className="font-brandon-800 text-lg text-fofalText">
                    Quantidade
                </p>
                <MinusCircle
                    size={20}
                    className={`text-fofalText cursor-pointer ${quantity === 1 ? "cursor-not-allowed opacity-50" : ""}`}
                    onClick={handleDecreaseQuantity}
                />
                <span className="text-fofalText font-brandon-500 text-base text-center selection:bg-transparent">{quantity}</span>
                <PlusCircle
                    size={20}
                    className="text-fofalText cursor-pointer"
                    onClick={handleIncreaseQuantity}
                />
            </div>

            <div className="w-full flex-center gap-4 p-4">
                <button
                    className={`w-full max-w-80 border border-black rounded-full font-brandon-500 text-base text-white py-2 px-6 selection:bg-transparent ${getButtonClass()}`}
                    onClick={handleAddToCart}
                >
                    Adicionar ao carrinho
                </button>
            </div>
        </>
    )
}

QuantitySelector.propTypes = {
    product: PropTypes.object
}
export default QuantitySelector