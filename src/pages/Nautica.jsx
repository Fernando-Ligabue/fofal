import { Helmet } from "react-helmet";

import { bgNautica, imgsBoat } from "@/lib/constants";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FormContact from "@/components/FormContact";

const Nautica = () => {
    return (
        <>
            <Helmet>
                <title>FOFAL | Náutica</title>
                <meta name="description" content="Fofal | Alcatifas para eventos, Tapetes de entrada, Tapetes de escritório" />
            </Helmet>
            <section className="w-full flex-center my-20 sm:my-10">
                <div className="w-full bg-banner min-h-[50vh] sm:min-h-[60vh] mt-40 flex-center flex-col"
                    style={{ backgroundImage: `url(${bgNautica})` }}
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
                        <p>Na área das alcatifas, a Fofal apresenta várias soluções para interior e para exterior, de cores e texturas diferentes!</p>
                    </div>
                    <div className="right w-full text-lg leading-relaxed  p-4">
                        <h2 className='text-4xl text-fofalText font-brandon-500'>
                            Na Fofal executamos tanto <strong>alcatifas</strong> como <strong>coberturas</strong> na área <strong>náutica</strong>, disponibilizando-lhe diversos materiais com as especificidades e controlos de qualidade inerentes a este material, todas <strong>certificadas</strong> pela <strong>Tarkett</strong>.
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
                                {imgsBoat.map((image, index) => (
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
                        <h4 className=" text-4xl md:text-5xl font-brandon-900 text-fofalText">Barcos</h4>

                        <p className="text-2xl font-brandon-400 text-fofalText max-w-full xl:max-w-[80%] p-1">Tanto no segmento para <strong>pequenas embarcações e de lazer</strong>, como para grandes embarcações de serviço ao cliente, poderá encontrar soluções standard assim como soluções mais específicas e de qualidade superior.</p>

                        <p className="text-2xl font-brandon-400 text-fofalText max-w-full xl:max-w-[80%] p-1">No segmento para <strong>grandes embarcações</strong> de serviço ao cliente, trabalhamos juntamente com a <strong>Tarkett</strong> para lhe providenciar um <strong>piso marítimo</strong> mais específico e de acordo com os regulamentos IMO/MED. Oferecemos-lhe variadas soluções desde as <strong>alcatifas</strong> com padrão standard habitualmente em stock até carpetes <strong>Axminster</strong>, de qualidade superior e sob medida.</p>
                    </div>
                </div>
            </section>

            <section className="w-full max-w-container mx-auto flex-center lg:mt-14 lg:mb-20 p-4">
                <h4 className="font-brandon-800 text-3xl text-center">Neste sector bastante específico, fale connosco e tenha o seu projecto chave na mão. Terá um acompanhamento do início ao fim com especialistas na área.</h4>
            </section>

            <section className="w-full flex-center pb-20 px-2">
                <Tabs defaultValue="sunbrella" className="w-full font-brandon-500 text-fofalText text-xl">
                    <TabsList className="grid w-full max-w-screen-md grid-cols-1 mx-auto">
                        <TabsTrigger value="sunbrella">NÁUTICA SUNBRELLA</TabsTrigger>
                    </TabsList>
                    <TabsContent value="sunbrella">
                        <div className='max-w-container mx-auto p-4 space-y-4'>
                            <p className="text-2xl font-brandon-400 text-fofalText max-w-full p-1">
                                Os tecidos <strong>Sunbrella</strong> têm sido a escolha de confiança há mais de 50 anos pelos amantes
                                de navegação de pequenas embarcações, veleiros ou mesmo iates de luxo. É uma escolha que oferece <strong>qualidade a longo prazo</strong> e excelente performance. Se a <strong>náutica</strong> é a sua paixão, Sunbrella é a sua marca e nós o seu alfaiate.
                            </p>
                            <p className="text-2xl font-brandon-400 text-fofalText max-w-full p-1">
                                Para além das suas <strong>telas marítimas</strong> que oferecem sombra, <strong>conforto</strong> e <strong>proteção</strong> contra os elementos da natureza, a Sunbrella apresenta materiais e cores para os interiores como <strong>assentos, almofadas, cortinados</strong>, entre outros. Agora, os apaixonados por este estilo de vida podem criar a harmonia entre o exterior e interior, garantindo a mesma qualidade.
                            </p>
                            <p className="text-2xl font-brandon-400 text-fofalText max-w-full p-1">
                                Os tecidos Sunbrella, excepto os incorporados em produtos revestidos, apresentam o certificado da <strong>Oeko-Tex Standard 100 (CQ 638/2 IFTH)</strong>.
                            </p>

                            <p className="text-2xl font-brandon-400 text-fofalText max-w-full p-1 mt-6">
                                Não Desvalorize o Essencial:
                            </p>
                            <ul className="list-disc ml-8 text-2xl font-brandon-400 text-fofalText">
                                <li>Garantia de 10 Anos, resistente aos Raios U.V. e desbotamento mesmo em
                                    situações de constante exposição ao sol, ao sal e ao cloro;</li>
                                <li>Resistente ao Mofo e Bolor, e de Fácil Limpeza caso situações destas surjam;</li>
                                <li>Podem ser Lavados com Alvejante sem comprometimento da cor;</li>
                                <li>Protecção Solar aprovada pela Skin Cancer Foundation para que quem esteja a
                                    bordo possa desfrutar sem preocupação, de longos períodos na água;</li>
                                <li>Material Respirável promovendo um maior conforto aos navegantes.</li>
                            </ul>

                        </div>
                    </TabsContent>
                </Tabs>
            </section>


            {/* form Section */}
            <section className="py-12 w-full" data-aos="fade-up" data-aos-delay="300">
                <div className='w-full max-w-container mx-auto  grid grid-cols-1 sm:grid-cols-2 gap-4 p-4'>
                    <div className="w-full max-w-96 text-fofalText text-3xl font-brandon-800 leading-relaxed">
                        <p>Preencha abaixo o formulário caso deseje ser contactado pela nossa equipa ou pretenda receber orçamentos de alcatifas para área de náutica:</p>
                    </div>
                    <FormContact />
                </div>
            </section>
        </>
    );
}

export default Nautica;