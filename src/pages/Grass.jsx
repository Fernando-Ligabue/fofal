import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

import { bgGrass, imgsGrass } from "@/lib/constants";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Grass = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact: "",
        theme: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Fórmulário enviado com sucesso!`);
    }

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
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod iste id quas!</p>
                    </div>
                    <div className="right w-full text-lg leading-relaxed  p-4">
                        <h2 className='text-4xl text-fofalText font-brandon-500'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos libero at itaque cum nostrum corrupti assumenda quisquam illo ipsum quibusdam?
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

                        <p className="text-2xl font-brandon-400 text-fofalText max-w-full xl:max-w-[80%] p-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptas sunt vitae delectus deleniti esse quam sed amet molestiae quod!</p>

                        <p className="text-2xl font-brandon-400 text-fofalText max-w-full xl:max-w-[80%] p-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis hic dolorum aspernatur animi rem velit nam aut praesentium rerum quaerat?</p>
                    </div>
                </div>
            </section>

            {/* form Section */}
            <section className="py-12 w-full" data-aos="fade-up" data-aos-delay="300">
                <div className='w-full max-w-container mx-auto  grid grid-cols-1 sm:grid-cols-2 gap-4 p-4'>
                    <div className="w-full max-w-96 text-fofalText text-3xl font-brandon-800 leading-relaxed">
                        <p>Preencha abaixo o formulário caso deseje ser contactado pela nossa equipa ou pretenda receber orçamentos de alcatifas para área de relva:</p>
                    </div>
                    <div className="right w-full text-lg leading-relaxed">
                        <form onSubmit={handleSubmit}>
                            <input
                                id="name"
                                type="text"
                                placeholder="Nome"
                                className="w-full p-2.5 mb-4 rounded-[8px] border border-zinc-700 font-brnadon-400 placeholder:font-brandon-400"
                                value={formData.name}
                                onChange={() => setFormData({ ...formData, name: "" })}
                            />
                            <input
                                id="email"
                                type="email"
                                placeholder="Email"
                                className="w-full p-2.5 mb-4 rounded-[8px] border border-zinc-700 font-brnadon-400 placeholder:font-brandon-400"
                                value={formData.email}
                                onChange={() => setFormData({ ...formData, email: "" })}
                            />
                            <input
                                id="contact"
                                type="text"
                                placeholder="Contacto"
                                className="w-full p-2.5 mb-4 rounded-[8px] border border-zinc-700 font-brnadon-400 placeholder:font-brandon-400"
                                value={formData.contact}
                                onChange={() => setFormData({ ...formData, contact: "" })}
                            />
                            <input
                                id="theme"
                                type="text"
                                placeholder="Temas"
                                className="w-full p-2.5 mb-4 rounded-[8px] border border-zinc-700 font-brnadon-400 placeholder:font-brandon-400"
                                value={formData.theme}
                                onChange={() => setFormData({ ...formData, theme: "" })}
                            />
                            <textarea
                                id="message"
                                placeholder="Mensagem"
                                className="w-full p-2.5 mb-4 rounded-[8px] border border-zinc-700 font-brnadon-400 placeholder:font-brandon-400 resize-none"
                                value={formData.message}
                                onChange={() => setFormData({ ...formData, message: "" })}
                            />
                            <button
                                type="submit"
                                className="font-brandon-500 text-white bg-gradient-comInd p-2 border border-zinc-400 rounded-full w-full max-w-96"
                            >
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Grass;