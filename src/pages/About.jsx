import { Helmet } from "react-helmet";
import { bgAbout, imgAbout } from "@/lib/constants";

function About() {

  return (
    <>
      <Helmet>
        <title>FOFAL | Sobre Nós</title>
        <meta name="description" content="Fofal | Alcatifas para eventos, Tapetes de entrada, Tapetes de escritório" />
      </Helmet>
      <section className="w-full flex-center my-20 sm:my-10">
        <div className="w-full bg-banner min-h-[50vh] sm:min-h-[60vh] mt-40 flex-center flex-col"
          style={{ backgroundImage: `url(${bgAbout})` }}
        >
          <h1 className="font-brandon-900 text-4xl lg:text-6xl leading-tight text-white text-center">
            PRODUTOS DE EXCELÊNCIA,<br />
            À MEDIDA E PERSONALIZADOS
          </h1>
        </div>
      </section>

      {/* Text Section */}
      <section className="lg:py-20 w-full" data-aos="fade-up" data-aos-delay="300">
        <div className='w-full max-w-screen-xl mx-auto  grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 items-start'>
          <div className="w-full text-fofalText text-2xl font-brandon-300 leading-relaxed p-4">
            <p>Oferecemos um atendimento de excelência, flexibilidade e acabamentos de elevada qualidade.</p>
          </div>
          <div className="right w-full text-lg leading-relaxed  p-4">
            <h2 className='text-4xl text-fofalText font-brandon-800'>
              Em todos os trabalhos fornecemos produtos à medida e personalizados, executando o levantamento de medidas no local e aplicação dos trabalhos se necessário.
            </h2>
          </div>
        </div>
      </section>

      <section className="w-full h-0.5 bg-fofalText"></section>

      <section className="w-full flex-center">
        <div className="w-full max-w-screen-xl bg-banner mx-auto my-10 flex flex-col lg:flex-row justify-between items-center gap-14 px-4"
        >
          <div className="w-full flex flex-col gap-6 py-10 p-4 lg:p-0">
            <p className="text-2xl font-brandon-400 text-fofalText max-w-full p-1">A Fofal surgiu em 1961 em Campo de Ourique com José Porfírio no fabrico de Tapetes para Automóvel à medida, tendo prosseguido nas décadas seguintes com o seu legado familiar até aos dias de hoje. A Fofal expandiu-se, desde então, na área automóvel com destaque nos tapetes, coberturas e capas de bancos os quais atualmente apresentam grande notoriedade de mercado. A empresa destaca-se pela sua forma de trabalho artesanal, prestação de serviços e atendimento personalizados. Conta actualmente com centenas de milhares de moldes para tapetes e coberturas automóvel, todos registados desde a sua fundação e em constante atualização.</p>

            <p className="text-2xl font-brandon-400 text-fofalText max-w-full p-1">Ao longo dos anos a Fofal tornou-se um fornecedor especializado em outros setores como o da Hotelaria, Restauração, Comércio, Habitação, Aviação e Náutica. Nestas áreas, apresenta soluções em alcatifa para o interior, tapetes de entrada e coberturas. Também nestes âmbitos, todos os trabalhos são feitos à medida e satisfazendo as necessidades dos nossos clientes, tornando a Casa dos Tapetes Fofal reconhecida como “Os Alfaiates” .</p>
          </div>
        </div>
      </section>

      <section className="w-full h-0.5 bg-fofalText"></section>

      <section className="w-full mx-auto flex-center lg:mb-10">
        <img src={imgAbout} alt="FOFAL" />
      </section>

      <section className="w-full max-w-screen-xl mx-auto py-4">
        <div className="flex-center p-4">
          <div className="w-full md:max-w-screen-lg flex flex-col space-y-2">
            <h3 className="font-brandon-800 text-4xl">Visão, Missão e Valores</h3>
            <div className="w-20 h-0.5 bg-fofalYellow"></div>
            <div className="columns-1 md:columns-3 space-y-4">
              <p className="font-brandon-400 text-xl">A nossa razão de ser é proporcionar aos nossos clientes produtos de excelência, à medida e personalizados nas nossas áreas de actuação, com entrega rápida, superando as suas expectativas e satisfazendo as necessidades de cada cliente.</p>
              <p className="font-brandon-400 text-xl">Valorizamos o estabelecimento de relações comerciais duradouras e ambicionamos a fidelização de quem nos procura, estimando os laços de amizade que se desenvolvem ao longo do tempo.</p>
              <p className="font-brandon-400 text-xl">Esta missão é conseguida diariamente com resiliência, responsabilidade individual e colectiva, com ética para com todos os nossos clientes, fornecedores e colaboradores, respeito, procura pelo conhecimento
                e expressão criativa.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-screen-lg mx-auto flex-center flex-col gap-6 lg:mt-14 lg:mb-20 p-4">
        <h4 className="font-brandon-800 text-4xl text-center">O nosso objectivo é ser a melhor empresa de referência nacional e ser reconhecida pelos clientes através dos nossos produtos, serviços e know-how.</h4>
        <h4 className="font-brandon-800 text-4xl text-center">A nossa empresa é sediada em Lisboa, a qual é também a nossa loja física de atendimento ao público.</h4>
      </section>
    </>
  );

}

export default About;