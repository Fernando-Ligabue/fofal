import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import useProducts from "@/hooks/useProducts";
import { Helmet } from "react-helmet";
import QuantitySelector from "@/components/QuantitySelector";

const CoberturaPageUniversal = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const [product, setProduct] = useState(null);

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
          <div className="w-full md:max-w-[50%] flex-flex-col justify-start items-start space-y-6 lg:px-10">
            <span className="text-lg text-fofalText font-brandon-400">
              Loja
            </span>
            <h1 className="text-3xl font-brandon-900">{product.title}</h1>
            <p>{product.description}</p>
            <p className="text-lg font-brandon-800">
              {product.price.toFixed(2)} €
            </p>

            <div className="w-full flex gap-10 border-b border-fofalText py-4">
              <span
                className={`font-brandon-800 text-fofalText text-md gap-4 uppercase cursor-pointer"}`}
              >
                Características
              </span>
            </div>
            <div>
                <div className="flex flex-col gap-2 space-y-6 ">
                  <p className="font-brandon-500 text-lg text-fofalText ">
                    Tamanho:{" "}
                    <span className="font-brandon-400">
                      {product.size} - {product.dimensions}
                    </span>
                  </p>
                  <p className="font-brandon-500 text-lg text-fofalText border-t border-fofalText pt-4">
                    <span className="font-brandon-400">
                      {product.aditionalInfo}
                    </span>
                  </p>
                </div>
            </div>
            <QuantitySelector product={product} />
          </div>
        </div>
      </section>
    </>
  );
};

export default CoberturaPageUniversal;
