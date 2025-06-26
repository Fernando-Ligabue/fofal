import { Helmet } from "react-helmet";
import { useEffect } from "react";

import { bgGrass, imgsGrass } from "@/lib/constants";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import FormContact from "@/components/FormContact";

const Grass = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            <Helmet>
                <title>FOFAL | Relva</title>
                <meta name="description" content="Fofal | Alcatifas para eventos, Tapetes de entrada, Tapetes de escritório" />
            </Helmet>
            <section className="w-full flex-center my-20 sm:my-10">
                <div className="w-full bg-banner min-h-[50vh] sm:min-h-[60vh] mt-40 flex-center flex-col"
                    style={{ backgroundImage: `url(${bgGrass})` }}
                >
                    <h1 className="font-brandon-900 text-4xl lg:text-6xl leading-tight text-white text-center">
                        PRODUTOS DE EXCELÊNCIA,<br />
                        À MEDIDA E PERSONALIZADOS
                    </h1>
                </div>
            </section>

            {/* Text Section */}
            <section className="lg:py-20 w-full" data-aos="fade-up" data-aos-delay="300">
                <div className='w-full max-w-container mx-auto  grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 items-start'>
                    <div className="w-full text-fofalText text-2xl font-brandon-300 leading-relaxed p-4">
                        <p>Poupe o seu tempo e economize com as opções que temos para si de <strong>Relva Artificial</strong> e as <strong>Novidades de Mercado de Relva Mista.</strong></p>
                    </div>
                    <div className="right w-full text-lg leading-relaxed  p-4">
                        <h2 className='text-4xl text-fofalText font-brandon-500'>
                            Ideal para espaços exteriores, grandes e pequenas superfícies, zonas de desporto e eventos. Utilizada também em espaços interiores e decorativos.
                        </h2>
                    </div>
                </div>
            </section>

            <section className="w-full flex-center">
                <div className="w-full bg-banner [ my-10 flex flex-col lg:flex-row justify-between items-center gap-14"
                >
                    <div className="w-full">
                        <Carousel className="w-full max-w-full relative">
                            <CarouselContent>
                                {imgsGrass.map((image, index) => (
                                    <CarouselItem key={index}>
                                        <img src={image.imageUrl} alt="FOFAL" className="w-full object-cover" />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="absolute top-1/2 left-4" />
                            <CarouselNext className="absolute top-1/2 right-4" />
                        </Carousel>
                    </div>
                    <div className="w-full flex flex-col gap-6 py-10 p-4 lg:p-0">
                        <h4 className=" text-4xl md:text-5xl font-brandon-900 text-fofalText">Relva</h4>

                        <p className="text-2xl font-brandon-400 text-fofalText max-w-full xl:max-w-[80%] p-1">
                            Das mais recentes inovações de mercado temos a <strong>Avalon Petgrass</strong>, que foi especialmente concebida para <strong>animais de estimação</strong>! Esta relva é uma relva artificial tricotada na sua base, o que significa que não só irá ser bastante resistente com uma ancoragem mais forte como também se torna bastante permeável à água.
                        </p>

                        <p className="text-2xl font-brandon-400 text-fofalText max-w-full xl:max-w-[80%] p-1">
                            Não obstante deste material temos ainda a <strong>Avalon Urban Hybrid</strong> que combina o melhor de dois mundos: relva natural e relva artificial. A Avalon Urban Hybrid é um tapete de relva artificial fortemente <strong>tricotado com fibras em diferentes comprimentos</strong>. O tapete tem aberturas amplas sob a forma de uma estrutura em favo de abelhas.<strong> A relva natural pode crescer</strong> através destas aberturas amplas. A estrutura em favo de abelhas única proporciona um reforço da zona radicular da relva natural. Além disso, as fibras da relva artificial protegem os rebentos da relva natural contra o desgaste.
                        </p>

                        <p className="text-2xl font-brandon-400 text-fofalText max-w-full xl:max-w-[80%] p-1">
                            Para um efeito incrivelmente natural temos a <strong>Avalon LandScape Não-Direccional</strong>. O que se observa na relva natural é o seu aspecto não-direccional e com a Avalon LandScape Não-Direccional conseguimos esse efeito! Ao combinar diferentes fibras nas séries não direcionais, é possível criar uma alternativa artificial perfeita. As séries não direcionais têm a relva artificial mais natural.
                        </p>
                    </div>
                </div>
            </section>

            {/* form Section */}
            <section className="py-12 w-full" data-aos="fade-up" data-aos-delay="300">
                <div className='w-full max-w-container mx-auto  grid grid-cols-1 sm:grid-cols-2 gap-4 p-4'>
                    <div className="w-full max-w-96 text-fofalText text-3xl font-brandon-800 leading-relaxed">
                        <p>Preencha abaixo o formulário caso deseje ser contactado pela nossa equipa ou pretenda receber orçamentos de alcatifas para área de relva:</p>
                    </div>
                    <FormContact />
                </div>
            </section>
        </>
    );
}

export default Grass;