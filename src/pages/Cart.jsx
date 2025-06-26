;import useCart from "@/hooks/useCart";
import { useUser } from "@/context/UserContext";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const CartPage = () => {
    const { user } = useUser();
    const { cart, updateCart, removeFromCart, getCartAmount } = useCart();
    const navigate = useNavigate();

    const handleIncrease = (productId) => {
        const product = cart.find(item => item.id === productId);
        updateCart(productId, product.quantity + 1);
    };

    const handleDecrease = (productId) => {
        const product = cart.find(item => item.id === productId);
        if (product.quantity > 1) {
            updateCart(productId, product.quantity - 1);
        }
    };

    const formatString = (str) => {
        if (!str) return "";
        return str
            .split(/[_-]/)
            .map(word =>
                word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            )
            .join(" ");
    };

    return (
        <section className="w-full p-4">
            <div className="max-w-screen-xl flex flex-col mx-auto gap-6 pt-48 lg:pt-60 pb-10">
                {/* Div vazia se não houver itens no carrinho */}
                {cart.length === 0 && (
                    <div className="flex-center flex-col gap-4 pb-40 border-t border-b border-fofalText pt-36">
                        <ShoppingBag size={100} />
                        <p className="font-brandon-400 text-3xl text-fofalText">Seu carrinho está vazio</p>
                        <Link to="/" className="font-brandon-400 text-3xl text-fofalText border border-fofalText py-2 px-4 rounded-[4px]">
                            Voltar para a loja.
                        </Link>
                    </div>
                )}

                {/* Div com produtos que serão apresentados se houver itens no carrinho */}
                {cart.length > 0 && (
                    <div className="flex space-between items-start flex-col sm:flex-row gap-2 sm:gap-14">
                        <div className="w-full sm:max-w-[70%] flex flex-col gap-5">
                            <h1 className="text-5xl font-brandon-500 text-fofalText text-left w-full">Carrinho</h1>
                            <div>
                                <div className="w-full grid grid-cols-[1fr_20%_15%] border-b border-fofalText px-4 py-2">
                                    <span className="font-brandon-400 text-sm text-fofalText">Produtos</span>
                                    <span className="font-brandon-400 text-sm text-fofalText">Quantidade</span>
                                    <span className="font-brandon-400 text-sm text-fofalText">Total</span>
                                </div>

                                {cart.map((item) => (
                                    <div key={item.id} className="relative w-full grid grid-cols-[1fr_20%_15%] md:px-4 pt-4 pb-10 items-center border-b border-fofalText">
                                        <div className="font-brandon-300 text-sm text-fofalText flex flex-col lg:flex-row justify-start items-start gap-4">
                                            <img
                                                className="w-full max-w-32"
                                                src={(item.images && item.images.length > 0) ? item.images[0] : "https://dummyjson.com/image/300x200"}
                                                alt={item.title}
                                            />
                                            {item.type !== "custom-carpet" ? (
                                                <div>
                                                    <Link to={`/${item.setor}/${item.segmento}`} className="font-brandon-800 text-base text-fofalText max-w-60">{item.title} - {item.type}</Link>

                                                    <p className="font-brandon-400 text-base text-fofalText max-w-60 truncate">{item.size}</p>

                                                    {item.type === "MT113" && item.thickness && (
                                                        <p className="font-brandon-400 text-sm text-fofalText">Espessura: {item.thickness} mm</p>
                                                    )}

                                                    {/* Verifica se o produto é vendido por metro quadrado */}
                                                    {item.isSoldPerSquareMeter && item.width && item.height && (
                                                        <>
                                                            <small className="font-brandon-400 text-fofalText">
                                                                Cor: {item.color || "Não especificada"}
                                                            </small>
                                                            <br />
                                                            <small className="font-brandon-400 text-fofalText">
                                                                Tamanho: {(item.width * item.height).toFixed(2)} m²
                                                            </small>
                                                        </>
                                                    )}

                                                    {/* Exibe tamanho para produtos que não são vendidos por metro quadrado */}
                                                    {!item.isSoldPerSquareMeter && (
                                                        <small className="font-brandon-400 text-fofalText">Tamanho: {item.size}</small>
                                                    )}
                                                </div>
                                            ) : (
                                                <div>
                                                    <Link to={`/auto/tapetes`} className="font-brandon-800 text-base text-fofalText max-w-60">{item.title}</Link>

                                                    <p className="font-brandon-400 text-sm text-fofalText max-w-60 truncate"><strong>Material: </strong>{formatString(item.materialType)}</p>

                                                    <p className="font-brandon-400 text-sm text-fofalText max-w-60 truncate">
                                                        <strong>Tapetes selecionados: </strong>
                                                        {item.productDetails.posicoes
                                                            .split(",")
                                                            .map((posicao, index, array) => (
                                                                <span key={index}>
                                                                    {posicao.trim()}
                                                                    {index < array.length - 1 ? ", " : ""}
                                                                </span>
                                                            ))}
                                                    </p>

                                                    <p className="font-brandon-400 text-sm text-fofalText">
                                                        <strong>Cores da personalização: </strong>
                                                        {item.cores.map((cor, index) => (
                                                            <span key={index}>
                                                                {formatString(cor)}
                                                                {index < item.cores.length - 1 ? ", " : ""}
                                                            </span>
                                                        ))}
                                                    </p>

                                                    <p className="font-brandon-400 text-fofalText">
                                                        <strong>Fixações: </strong>{item.productDetails.fixacoes || "Não selecionado"}
                                                    </p>
                                                    <p className="font-brandon-400 text-fofalText">
                                                        <strong>Espigões: </strong>{item.productDetails.espigoes || "Não selecionado"}
                                                    </p>
                                                    <p className="font-brandon-400 text-fofalText">
                                                        <strong>Bordado: </strong>{
                                                            !["rubber-hexa", "rubber-flex"].includes(item.productDetails.acabamentoType)
                                                                ? `${formatString(item.productDetails.acabamentoType)}`
                                                                : "Sem acabamento"
                                                        }
                                                    </p>
                                                </div>
                                            )}
                                        </div>

                                        <div className="font-brandon-300 text-sm text-fofalText flex justify-start items-center gap-8">
                                            <div className="flex justify-center items-center gap-2 border border-fofalText p-2 rounded-[4px] min-w-20">
                                                <Minus size={14} className={`cursor-pointer ${item.quantity === 1 ? 'opacity-50 !cursor-not-allowed' : ''}`} onClick={() => handleDecrease(item.id)} />
                                                <span className="font-brandon-500 text-base text-fofalText selection:bg-transparent">{item.quantity}</span>
                                                <Plus size={14} className="cursor-pointer" onClick={() => handleIncrease(item.id)} />
                                            </div>
                                        </div>

                                        <div className="font-brandon-300 text-sm text-fofalText">
                                            <span className="font-brandon-500">{Number(item.price * item.quantity).toFixed(2)} €</span>
                                        </div>

                                        <div className="absolute sm:left-4 bottom-2 flex-center gap-1 cursor-pointer" onClick={() => removeFromCart(item.id)}>
                                            <Trash2 size={14} className="cursor-pointer text-red-700" /><span className="text-sm text-red-700 font-brandon-400">Remover</span>
                                        </div>
                                    </div>
                                ))}

                                <div className="w-full max-w-screen-xl mx-auto gap-6 py-6">
                                    <Link to="/" className="w-full text-left py-2 text-fofalText font-brandon-400 hover:font-brandon-500 hover:underline text-base rounded-full">
                                        <span>{cart.length > 0 ? 'Continuar comprando' : 'Voltar para a loja'}</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:max-w-[30%] flex flex-col gap-2">
                            <h3 className="text-3xl font-brandon-400 text-fofalText text-left w-full pt-3 hidden sm:block">Resumo do pedido</h3>
                            <div className="w-full flex flex-col gap-5 py-2 mt-3">
                                <span className="font-brandon-400 text-sm text-fofalText">Observações</span>
                                <textarea name="observacoes" id="observacoes" cols="30" rows="5" className="border border-fofalText p-1 rounded-[4px] resize-none"></textarea>
                            </div>

                            {/* <div className="flex justify-between items-center">
                                <span className="font-brandon-800 text-zinc-400 text-base">Taxa de envio</span>
                                <span className="font-brandon-800 text-fofalText text-base">{shipping_fee} €</span>
                            </div> */}

                            <div className="flex justify-between items-center">
                                <span className="font-brandon-800 text-zinc-400 text-base">Subtotal</span>
                                {/* <span className="font-brandon-800 text-fofalText text-base">{(getCartAmount() + shipping_fee).toFixed(2)} €</span> */}
                                <span className="font-brandon-800 text-fofalText text-base">{getCartAmount().toFixed(2)} €</span>
                            </div>

                            <button onClick={!user ? () => navigate('/login') : () => navigate('/checkout')}
                                className="bg-gradient-auto w-full rounded-[4px] py-2 text-white font-brandon-400 text-base">
                                Confirmar
                            </button>
                            <p className="font-brandon-500 text-zinc-400 text-sm">IVA incluído</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CartPage;
