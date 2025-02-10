import { useState } from "react";
import { Helmet } from "react-helmet";
import { ChevronRight, MinusCircle, PlusCircle } from "lucide-react";


import shipping from "/images/home/shipping.svg";
import safeOrder from "/images/home/safe-order.svg";
import specialists from "/images/home/specialists.svg";
import coverBlack from "/images/auto/cover-medida.webp";
import coverBlue from "/images/auto/cover-medida-blue.webp";
import coverRed from "/images/auto/cover-medida-red.webp";
import coverYellow from "/images/auto/cover-medida-yellow.webp";
import ColorSelector from "./ColorSelector";



const CoberturaMedida = () => {
  const [activeTab, setActiveTab] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('black');

  const [openCover, setOpenCover] = useState(false);
  const [openCoverInt, setOpenCoverInt] = useState(false);
  const [interiorChecked, setInteriorChecked] = useState(false);
  const [exteriorChecked, setExteriorChecked] = useState(false);

  const [openBrand, setOpenBrand] = useState(false);
  const [openYear, setOpenYear] = useState(false);
  const [openModels, setOpenModels] = useState(false);
  const [openShapes, setOpenShapes] = useState(false);
  const [openColors, setOpenColors] = useState(false);

  const handleSubmit = () => {
    alert("Form submit");
  };

  const handleInteriorChange = () => {
    setInteriorChecked(true);
    setExteriorChecked(false);
  };

  const handleExteriorChange = () => {
    setExteriorChecked(true);
    setInteriorChecked(false);
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const colorImages = {
    black: coverBlack,
    blue: coverBlue,
    red: coverRed,
    yellow: coverYellow,
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };


  return (
    <>
      <Helmet>
        <title>FOFAL | Coberturas Auto à Medida</title>
        <meta name="description" content="Fofal | Coberturas sob Medida" />
      </Helmet>

      <section className="w-full h-full p-4">
        <div className="max-w-container h-full md:min-h-[70vh] mx-auto pt-10 sm:p-4 flex flex-col lg:flex-row justify-between items-start gap-10">
          <div className="relative w-full sm:min-h-screen flex flex-col justify-center items-center lg:max-w-[60%] bg-bgCards">
            <img src={colorImages[selectedColor]}
              alt={`FOFAL - COberturas à medida ${selectedColor}`}
              className="w-full max-w-[680px]"
            />
            <div className="absolute right-3">
              <ColorSelector onColorSelect={handleColorSelect} />
            </div>
          </div>

          <div className="w-full lg:max-w-[40%] flex flex-col justify-start items-start space-y-6 lg:px-4">
            <span className="text-lg text-fofalText font-brandon-400 mb-10">
              Loja
            </span>
            <h1 className="font-brandon-800 text-4xl sm:text-5xl text-fofalText text-left">
              Coberturas Auto
              <br />
              à medida
            </h1>

            <div className="w-full flex justify-start items-center gap-4 border-b border-fofalText py-4">
              <span
                onClick={() => setActiveTab(prev => prev === "visao-geral" ? "" : "visao-geral")}
                className={`font-brandon-500 text-fofalText text-xs gap-4 uppercase cursor-pointer ${activeTab === "visao-geral" ? "font-bold" : ""
                  }`}
              >
                Características
              </span>
              <span
                onClick={() => setActiveTab(prev => prev === "caracteristicas" ? "" : "caracteristicas")}
                className={`font-brandon-500 text-fofalText text-xs gap-4 uppercase cursor-pointer ${activeTab === "caracteristicas" ? "font-bold" : ""
                  }`}
              >
                Diferenças entre materiais
              </span>
            </div>
            <div>
              {activeTab === "visao-geral" && (
                <div className={`space-y-6`}>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-brandon-800 text-lg text-fofalText">Conforto | Design</h3>
                    <p className="font-brandon-400 text-base text-fofalText">São desenhadas à medida a partir de trabalho artesanal, dando-se importância aos detalhes, sendo uma confeção minuciosa e ajustando-se ao veículo em todas as suas linhas. Cobrem a viatura na totalidade, mais especificamente até abaixo do meio da cava da roda. As coberturas são entregues devidamente embaladas num saco confecionado para o efeito e que servirá para proteger a sua cobertura automóvel quando esta não estiver a uso.</p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-brandon-800 text-lg text-fofalText">Personalização</h3>
                    <p className="font-brandon-400 text-base text-fofalText">Reproduzimos a grande maioria dos logótipos das variadas marcas de automóveis. Também podemos criar letterings, ou grafismos. A personalização trata-se de uma Impressão Vinílica Termo-soldada e Serigrafia de tamanho máximo A3, a monocromático ou a cores.<br />
                      Se pretender uma personalização fora do âmbito automóvel, envie-nos a imagem (de preferência em formato vetorial) para verificarmos a possibilidade de execução e apresentarmos uma proposta.</p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-brandon-800 text-lg text-fofalText">Moldes</h3>
                    <p className="font-brandon-400 text-base text-fofalText">Dispomos de uma vasta gama de modelos, contudo, poderemos não dispor ainda do molde da sua viatura. Após a encomenda e caso esta situação se verifique, entramos em contacto para resolver a situação.<br />
                      Prazo de Execução: O prazo de execução depende do volume de produção, no entanto o tempo estimado será de 2-3 semanas após encomenda e verificação dos moldes (se necessário) e salvo ruptura de stock da cor escolhida</p>
                  </div>
                </div>
              )}
              {activeTab === "caracteristicas" && (
                <div className={`space-y-6`}>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-brandon-800 text-lg text-fofalText">Coberturas Interior à Medida</h3>
                    <h4 className="font-brandon-800 text-base text-fofalText">Tecido Standard e Tecido Prime</h4>
                    <p className="font-brandon-400 text-base text-fofalText">Ambos os tecidos (Standard e Prime) são de poliamida com uma elevada percentagem de elastano fazendo com que o tecido não deforme com o uso. Há anos que os nossos clientes adquirem e com satisfação a solução Standard. Contudo, os clientes que possuam a viatura em locais mais húmidos ou que procuram algo ainda mais robusto, eis que surge a solução Prime, um tecido de qualidade superior, com o dobro da gramagem, com um “cair” mais elegante que se ajusta à viatura e valoriza o visual final, reproduzindo o design do seu automóvel. Tanto o tecido Standard como o Prime são compostos por pelúcia no interior não riscando a viatura e ambos são respiráveis. Ambos são altamente eficazes contra o pó, não deixando inclusive que este se acumule sobre a capa pois exercem um efeito “anti-estático” fazendo com que o pó se liberte muito facilmente da superfície da cobertura.</p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-brandon-800 text-lg text-fofalText">Coberturas Exterior à Medida</h3>
                    <h4 className="font-brandon-800 text-base text-fofalText">Tecido de Lona</h4>
                    <p className="font-brandon-400 text-base text-fofalText">As nossas coberturas para exterior são de lona e apresentam uma elevada resistência aos raios U.V. , à chuva (impermeáveis), à neve e gelo, aos dejectos de aves e às resinas das árvores. Nas costuras são vulcanizadas para que não passe água entre as mesmas e por dentro são constituídas por pelúcia de forma a que não risque a viatura. A cobertura leva nos quatro cantos elásticos e entre as rodas ilhoses para que possa prender a cobertura nos dias mais ventosos.<br />
                      Apenas está disponível na cor Cinzento Claro devido aos raios U.V.</p>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2 space-y-6 ">
              {/* <p className="font-brandon-500 text-lg text-fofalText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis est ratione numquam ex! Dignissimos veniam magni
                accusantium blanditiis. Blanditiis odio natus eos eius, ipsam
                quia assumenda libero eveniet officiis voluptates?
              </p> */}
              {/* quadro de servicos/icons */}
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
              {/* form encomenda coberturas a medida */}
              <form onSubmit={handleSubmit}>
                <div className="pb-1">
                  <p
                    className="flex justify-between items-center font-brandon-500 text-lg text-fofalText border-t border-fofalText py-4 cursor-pointer"
                    onClick={() => setOpenCover(!openCover)}
                  >
                    <span className="font-brandon-800">Cobertura</span>
                    <ChevronRight
                      className={`w-5 h-5 transition-all ease-in-out duration-300 ${openCover ? "rotate-90" : "rotate-0"
                        }`}
                    />
                  </p>
                  {openCover && (
                    <div className="w-full flex justify-start items-start flex-col gap-1 p-2">
                      <div className="flex items-center gap-1">
                        <input
                          type="checkbox"
                          name="interior"
                          id="interior"
                          checked={interiorChecked}
                          onChange={handleInteriorChange}
                        />
                        <span className="text-xm font-brandon-500">Interior</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <input
                          type="checkbox"
                          name="exterior"
                          id="exterior"
                          checked={exteriorChecked}
                          onChange={handleExteriorChange}
                        />
                        <span className="text-xm font-brandon-500">Exterior</span>
                      </div>
                    </div>
                  )}
                </div>

                {interiorChecked && (
                  <div className="pb-1">
                    <p
                      className="flex justify-between items-center font-brandon-500 text-lg text-fofalText border-t border-fofalText py-4 cursor-pointer"
                      onClick={() => setOpenCoverInt(!openCoverInt)}
                    >
                      <span className="font-brandon-800">Coberturas de interior</span>
                      <ChevronRight
                        className={`w-5 h-5 transition-all ease-in-out duration-300 ${openCoverInt ? "rotate-90" : "rotate-0"
                          }`}
                      />
                    </p>
                    {openCoverInt && (
                      <div className="w-full flex justify-start items-start flex-col gap-1 p-2">
                        <div className="flex items-center gap-1">
                          <input type="checkbox" name="interior" id="interior" />
                          <span className="text-xm font-brandon-500">Qualidade Standard</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <input type="checkbox" name="exterior" id="exterior" />
                          <span className="text-xm font-brandon-500">Qualidade Prime</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <div className="pb-1">
                  <p
                    className="flex justify-between items-center font-brandon-500 text-lg text-fofalText border-t border-fofalText py-4 cursor-pointer"
                    onClick={() => setOpenBrand(!openBrand)}
                  >
                    <span className="font-brandon-800">Marca</span>
                    <ChevronRight
                      className={`w-5 h-5 transition-all ease-in-out duration-300 ${openBrand ? "rotate-90" : "rotate-0"
                        }`}
                    />
                  </p>
                  {openBrand && (
                    <div className="w-full flex justify-start items-start flex-col gap-1 p-2">
                      <div className="flex items-center gap-1">
                        select marcas
                      </div>
                    </div>
                  )}
                </div>


                <div className="pb-1">
                  <p
                    className="flex justify-between items-center font-brandon-500 text-lg text-fofalText border-t border-fofalText py-4 cursor-pointer"
                    onClick={() => setOpenYear(!openYear)}
                  >
                    <span className="font-brandon-800">Ano</span>
                    <ChevronRight
                      className={`w-5 h-5 transition-all ease-in-out duration-300 ${openYear ? "rotate-90" : "rotate-0"
                        }`}
                    />
                  </p>
                  {openYear && (
                    <div className="w-full flex justify-start items-start flex-col gap-1 p-2">
                      <div className="flex items-center gap-1">
                        select anos
                      </div>
                    </div>
                  )}
                </div>


                <div className="pb-1">
                  <p
                    className="flex justify-between items-center font-brandon-500 text-lg text-fofalText border-t border-fofalText py-4 cursor-pointer"
                    onClick={() => setOpenModels(!openModels)}
                  >
                    <span className="font-brandon-800">Modelos</span>
                    <ChevronRight
                      className={`w-5 h-5 transition-all ease-in-out duration-300 ${openModels ? "rotate-90" : "rotate-0"
                        }`}
                    />
                  </p>
                  {openModels && (
                    <div className="w-full flex justify-start items-start flex-col gap-1 p-2">
                      <div className="flex items-center gap-1">
                        select models
                      </div>
                    </div>
                  )}
                </div>


                <div className="pb-1">
                  <p
                    className="flex justify-between items-center font-brandon-500 text-lg text-fofalText border-t border-fofalText py-4 cursor-pointer"
                    onClick={() => setOpenShapes(!openShapes)}
                  >
                    <span className="font-brandon-800">Moldes</span>
                    <ChevronRight
                      className={`w-5 h-5 transition-all ease-in-out duration-300 ${openShapes ? "rotate-90" : "rotate-0"
                        }`}
                    />
                  </p>
                  {openShapes && (
                    <div className="w-full flex justify-start items-start flex-col gap-1 p-2">
                      <div className="flex items-center gap-1">
                        select Moldes
                      </div>
                    </div>
                  )}
                </div>

                <div className="pb-1">
                  <p
                    className="flex justify-between items-center font-brandon-500 text-lg text-fofalText border-t border-fofalText py-4 cursor-pointer"
                    onClick={() => setOpenColors(!openColors)}
                  >
                    <span className="font-brandon-800">Cor da personalização</span>
                    <ChevronRight
                      className={`w-5 h-5 transition-all ease-in-out duration-300 ${openColors ? "rotate-90" : "rotate-0"
                        }`}
                    />
                  </p>
                  {openColors && (
                    <div className="w-full flex justify-start items-start flex-col gap-1 p-2">
                      <div className="flex flex-col items-center gap-1">
                        <input type="text" className="border border-zinc-400 rounded-[4px] p-0.5" placeholder="Cor escolhida: 1" />
                        <input type="text" className="border border-zinc-400 rounded-[4px] p-0.5" placeholder="Cor escolhida: 2" />
                        <input type="text" className="border border-zinc-400 rounded-[4px] p-0.5" placeholder="Cor escolhida: 3" />
                      </div>
                      <small className="font-brandon-300 text-[12px] text-fofalText">* máximo 3 cores permitidas</small>
                    </div>
                  )}
                </div>

                <div className="w-full flex justify-start items-center gap-4 text-lg text-fofalText border-t border-fofalText py-4">
                  <p className="font-brandon-800 text-lg text-fofalText">
                    Quantidade
                  </p>
                  <MinusCircle
                    size={20}
                    className={`text-fofalText cursor-pointer ${quantity === 1 ? "!cursor-not-allowed opacity-50" : ""}`}
                    onClick={handleDecreaseQuantity}
                  />
                  <span className="text-fofalText font-brandon-500 text-base text-center selection:bg-transparent">{quantity}</span>
                  <PlusCircle
                    size={20}
                    className="text-fofalText cursor-pointer"
                    onClick={handleIncreaseQuantity}
                  />
                </div>

                <p className="text-fofalText font-brandon-500 py-4">A FOFAL dispõe de vários moldes, contudo, poderá acontecer
                  não deter o molde de uma determinada viatura. Se for o caso,
                  entraremos em contacto com o cliente para resolver a questão.</p>

                <div className="w-full flex-center gap-4 p-4">
                  <button type="submit" className="w-full max-w-80 bg-gradient-auto rounded-full font-brandon-500 text-base text-white py-2 px-6">
                    Submeter
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoberturaMedida;
