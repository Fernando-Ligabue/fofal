import { useState } from "react";
import { Helmet } from "react-helmet";
import { ChevronRight, MinusCircle, PlusCircle } from "lucide-react";


import shipping from "/imagens/home/shipping.svg";
import safeOrder from "/imagens/home/safe-order.svg";
import specialists from "/imagens/home/specialists.svg";
import cover from "/imagens/auto/cover-medida.webp";



const CoberturaMedida = () => {
  const [activeTab, setActiveTab] = useState("visao-geral");

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
    console.log("Form submit");
  };

  const handleInteriorChange = () => {
    setInteriorChecked(true);
    setExteriorChecked(false);
  };

  const handleExteriorChange = () => {
    setExteriorChecked(true);
    setInteriorChecked(false);
  };

  return (
    <>
      <Helmet>
        <title>FOFAL | Coberturas Auto à Medida</title>
        <meta name="description" content="Fofal | Coberturas sob Medida" />
      </Helmet>

      <section className="w-full h-full p-4">
        <div className="max-w-container h-full md:min-h-[70vh] mx-auto pt-40 sm:p-4 flex flex-col lg:flex-row justify-between items-stretch gap-10">
          <div className="w-full flex flex-col justify-center items-center lg:max-w-[60%] bg-bgCards">
            <img src={cover} alt="FOFAL - COberturas à medida" />
          </div>
          <div className="w-full lg:max-w-[40%] flex flex-col justify-start items-start space-y-6 lg:px-4">
            <h1 className="font-brandon-800 text-4xl sm:text-5xl text-fofalText text-left">
              Coberturas Auto
              <br />
              à medida
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

                  <form onSubmit={handleSubmit}>
                    <div className="pb-2">
                      <p
                        className="flex justify-between items-center font-brandon-500 text-lg text-fofalText border-t border-fofalText py-4"
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
                      <div>
                        <p
                          className="flex justify-between items-center font-brandon-500 text-lg text-fofalText border-t border-fofalText py-4"
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

                    <div className="pb-2">
                      <p
                        className="flex justify-between items-center font-brandon-500 text-lg text-fofalText border-t border-fofalText py-4"
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


                    <div className="pb-2">
                      <p
                        className="flex justify-between items-center font-brandon-500 text-lg text-fofalText border-t border-fofalText py-4"
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


                    <div className="pb-2">
                      <p
                        className="flex justify-between items-center font-brandon-500 text-lg text-fofalText border-t border-fofalText py-4"
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


                    <div className="pb-2">
                      <p
                        className="flex justify-between items-center font-brandon-500 text-lg text-fofalText border-t border-fofalText py-4"
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

                    <div className="pb-2">
                      <p
                        className="flex justify-between items-center font-brandon-500 text-lg text-fofalText border-t border-fofalText py-4"
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
                            <input type="text" className="border border-zinc-400 rounded-[4px] p-0.5" placeholder="Cor escolhida: 1"/>
                            <input type="text" className="border border-zinc-400 rounded-[4px] p-0.5" placeholder="Cor escolhida: 2"/>
                            <input type="text" className="border border-zinc-400 rounded-[4px] p-0.5" placeholder="Cor escolhida: 3"/>
                          </div>
                          <small className="font-brandon-300 text-[12px] text-fofalText">* máximo 3 cores permitidas</small>
                        </div>
                      )}
                    </div>

                    <div className="w-full flex justify-start items-center gap-4 text-lg text-fofalText border-t border-fofalText py-4">
                      <p className="font-brandon-800 text-lg text-fofalText">
                        Quantidade
                      </p>
                      <MinusCircle size={20} className="text-fofalText cursor-pointer" />
                      <span>1</span>
                      <PlusCircle size={20} className="text-fofalText cursor-pointer" />
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

export default CoberturaMedida;
