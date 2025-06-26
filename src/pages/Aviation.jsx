import { Helmet } from "react-helmet";

import { bgAviation, imgsPlanes } from "@/lib/constants";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import FormContact from "@/components/FormContact";

const Aviation = () => {

    return (
        <>
            <Helmet>
                <title>FOFAL | Aviação</title>
                <meta name="description" content="Fofal | Alcatifas para eventos, Tapetes de entrada, Tapetes de escritório" />
            </Helmet>
            <section className="w-full flex-center my-20 sm:my-10">
                <div className="w-full bg-banner min-h-[50vh] sm:min-h-[60vh] mt-40 flex-center flex-col"
                    style={{ backgroundImage: `url(${bgAviation})` }}
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
                        <p>
                            Neste sector trabalhamos em conjunto com a marca líder de mercado nesta área – Tarkett, proporcionando-lhe materiais de <strong>qualidade de excelência</strong>, de <strong>elevado conforto e sustentáveis</strong>.
                        </p>
                    </div>
                    <div className="right w-full text-lg leading-relaxed  p-4">
                        <h2 className='text-4xl text-fofalText font-brandon-500'>
                            Executamos alcatifas para o sector da <strong>Aviação</strong> com as especificidades e controlos de qualidade inerentes a este material, todas <strong>certificadas</strong> pela <strong>Tarkett</strong>. Os trabalhos executados são feitos à medida e dispomos de alcatifas em stock padrão mas também poderá contactar-nos para requisitos específicos de design.
                        </h2>
                    </div>
                </div>
            </section>

            <section className="w-full flex-center border-b border-fofalText">
                <div className="w-full bg-banner mt-10 flex flex-col lg:flex-row justify-between items-center gap-14"
                >
                    <div className="w-full">
                        <Carousel className="w-full max-w-full relative">
                            <CarouselContent>
                                {imgsPlanes.map((image, index) => (
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
                        <h4 className=" text-4xl md:text-5xl font-brandon-900 text-fofalText">Aviação</h4>

                        <p className="text-2xl font-brandon-400 text-fofalText max-w-full xl:max-w-[80%] p-1">
                            Ainda na área da Aviação, executamos <strong>coberturas de exterior e interior</strong> para pequenas aeronaves. O material de exterior tem <strong>acção protectora</strong> contra os <strong>raios U.V.</strong>, é <strong>impermeável</strong> e evita a <strong>corrosão</strong> através de <strong>dejectos de aves</strong> ou <strong>resinas de árvores</strong>. O material para interior promove também a <strong>longevidade</strong> da aeronave através da <strong>protecção do pó</strong> nos diversos componentes. Ambos os materiais apresentam <strong>pelúcia</strong> no seu interior.
                        </p>

                        <p className="text-2xl font-brandon-400 text-fofalText max-w-full xl:max-w-[80%] p-1">
                            Executamos as <strong>coberturas à medida</strong> e efectuamos o <strong>levantamento de medidas no local</strong>, fale connosco e conte com a nossa experiência para o ajudar.
                        </p>
                    </div>
                </div>
            </section>

            <section className="w-full max-w-screen-xl mx-auto py-16">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-20 p-4">
                    <div className="w-full md:max-w-72 flex flex-col justify-start items-start space-y-1">
                        <h3 className="font-brandon-800 text-3xl">Wilton Confort</h3>
                        <div className="w-20 h-0.5 bg-fofalYellow"></div>
                        <p className="font-brandon-400 text-xl">Para uma <strong>sensação de luxo</strong> no interior, produzida com 100% de lã, a aparência e a sensação macias do tapete confere um nível <strong>extra</strong> de <strong>conforto</strong> e aprimora a experiência geral a bordo.</p>
                    </div>

                    <div className="w-full md:max-w-72 flex flex-col justify-start items-start space-y-1">
                        <h3 className="font-brandon-800 text-3xl">Wilton Blend</h3>
                        <div className="w-20 h-0.5 bg-fofalYellow"></div>
                        <p className="font-brandon-400 text-xl">Com esta alcatifa experiência o melhor dos dois mundos, produzida com 80% de lã e 20% de nylon, este tapete tem um equilíbrio perfeito entre uma <strong>sensação confortável</strong>, uma <strong>solução durável</strong> e um <strong>produto leve</strong>.</p>
                    </div>

                    <div className="w-full md:max-w-72 flex flex-col justify-start items-start space-y-1">
                        <h3 className="font-brandon-800 text-3xl">Wilton Light</h3>
                        <div className="w-20 h-0.5 bg-fofalYellow"></div>
                        <p className="font-brandon-400 text-xl">Para uma abordagem mais prática, o DESSO Wilton Light é a escolha perfeita. Conscientemente projetado para sua <strong>funcionalidade leve</strong>, o tapete é produzido com material 100% nylon, tornando-o o mais leve da gama.</p>
                    </div>
                </div>
            </section>

            <section className="w-full h-0.5 bg-fofalText"></section>

            <section className="w-full max-w-screen-lg mx-auto flex-center lg:mt-14 lg:mb-20 p-4">
                <div className="flex flex-col justify-center items-center space-y-3">
                    <h3 className="font-brandon-900 text-4xl md:text-6xl uppercase">Coberturas</h3>
                    <div className="w-28 h-0.5 bg-fofalYellow"></div>
                    <p className="font-brandon-400 text-xl text-center">Ainda na área da Aviação, executamos <strong>coberturas de exterior e interior</strong> para pequenas aeronaves. O material de exterior tem <strong>acção protectora</strong> contra os <strong>raios U.V.</strong>, é <strong>impermeável</strong> e evita a <strong>corrosão</strong> através de <strong>dejectos de aves</strong> ou <strong>resinas de árvores</strong>. O material para interior promove também a <strong>longevidade</strong> da aeronave através da <strong>protecção do pó</strong> nos diversos componentes. Ambos os materiais apresentam <strong>pelúcia</strong> no seu interior.
                        Executamos as <strong>coberturas à medida</strong> e efectuamos o <strong>levantamento de medidas no local</strong>, fale connosco e conte com a nossa experiência para o ajudar.</p>
                </div>
            </section>

            <section className="w-full h-0.5 bg-fofalText"></section>

            {/* form Section */}
            <section className="py-12 w-full" data-aos="fade-up" data-aos-delay="300">
                <div className='w-full max-w-container mx-auto  grid grid-cols-1 sm:grid-cols-2 gap-4 p-4'>
                    <div className="w-full max-w-96 text-fofalText text-3xl font-brandon-800 leading-relaxed">
                        <p>Preencha abaixo o formulário caso deseje ser contactado pela nossa equipa ou pretenda receber orçamentos de alcatifas para área de aviação:</p>
                    </div>
                   <FormContact />
                </div>
            </section>
        </>
    );
}

export default Aviation;