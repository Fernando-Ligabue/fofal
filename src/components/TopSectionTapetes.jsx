import { useLocation, useNavigate } from 'react-router-dom';

import { itemsComInd } from '@/lib/constants';
import CarouselTopSection from './CarouselTopSection';

const TopSectionTapetes = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getLinkClassNames = (path) => {
    return location.pathname === path ? `font-brandon-800` : `font-brandon-400`;
  };

  const renderCarouselItem = (item) => (
    <>
      <div className="rounded-2xl bg-bgCards p-4 flex-center flex-col lg:w-full">
        <img src={item.imageUrl} className="w-full max-w-64" alt={item.title} />
      </div>
      <h3 className={`text-2xl mt-4 ${getLinkClassNames(item.url)} text-fofalText`}>
        {item.title}
      </h3>
    </>
  );

  return (
    <section className="w-full bg-banner flex-center flex-col text-center text-white p-4">
      <div className="pt-60 md:pt-0 pb-10">
        <div className="md:hidden">
          <CarouselTopSection
            items={itemsComInd}
            currentPath={location.pathname}
            onNavigate={navigate}
            renderItem={renderCarouselItem}
          />
        </div>
      </div>

      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 max-w-container gap-6  pt-60 md:pt-40 pb-10">
        {itemsComInd.map((item) => (
          <div
            className="cursor-pointer w-full min-h-52"
            key={item.id}
            onClick={() => navigate(item.url)}
          >
            <div className="rounded-2xl bg-bgCards p-4 flex-center flex-col lg:w-full xl:w-[435px]">
              <img src={item.imageUrl} className="w-full max-w-64" alt={item.title} />
            </div>
            <h3 className={`text-2xl mt-4 ${getLinkClassNames(item.url)} text-fofalText`}>
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopSectionTapetes;