import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Helmet } from "react-helmet";

import useProducts from "@/hooks/useProducts";
import shipping from "/images/home/shipping.svg";
import safeOrder from "/images/home/safe-order.svg";
import specialists from "/images/home/specialists.svg";
// import QuantitySelector from "@/components/QuantitySelector";
import useCart from "@/hooks/useCart";
import toast from "react-hot-toast";
import { calculateAlcatifasHome } from "@/lib/fnUtils.js/calculates";
import { getFormattedPrice } from "@/lib/fnUtils.js/priceFormatters";
import { getButtonClass } from "@/lib/fnUtils.js/getButtonClass";
import { Loader } from "lucide-react";

const HousesProductPage = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const [product, setProduct] = useState(null);
  const [activeTab, setActiveTab] = useState("visao-geral");
  const [color, setColor] = useState('Preto');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [thickness, setThickness] = useState('');

  const [calculatedPrice, setCalculatedPrice] = useState(null);
  const [loading, setLoading] = useState(false);



  const isSpecialType = ["plat", "salsa"].includes(product?.type?.toLowerCase());
  const shouldShowMt2 = (product?.isSoldPerSquareMeter || isSpecialType) && product?.type !== "Alumínio";

  const { addSquareMeterToCart } = useCart();

  const calculatePrice = async () => {
    if (!width || !height || parseFloat(width) <= 0 || parseFloat(height) <= 0) {
      toast.error("Insira medidas válidas de largura e profundidade.");
      return;
    }

    setLoading(true);

    let result;

    try {
      result = await calculateAlcatifasHome(product, parseFloat(width), parseFloat(height), thickness);


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
    setThickness(e.target.value);
  };

  const handleAddToCart = () => {
    if (product?.isSoldPerSquareMeter || isSpecialType) {
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
      console.error("Não foi possivel processar o seu pedido")
    }
  };

  useEffect(() => {
    setCalculatedPrice(null);
  }, [width, height, thickness]);


  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  useEffect(() => {
    const selectedProduct = products.find((product) => product.id === parseInt(id));
    setProduct(selectedProduct);

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id, products]);


  if (!product) {
    return (
      <section className="w-full min-h-[90vh] py-60 px-4">
        <div className="max-w-container mx-auto flex flex-col justify-between items-center gap-4">
          <h3 className="w-full text-center font-brandon-800 text-4xl">
            Produto não encontrado.
          </h3>
          <button
            className="border border-fofalText rounded-full font-brandon-400 py-2 px-6"
            onClick={handleBack}
          >
            Voltar
          </button>
        </div>
      </section>
    );
  }

  return (
    <>
      <Helmet>
        <title>FOFAL | {product.title}</title>
        <meta name="description" content={product.description} />
      </Helmet>

      <section className="w-full h-full py-40 p-4">
        <div className="max-w-container h-full md:min-h-[70dvh] mx-auto pt-40 sm:p-4 flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="w-full !min-h-[70dvh] flex flex-col justify-center items-center md:max-w-[50%] bg-bgCards">
            <Carousel className="w-full max-w-full relative">
              <CarouselContent>
                {(product.images && product.images.length > 0 ? product.images : ["/a-fofal/fofal.svg"]).map((image, index) => (
                  <CarouselItem key={index}>
                    <img src={image} alt={product.title} className="w-full h-full object-cover" />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute top-1/2 left-5" />
              <CarouselNext className="absolute top-1/2 right-5" />
            </Carousel>
          </div>
          <div className="w-full lg:max-w-[40%] flex flex-col justify-start items-start space-y-6 lg:px-4">
            <span className="text-lg text-fofalText font-brandon-400 mb-10">
              Loja
            </span>
            <h1 className="font-brandon-800 text-4xl sm:text-5xl text-fofalText text-left">
              {product.title} {product.type && `${product.type}`}
            </h1>

            <div className="w-full flex justify-between items-center gap-4 border-b border-fofalText py-4">
              <span
                onClick={() => setActiveTab("visao-geral")}
                className={`font-brandon-500 text-fofalText text-xs gap-4 uppercase cursor-pointer ${activeTab === "visao-geral" ? "font-bold" : ""
                  }`}
              >
                Visão Geral
              </span>
              <span
                onClick={() => setActiveTab("caracteristicas")}
                className={`font-brandon-500 text-fofalText text-xs gap-4 uppercase cursor-pointer ${activeTab === "caracteristicas" ? "font-bold" : ""
                  }`}
              >
                Características
              </span>
              <span
                onClick={() => setActiveTab("customizacao")}
                className={`font-brandon-500 text-fofalText text-xs gap-4 uppercase cursor-pointer ${activeTab === "customizacao" ? "font-bold" : ""
                  }`}
              >
                Acabamentos recomendados
              </span>
            </div>
            <div className="w-full max-w-full space-y-14">
              {activeTab === "visao-geral" && (
                <div className="flex flex-col gap-2 space-y-6 p-1">
                  <p className="font-brandon-500 text-mdg text-fofalText" dangerouslySetInnerHTML={{ __html: product.description }} />
                </div>
              )}
               {activeTab === "caracteristicas" && (
                <div className="w-full flex flex-col gap-2 space-y-6 p-4">
                  <ul className="font-brandon-500 text-md text-fofalText pt- space-y-4">
                    {product.features.map((feature, index) => (
                      <li key={index} className="list-disc" dangerouslySetInnerHTML={{ __html: feature }}></li>
                    ))}

                  </ul>
                </div>
              )}
              {activeTab === "customizacao" && (
                <div className="flex flex-col gap-2 space-y-6 p-1.5">
                  <p className="font-brandon-500 text-mdg text-fofalText" dangerouslySetInnerHTML={{ __html: product.description }} />
                </div>
              )}

              <div className="flex justify-around items-center gap-4">
                <div className="flex-center flex-col gap-2">
                  <img className="w-full max-w-6" src={shipping} alt="FOFAL" />
                  <p className="text-sm font-brandon-500 text-zinc-400">Envios Nacionais</p>
                </div>
                <div className="flex-center flex-col gap-2">
                  <img className="w-full max-w-5" src={safeOrder} alt="FOFAL" />
                  <p className="text-sm font-brandon-500 text-zinc-400">Compra Segura</p>
                </div>
                <div className="flex-center flex-col gap-2">
                  <img className="w-full max-w-6" src={specialists} alt="FOFAL" />
                  <p className="text-sm font-brandon-500 text-zinc-400">Somos Especialistas</p>
                </div>
              </div>
            </div>
            {/* {product.type !== "Alumínio" &&  <QuantitySelector product={product} />} */}
            <div className="w-full">
              {product.colors && (
                <div className="mt-4 flex flex-col gap-2">
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

              {/* Medidas se vendido por m² */}
              {shouldShowMt2 && (
                <div className="mt-4 flex gap-4 w-full">
                  <div className="flex flex-col w-full">
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
                  <div className="flex flex-col w-full">
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

              {/* Espessura para MT113 */}
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

              {/* Botão de cálculo e valor final */}
              {parseFloat(width) > 0 && parseFloat(height) > 0 && (
                <div className="mt-4 space-y-2 flex justify-end items-center ">
                  {calculatedPrice !== null ? (
                    <div className="flex justify-between items-center gap-2">
                      <p className="text-lg font-brandon-500">
                        {getFormattedPrice({ price: calculatedPrice })}
                        {shouldShowMt2}
                      </p>

                      <button
                        className={`border-1 border-black rounded-full font-brandon-500 text-base text-white py-2 px-4 selection:bg-transparent ${getButtonClass()}`}
                        onClick={handleAddToCart}
                      >
                        Adicionar ao carrinho
                      </button>
                    </div>
                  ) : (
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
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HousesProductPage;
