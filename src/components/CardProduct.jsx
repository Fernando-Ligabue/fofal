// components/ui/CardProduct.js
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import PropTypes from "prop-types";

const CardProduct = ({ product, onViewProduct, onAddToCart }) => {
    return (
        <div
            className="w-full flex flex-col justify-between border rounded-lg py-8 px-4 space-y-6 hover:bg-bgCards transition-all ease-in-out duration-300 group"
        >
            {/* Imagem e Indicador de Novo */}
            <div className="relative">
                {product.isNew && (
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
                    onClick={() => onAddToCart(product)}
                >
                    Adicionar ao carrinho
                </button>
            </div>


            {/* Informações do Produto */}
            <div className="flex flex-col">
                <h3 className="text-lg font-bold">{product.title}</h3>
                <p className="text-sm font-brandon-400">Tamanho {product.size} – {product.dimensions}</p>
            </div>

            {/* Preço */}
            <p className="text-lg font-brandon-800 mt-2">
                {product.price && !isNaN(product.price)
                    ? product.price.toFixed(2)
                    : "Preço indisponível"} €
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
