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

      <section className="w-full flex-center p-4">
        <div className="w-full max-w-container mx-auto p-4">
          <HousesEntranceComponent />
        </div>
      </section>
    </>
  );
}

export default HousesEntrance;