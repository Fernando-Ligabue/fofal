import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { useLocation, useNavigate } from 'react-router-dom';


import { itemsComInd } from '@/lib/constants'

const TopSectionTapetes = () => {
    const navigate = useNavigate();

    const location = useLocation();

    const getLinkClassNames = (path) => {
        return location.pathname === path ? `font-brandon-800` : `font-brandon-400`;
    };


    return (
        <section className="w-full bg-banner flex-center flex-col text-center text-white p-4">
            <div className="pt-60 md:pt-0 pb-10">
                <div className="md:hidden">
                    <Carousel
                        className="w-full max-w-full relative"
                        opts={{
                            align: "start",
                            loop: true,
                        }} >
                        <CarouselContent>
                            {itemsComInd.map((item) => (
                                <CarouselItem
                                    className="cursor-pointer w-full min-h-52"
                                    key={item.id}
                                    onClick={() => navigate(item.url)}
                                >
                                    <div className="rounded-2xl bg-bgCards p-4 flex-center flex-col xl:w-[460px]">
                                        <img src={item.imageUrl} className="w-full max-w-64" alt={item.title} />
                                    </div>
                                    <h3 className={`text-2xl mt-4 ${getLinkClassNames(item.url)} text-fofalText`}>
                                        {item.title}
                                    </h3>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute top-[100px] left-4 text-black" />
                        <CarouselNext className="absolute top-[100px] right-4 text-black" />
                    </Carousel>
                </div>
            </div>

            <div
                className="hidden md:grid grid-cols-1 md:grid-cols-3 max-w-container gap-6 pt-60 md:pt-40 pb-10">
                {itemsComInd.map((item) => (
                    <div
                        className="cursor-pointer w-full min-h-52"
                        key={item.id}
                        onClick={() => navigate(item.url)}
                    >
                        <div className="rounded-2xl bg-bgCards p-4 flex-center flex-col xl:w-[460px]">
                            <img src={item.imageUrl} className="w-full max-w-64" alt={item.title} />
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

    )
}

export default TopSectionTapetes