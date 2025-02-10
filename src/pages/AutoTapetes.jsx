import TopSectionAuto from "@/components/TopSectionAuto";
import { Helmet } from "react-helmet";

const Automovel = () => {

  return (
    <>
      <Helmet>
        <title>FOFAL | Tapetes Automóvel à medida</title>
        <meta name="description" content="Fofal | Tapetes e coberturas para seu automóvel" />
      </Helmet>

      <TopSectionAuto />

      <section className="w-full h-2 bg-bgCards"></section>

      <section className="w-full flex-center p-4 mb-10">
        <div className="w-full max-w-container mx-auto p-4 flex flex-col gap-8">
          <p className="sm:hidden font-brandon-800 text-3xl text-fofalText mb-2">Tapetes Auto</p>
          <h1 className="font-brandon-800 text-3xl text-fofalText">Descrição</h1>
          <div className="lg:columns-2 gap-16">
            <p className="font-brandon-400 text-2xl text-fofalText mb-8">Na Fofal Fabricamos <strong>tapetes para automóvel à medida</strong> desde 1961, para todas as marcas e modelos auto – efectuamos tapetes para <strong>viaturas modernas</strong> e <strong>carros clássicos</strong>, podendo <strong>personalizá-los</strong>. Os detalhes são importantes para nós, pelo que a execução dos tapetes é feita de forma artesanal e aliada às tecnologias actuais, desde tapetes mais simples aos mais excêntricos e invulgares, pode encontrar aqui connosco na Fofal.</p>

            <p className="font-brandon-400 text-2xl text-fofalText mb-8">Presentemente, fornecemos o território nacional e exportamos para outros países da comunidade europeia, vendendo tanto para consumidor final como para concessionários e outros retalhistas.</p>

            <p className="font-brandon-400 text-2xl text-fofalText mb-8">Na Fofal, poderá encontrar diversos materiais de tapetes auto em <strong>alcatifa</strong> com cores e texturas diferentes e também <strong>tapetes de borracha</strong>. Temos para lhe oferecer gamas mais económicas, gamas intermédias e gamas de qualidade superior, sendo que em todas irá encontrar espelhada a nossa experiência de mercado com mais de 60 anos podendo contar com a nossa qualidade, rapidez e detalhes singulares em cada tapete. Temos uma solução para cada viatura e certamente iremos superar as suas expectativas.</p>
          </div>
        </div>
      </section>

      <section className="w-full h-2 bg-bgCards"></section>

    </>
  );
};

export default Automovel;
