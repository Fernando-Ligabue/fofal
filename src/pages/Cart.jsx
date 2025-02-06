import { useCart } from "@/context/CartContext";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const CartPage = () => {
    const { cart, updateCart, removeFromCart, getCartAmount } = useCart();

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

    return (
        <section className="w-full p-4">
            <div className="max-w-screen-xl flex flex-col mx-auto gap-6 pt-60 md:pt-60 pb-10">
                {/* div vazia se nao houver items no carrinho */}
                {cart.length === 0 && (
                    <div className="flex flex-col items-center gap-4 pb-40">
                        <h1 className="text-5xl font-brandon-500 text-fofalText text-left w-full">Carrinho</h1>
                        <ShoppingBag size={100} />
                        <p className="font-brandon-400 text-3xl text-fofalText">Seu carrinho esta vazio</p>
                        <Link to="/" className="font-brandon-400 text-3xl text-fofalText border border-fofalText py-2 px-4 rounded-[4px]">
                            Voltar para a loja.
                        </Link>
                    </div>
                )}

                {/* div com produtos que serao apresentadas se houver items no carrinho */}
                {cart.length > 0 && (
                    <div className="flex space-between items-start flex-col sm:flex-row gap-14">
                        <div className="w-full sm:max-w-[70%] flex flex-col gap-5">
                            <h1 className="text-5xl font-brandon-500 text-fofalText text-left w-full">Carrinho</h1>
                            <div>
                                <div className="w-full grid grid-cols-[1fr_30%_15%] border-b border-fofalText px-4 py-2">
                                    <span className="font-brandon-400 text-sm text-fofalText">Produtos</span>
                                    <span className="font-brandon-400 text-sm text-fofalText">Quantidade</span>
                                    <span className="font-brandon-400 text-sm text-fofalText">Total</span>
                                </div>

                                {cart.length > 0 && (
                                    cart.map((item) => (
                                        <div key={item.id} className="relative w-full grid grid-cols-[1fr_30%_15%] md:px-4 pt-4 pb-10 items-center border-b border-fofalText">
                                            <div className="font-brandon-300 text-sm text-fofalText flex flex-col lg:flex-row justify-start items-start lg:items-center gap-4">
                                                <img className="w-full max-w-32" src={item.images[0] || "https://dummyjson.com/image/200x100"} alt={item.title} />
                                                <div>
                                                    <p className="font-brandon-800 text-base text-fofalText max-w-60">{item.title}</p>
                                                    <p className="font-brandon-800 text-base text-fofalText max-w-60">{item.name}</p>
                                                    {item.dimensions && <p className="font-brandon-400 text-base text-fofalText max-w-60">{item.dimensions}</p>}
                                                    {item.description ? (
                                                        <p className="font-brandon-400 text-base text-fofalText max-w-60 truncate">{item.description}</p>
                                                    ) : (
                                                        <p className="font-brandon-400 text-base text-fofalText max-w-60">Descrição não disponível</p>
                                                    )}
                                                    <small className="font-brandon-400 text-fofalText">Tamanho: {item.size}</small>
                                                </div>
                                            </div>

                                            <div className="font-brandon-300 text-sm text-fofalText flex justify-start items-center gap-8">
                                                <div className="flex justify-start items-center gap-2 border border-fofalText p-2 rounded-[4px]">
                                                    <Minus size={14} className="cursor-pointer" onClick={() => handleDecrease(item.id)} />
                                                    <span className="font-brandon-500 text-base text-fofalText">{item.quantity}</span>
                                                    <Plus size={14} className="cursor-pointer" onClick={() => handleIncrease(item.id)} />
                                                </div>
                                            </div>

                                            <div className="font-brandon-300 text-sm text-fofalText">
                                                <span className="font-brandon-500">{(item.price * item.quantity).toFixed(2)} €</span>
                                            </div>

                                            <div className="absolute sm:left-4 bottom-2 flex-center gap-1 cursor-pointer" onClick={() => removeFromCart(item.id)}>
                                                <Trash2 size={14} className="cursor-pointer text-red-700" /><span className="text-sm text-red-700 font-brandon-400">Remover</span>
                                            </div>
                                        </div>
                                    ))
                                )}

                                <div className="w-full max-w-screen-xl mx-auto gap-6 py-6">
                                    <Link to="/" className="w-full text-left py-2 text-fofalText font-brandon-400 hover:font-brandon-500 hover:underline text-base rounded-full"><span>{cart.length > 0 ? 'Continuar comprando' : 'Voltar para a loja'}</span></Link>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:max-w-[30%] flex flex-col gap-5">
                            <h3 className="text-3xl font-brandon-400 text-fofalText text-left w-full pt-3 hidden sm:block">Resumo do pedido</h3>
                            <div className="w-full flex flex-col gap-5 py-2">
                                <span className="font-brandon-400 text-sm text-fofalText">Observações</span>
                                <textarea name="observacoes" id="observacoes" cols="30" rows="5" className="border border-fofalText rounded-[4px] resize-none"></textarea>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="font-brandon-800 text-zinc-400 text-base">Subtotal</span>
                                <span className="font-brandon-800 text-fofalText text-base">{getCartAmount().toFixed(2)} €</span>
                            </div>

                            <button className="bg-gradient-auto w-full rounded-[4px] py-2 text-white font-brandon-400 text-base">Confirmar</button>

                            <p className="font-brandon-500 text-zinc-400 text-sm">IVA incluído</p>
                        </div>
                    </div>
                )
                }
            </div>
        </section>
    );
};

export default CartPage;
