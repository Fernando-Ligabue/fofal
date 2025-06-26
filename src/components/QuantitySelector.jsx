import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MinusCircle, PlusCircle } from 'lucide-react';
import PropTypes from 'prop-types';

import useCart from "@/hooks/useCart";
import toast from 'react-hot-toast';
import { getButtonClass } from '@/lib/fnUtils.js/getButtonClass';

const QuantitySelector = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const { addToCart, addSquareMeterToCart } = useCart();
    // eslint-disable-next-line no-unused-vars
    const location = useLocation();
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [thickness, setThickness] = useState("");


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
            if (product.isSoldPerSquareMeter && (width <= 0 || height <= 0)) {
                toast.error("Por favor, insira as medidas de largura e altura.");
                return;
            }
    
            if (product.type === "MT113" && !thickness) {
                toast.error("Por favor, selecione a espessura.");
                return;
            }
    
            if (product.isSoldPerSquareMeter) {
                addSquareMeterToCart(product, parseFloat(width), parseFloat(height), thickness);
            } else {
                const productWithQuantity = { ...product, quantity, thickness };
                addToCart(productWithQuantity);
            }
        }
    };

    return (
        <>
            <div className="w-full flex flex-col justify-start items-start gap-4 text-lg text-fofalText border-t border-fofalText py-4">
                {product.isSoldPerSquareMeter && (
                    <div className="mt-4 w-full max-w-full flex justify-between items-center flex-col sm:flex-row gap-2">
                        <div className="w-full flex flex-col">
                            <label className="text-sm font-brandon-400">Largura (mt)</label>
                            <input
                                type="number"
                                step="0.01"
                                value={width}
                                onChange={(e) => setWidth(e.target.value)}
                                className="border border-fofalText px-2 py-1 rounded"
                                placeholder="Largura"
                            />
                        </div>
                        <div className="w-full flex flex-col">
                            <label className="text-sm font-brandon-400">Profundidade (mt)</label>
                            <input
                                type="number"
                                step="0.01"
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                                className="border border-fofalText px-2 py-1 rounded"
                                placeholder="Profundidade"
                            />
                        </div>
                    </div>
                )}
                {product.type === "MT113" && (
                    <div className="mt-4 flex flex-col w-full">
                        <label className="text-sm font-brandon-400">Espessura (mm)</label>
                        <select
                            value={thickness}
                            onChange={(e) => setThickness(e.target.value)}
                            className="border border-fofalText px-2 py-1 rounded"
                        >
                            <option value="">Selecione a espessura</option>
                            <option value="3-5">3-5 mm</option>
                            <option value="5-7">5-7 mm</option>
                            <option value="8-9">8-9 mm</option>
                            <option value="10-11">10-11 mm</option>
                            <option value="12-13">12-13 mm</option>
                            <option value="14-15">14-15 mm</option>
                            <option value="16-17">16-17 mm</option>
                        </select>
                    </div>
                )}
                <div className='w-full flex justify-start items-center gap-4 text-lg'>
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
    );
}

QuantitySelector.propTypes = {
    product: PropTypes.object
}

export default QuantitySelector;
