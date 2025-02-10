import { Helmet } from 'react-helmet'

import AlcatifasEventos from '@/components/AlcatifasEventos';
import TopSectionHouses from '@/components/TopSectionHouses';

const Houses = () => {

  return (
    <>
      <Helmet>
        <title>FOFAL | Casas</title>
        <meta name="description" content="Fofal | Alcatifas para sua casa, Tapetes de entrada" />
      </Helmet>

      <TopSectionHouses />

      <section className="w-full h-2 bg-bgCards"></section>

      <section className="w-full flex-center p-4">
        <div className="w-full max-w-container mx-auto p-4">
          <AlcatifasEventos />
        </div>
      </section>
    </>
  );
}

export default Houses;