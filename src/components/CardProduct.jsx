import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import PropTypes from "prop-types";
import useCart from "@/hooks/useCart";
import toast from "react-hot-toast";
import { getFormattedPrice } from "@/lib/fnUtils.js/priceFormatters";
import { calculateAlcatifas, calculateAlcatifasHome } from "@/lib/fnUtils.js/calculates";
import { Loader } from "lucide-react";

const CardProduct = ({ product, onViewProduct, onAddToCart }) => {
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [thickness, setThickness] = useState('');
    const [color, setColor] = useState('Preto');
    const [customization, setCustomization] = useState(false);
    const [calculatedPrice, setCalculatedPrice] = useState(null);
    const [loading, setLoading] = useState(false);

    const isSpecialType = ["plat", "salsa"].includes(product.type?.toLowerCase());
    const shouldShowMt2 = (product.isSoldPerSquareMeter || isSpecialType) && product.type !== "Alumínio";

    const { addSquareMeterToCart } = useCart();

    const location = useLocation();

    const calculatePrice = async () => {
        if (!width || !height || parseFloat(width) <= 0 || parseFloat(height) <= 0) {
            toast.error("Insira medidas válidas de largura e profundidade.");
            return;
        }

        if (customization) {
            toast.error("Para personalização, por favor contacte-nos pelo email: comercial@fofal.pt");
            return;
        }

        setLoading(true);

        let result;

        try {
            if (location.pathname.includes("casas")) {
                result = await calculateAlcatifasHome(product, parseFloat(width), parseFloat(height), thickness);
            } else {
                result = await calculateAlcatifas(product, parseFloat(width), parseFloat(height), thickness);
            }

            if (result && result.price) {
                setCalculatedPrice(result.price);
            }
        } catch (error) {
            console.error(error);
            toast.error("Erro ao calcular o preço.");
        } finally {
            setLoading(false);
        }
    };

    const handleThicknessChange = (e) => {
        const newThickness = e.target.value;
        setThickness(newThickness);
    };

    const handleAddToCart = () => {
        if (product.isSoldPerSquareMeter || isSpecialType) {
            if (width > 0 && height > 0) {
                if (product.type === "MT113" && !thickness) {
                    toast.error("Por favor, selecione a espessura da espuma.");
                    return;
                }
                addSquareMeterToCart(product, parseFloat(width), parseFloat(height), thickness, color);
                setWidth('');
                setHeight('');
                setColor('Preto');
            } else {
                toast.error('Por favor, insira as medidas de largura e profundidade.');
            }
        } else {
            onAddToCart(product);
        }
    };

    useEffect(() => {
        setCalculatedPrice(null);
    }, [width, height, thickness]);

    return (
        <div className="w-full flex flex-col justify-start border py-8 px-4 space-y-8 hover:bg-bgCards transition-all ease-in-out duration-300 group">
            {/* Imagem e Indicador de Novo */}
            <div className="relative">
                {product.isNew === true && (
                    <span className="absolute top-1 left-1 z-50 text-fofalText border border-fofalText px-2 py-1 rounded text-sm pointer-events-none">
                        Novo
                    </span>
                )}
                <Carousel className="w-full max-w-full relative">
                    {/* quando estiver em produção alterar o caminho da imagem para /fofal.svg */}
                    <CarouselContent>
                        {(product.images && product.images.length > 0 ? product.images : ["/a-fofal/fofal.svg"]).map((image, index) => (
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
            </div>

            {/* Informações do Produto */}
            <div className="flex flex-col">
                <h3 className="text-lg font-bold"><span>{product.type}</span>
                    {(product.title === "Coberturas Universais Automóvel") && (<span>{product.title} - {product.category}</span>)}
                </h3>

                {(product.title === "Coberturas Universais Automóvel") && (
                    <div className="flex items-center gap-2">
                        <p className="text-lg font-brandon-500">Cor: {product.color}</p>
                    </div>
                )}

                {product.colors && (
                    <div className="mt-4 flex flex-col gap-2 h-14 mb-2">
                        <label className="text-sm font-brandon-400">Cor</label>
                        <select
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                            className="w-full border border-fofalText px-2 rounded min-h-8"
                        >
                            {product.colors.map((colorOption, index) => (
                                <option key={index} value={colorOption}>
                                    {colorOption}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                {/* Para produtos que são vendidos por metro quadrado ou outros tipos que precisam de medidas */}
                {(product.type !== "Coberturas Universais Automóvel") && (product.isSoldPerSquareMeter || isSpecialType) && (
                    <div className="mt-4 flex gap-2 h-14">
                        <div className="flex flex-col">
                            <label className="text-sm font-brandon-400">Largura (mt)</label>
                            <input
                                type="number"
                                step="0.10"
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
                                step="0.10"
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                                className="border border-fofalText px-2 py-1 rounded"
                                placeholder="Profundidade"
                            />
                        </div>
                    </div>
                )}

                {/* Espessura somente para MT113 */}
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

            {/* Preços */}
            {(product.title === "Coberturas Universais Automóvel") ? (
                <div className="flex flex-col justify-end items-end gap-2">
                    <p className="text-lg font-brandon-500">€ {product.price.toFixed(2)}</p>
                    <button
                        className="px-4 py-2 bg-bgCards group-hover:bg-white font-brandon-800 text-sm"
                        onClick={handleAddToCart}
                    >
                        Adicionar ao carrinho
                    </button>
                </div>
            ) : (
                // Para outros produtos, exibe o botão e o checkbox de personalização
                <div className="!mt-4 space-y-2 flex justify-end">
                    {calculatedPrice !== null ? (
                        <div className="flex justify-between items-center gap-2">
                            <p className="text-lg font-brandon-500">
                                {getFormattedPrice({ price: calculatedPrice })}
                                {shouldShowMt2}
                            </p>

                            <button
                                className="px-4 py-2 bg-bgCards group-hover:bg-white font-brandon-800 text-sm"
                                onClick={handleAddToCart}
                            >
                                Adicionar ao carrinho
                            </button>
                        </div>
                    ) : (
                        <div className="w-full flex flex-col justify-end items-end gap-2">
                            {width > 0 && height > 0 && (
                                <div className="w-full flex justify-start items-center gap-2">
                                    <input
                                        type="checkbox"
                                        id="customization"
                                        onChange={() => setCustomization(!customization)}
                                    />
                                    <label htmlFor="customization" className="text-md font-brandon-400">Personalizar</label>
                                </div>
                            )}
                            <button
                                onClick={calculatePrice}
                                className="px-4 py-2 bg-bgCards hover:bg-white text-sm font-brandon-800 transition-all"
                            >
                                {loading ? (
                                    <Loader className="animate-spin text-fofalText" size={16} />
                                ) : (
                                    "Ver Preço"
                                )}
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

CardProduct.propTypes = {
    product: PropTypes.object.isRequired,
    onViewProduct: PropTypes.func.isRequired,
    onAddToCart: PropTypes.func.isRequired,
};

export default CardProduct;
