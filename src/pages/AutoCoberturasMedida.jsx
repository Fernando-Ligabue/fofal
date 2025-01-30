import { itemsAuto } from "@/lib/constants";
import { Helmet } from "react-helmet";
import { useLocation, useNavigate } from "react-router-dom";

const AutoCoberturasMedida = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const getLinkClassNames = (path) => {
    return location.pathname === path ? `font-brandon-800` : `font-brandon-400`;
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
              onClick={() => navigate(item.url)}
            >
              <div className="rounded-2xl bg-bgCards p-4 flex-center flex-col">
                <img src={item.imageUrl} className="w-full" alt={item.title} />
              </div>
              <h3
                className={`text-2xl mt-4 ${getLinkClassNames(item.url)} text-fofalText`}
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
          O CONTEUDO DAS COBERTURAS  MEDIDA  VAI AQUI
        </div>
      </section>
    </>
  );
};

export default AutoCoberturasMedida;
