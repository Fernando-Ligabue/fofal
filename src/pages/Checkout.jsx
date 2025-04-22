import { useCart } from "@/context/CartContext";
// import { useUser } from "@/context/UserContext";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
    // const { user } = useUser();
    const { cart, getCartAmount } = useCart();


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

                {cart.length > 0 && (
                    <div className="flex space-between items-start flex-col sm:flex-row gap-2 sm:gap-14">
                        <div className="w-full lg:max-w-[50%] flex flex-col gap-2">
                            <h1 className="text-5xl font-brandon-500 text-fofalText text-left w-full">Checkout</h1>
                            <div className="w-full flex flex-col gap-5 py-2 mt-3">
                                <span className="font-brandon-400 text-sm text-fofalText">Infos Pagamento</span>
                            </div>
                        </div>

                        <div className="relative w-full sm:max-w-[50%] flex flex-col gap-5 bg-bgCards/80 p-4">
                            <div>
                                {cart.map((item) => (
                                    <div key={item.id} className="relative w-full flex justify-between items-end md:px-4 pt-4 pb-10 border-b border-fofalText">
                                        <div className="font-brandon-300 text-sm text-fofalText flex flex-col lg:flex-row justify-start items-start gap-4">
                                            <img
                                                className="w-full max-w-32"
                                                src={(item.images && item.images.length > 0) ? item.images[0] : "https://dummyjson.com/image/300x200"}
                                                alt={item.title}
                                            />
                                            {item.type !== "custom-carpet" ? (
                                                <div>
                                                    <Link to={`/${item.setor}/${item.segmento}`} className="font-brandon-800 text-base text-fofalText w-full">{item.title} - {item.type}</Link>

                                                    <p className="font-brandon-400 text-base text-fofalText w-full truncate">{item.size}</p>

                                                    {item.type === "MT113" && item.thickness && (
                                                        <p className="font-brandon-400 text-sm text-fofalText">Espessura: {item.thickness} mm</p>
                                                    )}

                                                    {/* Verifica se o produto é vendido por metro quadrado */}
                                                    {item.isSoldPerSquareMeter && item.width && item.height && (
                                                        <small className="font-brandon-400 text-fofalText">
                                                            Tamanho: {(item.width * item.height).toFixed(2)} m²
                                                        </small>
                                                    )}

                                                    {/* Exibe tamanho para produtos que não são vendidos por metro quadrado */}
                                                    {!item.isSoldPerSquareMeter && (
                                                        <small className="font-brandon-400 text-fofalText">Tamanho: {item.size}</small>
                                                    )}
                                                </div>
                                            ) : (
                                                <div>
                                                    <Link to={`/auto/tapetes`} className="font-brandon-800 text-base text-fofalText w-full">{item.title}</Link>

                                                    <p className="font-brandon-400 text-sm text-fofalText w-full truncate"><strong>Material: </strong>{formatString(item.materialType)}</p>

                                                    <p className="font-brandon-400 text-sm text-fofalText w-full truncate">
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

                                        <div className="absolute top-1 left-0 sm:top-2 sm:left-2 font-brandon-300 text-sm text-fofalText flex justify-center items-center gap-8">
                                            <div className="flex justify-center items-center gap-2 border border-transparent p-1.5 rounded-full w-8 h-8 bg-gradient-auto">
                                                <span className="font-brandon-500 text-base text-white selection:bg-transparent">{item.quantity}</span>
                                            </div>
                                        </div>

                                        <div className="font-brandon-300 text-sm text-fofalText">
                                            <span className="font-brandon-500">{(item.price * item.quantity).toFixed(2)} €</span>
                                        </div>
                                    </div>
                                ))}

                                <div className="flex justify-between items-center mt-4">
                                    <span className="font-brandon-800 text-fofalText text-base">Subtotal</span>
                                    <span className="font-brandon-800 text-fofalText text-base">{getCartAmount().toFixed(2)} €</span>
                                </div>

                                <div className="w-full max-w-screen-xl mx-auto gap-6 py-6">
                                    <Link to="/" className="w-full text-left py-2 text-fofalText font-brandon-400 hover:font-brandon-500 hover:underline text-base rounded-full">
                                        <span>Voltar para a loja</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CheckoutPage;
