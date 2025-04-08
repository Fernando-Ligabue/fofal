import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import PropTypes from "prop-types";
import { useCart } from "@/context/CartContext";
import toast from "react-hot-toast";

const CardProduct = ({ product, onViewProduct, onAddToCart }) => {
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [thickness, setThickness] = useState('');

    const { addSquareMeterToCart } = useCart();

    const handleThicknessChange = (e) => {
        const newThickness = e.target.value;
        setThickness(newThickness);
    };

    const handleAddToCart = () => {
        if (product.isSoldPerSquareMeter) {
            if (width > 0 && height > 0) {
                if (product.type === "MT113" && !thickness) {
                    toast.error("Por favor, selecione a espessura da espuma.");
                    return;
                }
                addSquareMeterToCart(product, parseFloat(width), parseFloat(height), parseFloat(thickness));
            } else {
                toast.error('Por favor, insira as medidas de largura e profundidade.');
            }
        } else {
            onAddToCart(product);
        }
    };

    return (
        <div className="w-full flex flex-col justify-between border py-8 px-4 space-y-6 hover:bg-bgCards transition-all ease-in-out duration-300 group">
            {/* Imagem e Indicador de Novo */}
            <div className="relative">
                {product.isNew === true && (
                    <span className="absolute top-1 left-1 z-50 text-fofalText border border-fofalText px-2 py-1 rounded text-sm pointer-events-none">
                        Novo
                    </span>
                )}
                <Carousel className="w-full max-w-full relative">
                    <CarouselContent>
                        {product.images.map((image, index) => (
                            <CarouselItem key={index}>
                                <img src={image} alt={product.title} className="w-full h-48 object-cover" />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute top-1/2 left-4" />
                    <CarouselNext className="absolute top-1/2 right-4" />
                </Carousel>
            </div>

            {/* Botões */}
            <div className="flex gap-2 mt-4 w-full justify-end">
                <button
                    className="px-4 py-2 bg-bgCards group-hover:bg-white font-brandon-800 text-sm"
                    onClick={() => onViewProduct(product.id)}
                >
                    Ver produto
                </button>
                <button
                    className="px-4 py-2 bg-bgCards group-hover:bg-white font-brandon-800 text-sm"
                    onClick={handleAddToCart}
                >
                    Adicionar ao carrinho
                </button>
            </div>

            {/* Informações do Produto */}
            <div className="flex flex-col">
                <h3 className="text-lg font-bold">{product.title} {product.isSoldPerSquareMeter && <span>- {product.type} </span>}</h3>
                {product.isSoldPerSquareMeter ? <p className="text-sm font-brandon-400">{product.size}</p> : <p className="text-sm font-brandon-400">Tamanho {product.size}</p>}
                <p className="text-sm font-brandon-400">Dimensões – {product.dimensions}</p>

                {product.isSoldPerSquareMeter && product.type !== "Alumínio" && (
                    <div className="mt-4 flex gap-2">
                        <div className="flex flex-col">
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
                        <div className="flex flex-col">
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

                {/* Campo de espessura somente para produtos MT113 */}
                {product.type === "MT113" && (
                    <div className="mt-4 flex flex-col">
                        <label className="text-sm font-brandon-400">Espessura (mm)</label>
                        <select
                            value={thickness}
                            onChange={handleThicknessChange}
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
            </div>

            {/* Preço */}
            <p className="text-lg font-brandon-500 mt-2">
                € {product.price && !isNaN(product.price)
                    ? product.price.toFixed(2)
                    : "Preço sob consulta"}
                {product.isSoldPerSquareMeter && product.type !== "Alumínio" && <small> mt<sup>2</sup></small>}
            </p>
        </div>
    );
};

CardProduct.propTypes = {
    product: PropTypes.object.isRequired,
    onViewProduct: PropTypes.func.isRequired,
    onAddToCart: PropTypes.func.isRequired,
};

export default CardProduct;
