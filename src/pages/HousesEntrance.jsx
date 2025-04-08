import { Helmet } from 'react-helmet'

import HousesEntranceComponent from '@/components/HousesEntranceComponent';
import TopSectionHouses from '@/components/TopSectionHouses';

const HousesEntrance = () => {

  return (
    <>
      <Helmet>
        <title>FOFAL | Casas Tapetes de entrada</title>
        <meta name="description" content="Fofal | Tapetes de entrada para sua casa." />
      </Helmet>

      <TopSectionHouses />

      <section className="w-full h-2 bg-bgCards"></section>

      <section className="w-full flex-center p-4 sm:mb-3">
        <div className="w-full max-w-container mx-auto p-4 flex flex-col gap-8">
          <h1 className="font-brandon-800 text-3xl text-fofalText uppercase">Descrição</h1>
          <div className="lg:columns-2 gap-16">
            <p className="font-brandon-400 text-2xl text-fofalText mb-8">Executamos <strong>tapetes de entrada</strong> à medida, tanto para utilização <strong>interior</strong> como <strong>exterior</strong>. Se pretender reduzir a sujidade e humidade vinda do calçado, prevenir eventuais quedas, ou até mesmo potencializar a imagem da sua empresa ou dar as boas-vindas aos seus familiares e amigos com um <strong>tapete personalizado</strong>, dispomos de diversos materiais que poderão satisfazer a sua necessidade.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full h-2 bg-bgCards"></section>

      <section className="w-full flex-center p-4">
        <div className="w-full max-w-container mx-auto p-4">
          <HousesEntranceComponent />
        </div>
      </section>
    </>
  );
}

export default HousesEntrance;