import { Helmet } from 'react-helmet'

import AlcatifasEventos from '@/components/AlcatifasEventos';
import TopSectionTapetes from '@/components/TopSectionTapetes';

const TapetesEvents = () => {

  return (
    <>
      <Helmet>
        <title>FOFAL | Comércio e Indústria</title>
        <meta name="description" content="Fofal | Alcatifas para eventos, Tapetes de entrada, Tapetes de escritório" />
      </Helmet>

      <TopSectionTapetes />

      <section className="w-full h-2 bg-bgCards"></section>

      <section className="w-full flex-center p-4">
        <div className="w-full max-w-container mx-auto p-4">
          <AlcatifasEventos />
        </div>
      </section>
    </>
  );
}

export default TapetesEvents