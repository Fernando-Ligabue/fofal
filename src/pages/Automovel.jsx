import CoberturasUniversais from "@/components/CoberturasUniversais";
import { itemsAuto } from "@/lib/constants";
import { useState } from "react";
import { Helmet } from "react-helmet";

const Automovel = () => {
  const [tapetesComponent, setTapetesComponent] = useState(true);
  const [sobMedidaComponent, setSobMedidaComponent] = useState(false);
  const [coberturasUComponent, setCoberturasUComponent] = useState(false);

  const handleClick = (itemId) => {
    // Resetando os componentes
    setTapetesComponent(false);
    setSobMedidaComponent(false);
    setCoberturasUComponent(false);

    if (itemId === 1) {
      setTapetesComponent(true);
    } else if (itemId === 2) {
      setSobMedidaComponent(true);
    } else if (itemId === 3) {
      setCoberturasUComponent(true);
    }
  };

  const getFontWeight = (componentType) => {
    if (componentType) return "font-brandon-900";
    return "font-brandon-400";
  };

  return (
    <>
      <Helmet>
        <title>FOFAL | Automóvel</title>
        <meta name="description" content="Fofal | Tapetes e coberturas para seu automóvel" />
      </Helmet>
      <section className="w-full bg-banner flex-center text-center text-white p-4">
        <div
          className="grid grid-cols-1 md:grid-cols-3 max-w-container gap-6 pt-60 md:pt-40 pb-10"
        >
          {itemsAuto.map((item) => (
            <div
              className="cursor-pointer"
              key={item.id}
              onClick={() => handleClick(item.id)}
            >
              <div className="rounded-2xl bg-bgCards p-4 flex-center flex-col">
                <img src={item.imageUrl} className="w-full" alt={item.title} />
              </div>
              <h3
                className={`text-2xl mt-4 ${getFontWeight(
                  item.id === 1
                    ? tapetesComponent
                    : item.id === 2
                    ? sobMedidaComponent
                    : item.id === 3
                    ? coberturasUComponent
                    : false
                )} text-fofalText`}
              >
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full h-2 bg-bgCards"></section>
      <section className="w-full flex-center p-4">
        <div className="w-full max-w-container mx-auto p-4">
          {tapetesComponent && <p>tapetes componente</p>}
          {sobMedidaComponent && <p>sob medida componente</p>}
          {coberturasUComponent && <CoberturasUniversais />}
        </div>
      </section>
    </>
  );
};

export default Automovel;
