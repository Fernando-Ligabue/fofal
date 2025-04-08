import { Helmet } from "react-helmet";
import { useState } from "react";

import { bgEscritorio, imgsEscritorio } from "@/lib/constants";
import TopSectionTapetes from "@/components/TopSectionTapetes";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const TapetesOffice = () => {
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
  return (
    <>
      <Helmet>
        <title>FOFAL | Comércio e Indústria</title>
        <meta name="description" content="Fofal | Alcatifas para eventos, Tapetes de entrada, Tapetes de escritório" />
      </Helmet>

      <TopSectionTapetes />


      <section className="w-full h-2 bg-bgCards"></section>

      <section className="w-full flex-center">
        <div className="w-full bg-banner min-h-[50vh] sm:min-h-[60vh] my-10 flex-center flex-col"
          style={{ backgroundImage: `url(${bgEscritorio})` }}
        >
          <h1 className="font-brandon-900 text-4xl lg:text-6xl leading-tight text-white text-center">
            PRODUTOS DE EXCELÊNCIA,<br />
            À MEDIDA E PERSONALIZADOS
          </h1>
        </div>
      </section>

      {/* Text Section */}
      <section className="py-12 w-full" data-aos="fade-up" data-aos-delay="300">
        <div className='w-full max-w-container mx-auto  grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 items-start'>
          <div className="w-full text-fofalText text-2xl font-brandon-300 leading-relaxed p-4">
            <p>Oferecemos um atendimento de excelência, flexibilidade e acabamentos de elevada qualidade.</p>
          </div>
          <div className="right w-full text-lg leading-relaxed p-4">
            <h2 className='text-5xl text-fofalText font-brandon-500'>
              Em todos os trabalhos fornecemos produtos à medida e personalizados, executando o levantamento
              de medidas no local e aplicação dos trabalhos se necessário.
            </h2>
          </div>
        </div>
      </section>

      <section className="w-full flex-center">
        <div className="w-full bg-banner my-10 flex flex-col lg:flex-row justify-between items-center gap-14"
        >
          <div className="w-full">
            <Carousel className="w-full max-w-full relative">
              <CarouselContent>
                {imgsEscritorio.map((image, index) => (
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
            <p className="text-2xl font-brandon-400 text-fofalText max-w-full p-1 sm:pr-8">A Fofal conta com mais de 60 anos de mercado no Mundo das Alcatifas e com este sector vem
              proporcionar-lhe um ambiente energizante e acolhedor no seu local de trabalho. Contamos com
              as melhores parcerias de alcatifas no Mercado como a DESSO – Tarkett, oferecendo-lhe tapetes
              duráveis e funcionais com base numa economia sustentável e aliada aos designs mais
              inovadores.</p>
            <p className="text-2xl font-brandon-400 text-fofalText max-w-full p-1 sm:pr-8">Nos dias de hoje passamos grande parte do nosso tempo nos nossos locais de trabalho, sendo
              importante a promoção de um ambiente saudável e de bem-estar, o que nos leva a apresentar
              algumas soluções de alcatifas que reduzem, por exemplo, a quantidade de acumulação de
              poeiras no ambiente de escritório e o ruído.
            </p>
            <p className="text-2xl font-brandon-400 text-fofalText max-w-full p-1 sm:pr-8">Descubra a gama de alcatifas e pavimentos que temos para oferecer e que vão contribuir para
              espaços de trabalho inspiradores e multifuncionais, desde alcatifas modulares a rolos, com
              diferentes cores, texturas e padrões poderá aconselhar-se connosco para encontrarmos a
              melhor solução para o seu espaço</p>

            <div className="mt-6 p-1">
              <p className="text-3xl font-brandon-400 text-fofalText max-w-96">Entre em Contacto Connosco!</p>
            </div>
          </div>
        </div>
      </section>

      {/* form Section */}
      <section className="py-12 w-full p-4" data-aos="fade-up" data-aos-delay="300">
        <div className='w-full max-w-container mx-auto  grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <div className="w-full max-w-96 text-fofalText text-3xl font-brandon-800 leading-relaxed">
            <p>Preencha abaixo o formulário caso deseje ser contactado pela nossa equipa ou pretenda receber orçamentos de alcatifas para área de escritório/indústria:</p>
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

export default TapetesOffice