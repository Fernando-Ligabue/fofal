import { Helmet } from 'react-helmet'

import HousesAlcatifas from '@/components/HousesAlcatifas';
import TopSectionHouses from '@/components/TopSectionHouses';

const Houses = () => {

  return (
    <>
      <Helmet>
        <title>FOFAL | Casas Alcatifas</title>
        <meta name="description" content="Fofal | Alcatifas para sua casa." />
      </Helmet>

      <TopSectionHouses />

      <section className="w-full h-2 bg-bgCards"></section>

      <section className="w-full flex-center p-4">
        <div className="w-full max-w-container mx-auto p-4">
          <HousesAlcatifas />
        </div>
      </section>
    </>
  );
}

export default Houses;