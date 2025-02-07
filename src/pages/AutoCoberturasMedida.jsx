import { Helmet } from "react-helmet";

import CoberturaMedida from "@/components/CoberturaMedida";
import TopSectionAuto from "@/components/TopSectionAuto";

const AutoCoberturasMedida = () => {

  return (
    <>
      <Helmet>
        <title>FOFAL | Automóvel</title>
        <meta name="description" content="Fofal | Tapetes e coberturas para seu automóvel" />
      </Helmet>

      <TopSectionAuto />

      <section className="w-full h-2 bg-bgCards"></section>

      <section className="w-full flex-center p-4 mb-10">
        <div className="w-full max-w-container mx-auto p-4 flex flex-col gap-8">
        <p className="sm:hidden font-brandon-800 text-3xl text-fofalText mb-2">Coberturas à medida</p>

          <h1 className="font-brandon-800 text-3xl text-fofalText">Descrição</h1>
          <div className="lg:columns-2 gap-16">
            <p className="font-brandon-400 text-2xl text-fofalText mb-8">Uma <strong>Cobertura</strong> acrescenta sempre valor ao automóvel tendo como objetivo principal protegê-lo, conservar a carroçaria poupando a pintura, os elementos plásticos e borrachas atrasando a sua ressecação.
            </p>

            <p className="font-brandon-400 text-2xl text-fofalText mb-8">As coberturas automóvel que <strong>confecionamos</strong> são <strong>à medida</strong> de cada viatura e podem ser personalizadas, executamos tanto para exterior (outdoor) como para interior (indoor).</p>

            <p className="font-brandon-400 text-2xl text-fofalText mb-8">Os materiais são de <strong>qualidade superior</strong> e no caso das de interior, são respiráveis. Ambas apresentam verso em pelúcia para não riscar a pintura.
              Os nossos recursos tecnológicos aliados à colaboração de operadores cada vez mais especializados e experientes têm permitido diversificar as opções e criar produtos mais detalhados, indo assim ao encontro das mais recentes exigências dos nossos clientes.</p>
          </div>
        </div>
      </section>

      <section className="w-full h-2 bg-bgCards"></section>

      <section>
        <CoberturaMedida />
      </section>


    </>
  );
};

export default AutoCoberturasMedida;
