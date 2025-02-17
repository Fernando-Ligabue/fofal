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

import { useProducts } from "@/context/ProductsContext";
import shipping from "/images/home/shipping.svg";
import safeOrder from "/images/home/safe-order.svg";
import specialists from "/images/home/specialists.svg";
import QuantitySelector from "@/components/QuantitySelector";

const AlcatifaEventosPage = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const [product, setProduct] = useState(null);
  const [activeTab, setActiveTab] = useState("visao-geral");

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
        <div className="max-w-container h-full md:min-h-[70vh] mx-auto pt-40 sm:p-4 flex flex-col md:flex-row justify-between items-stretch gap-10">
          <div className="w-full flex flex-col justify-center items-center md:max-w-[50%] bg-bgCards">
            <Carousel className="w-full max-w-full relative">
              <CarouselContent>
                {product.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <img
                      src={image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
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
              {product.title}
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
                onClick={() => setActiveTab("informacoes")}
                className={`font-brandon-500 text-fofalText text-xs gap-4 uppercase cursor-pointer ${activeTab === "informacoes" ? "font-bold" : ""
                  }`}
              >
                Informações
              </span>
            </div>
            <div>
              {activeTab === "visao-geral" && (
                <div className="flex flex-col gap-2 space-y-6 ">
                  <p className="font-brandon-500 text-mdg text-fofalText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis est ratione numquam ex! Dignissimos veniam magni
                    accusantium blanditiis. Blanditiis odio natus eos eius, ipsam
                    quia assumenda libero eveniet officiis voluptates?
                  </p>

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

                  <QuantitySelector product={product} />
                </div>
              )}
              {activeTab === "caracteristicas" && (
                <div className="flex flex-col gap-2 space-y-6 ">
                  <p className="font-brandon-500 text-lg text-fofalText">
                    Tamanho:{" "}
                    <span className="font-brandon-400"></span>
                  </p>
                  <p className="font-brandon-500 text-lg text-fofalText border-t border-fofalText pt-4">
                    Informação Adicional <br />{" "}
                    <span className="font-brandon-400"></span>
                  </p>
                </div>
              )}
              {activeTab === "informacoes" && (
                <div className="flex flex-col gap-2 space-y-6 ">
                  CONTEUDO DE INFORMAÇÕES AQUI
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AlcatifaEventosPage;
