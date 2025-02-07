import { Helmet } from 'react-helmet';

import TapetesEntrada from '@/components/TapetesEntrada';
import TopSectionTapetes from '@/components/TopSectionTapetes';

const TapetesEntrance = () => {

  return (
    <>
      <Helmet>
        <title>FOFAL | Comércio e Indústria</title>
        <meta name="description" content="Fofal | Tapetes de entrada" />
      </Helmet>

      <TopSectionTapetes />

      <section className="w-full h-2 bg-bgCards"></section>

      <section className="w-full flex-center p-4 sm:mb-10">
        <div className="w-full max-w-container mx-auto p-4 flex flex-col gap-8">
          <h1 className="font-brandon-800 text-3xl text-fofalText uppercase">Descrição</h1>
          <div className="lg:columns-2 gap-16">
            <p className="font-brandon-400 text-2xl text-fofalText mb-8">Um <strong>Tapete de Entrada</strong> é muitas vezes sobrevalorizado, no entanto, é ele que nos dá a primeira impressão de onde vamos entrar. Não só obstante da sua funcionalidade em reduzir a sujidade/humidade vinda do calçado e prevenir eventuais quedas, o tapete potencializa a imagem da sua empresa e fornece também um ambiente mais acolhedor nas boas-vindas aos seus familiares e amigos.
            </p>

            <p className="font-brandon-400 text-2xl text-fofalText mb-8">Executamos <strong>tapetes de entrada</strong> à medida, tanto para <strong>utilização interior</strong> como <strong>exterior</strong>, as <strong>tapetes</strong> podem ser personalizados e dispomos de vários materiais que aconselhar.</p>
          </div>
        </div>
      </section>

      <section className="w-full flex-center p-4 sm:mb-10">
        <div className="w-full max-w-container mx-auto p-4 flex flex-col gap-8">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
            <div className='w-full'>
              <h3 className="font-brandon-800 text-2xl text-fofalText italic underline">Materiais</h3>
              <p className="font-brandon-400 text-2xl text-fofalText mb-8">
                Dispomos de várias opções, nomeadamente:
              </p>

              <ul className='list-disc text-fofalText font-brandon-400 text-2xl pl-5'>
                <li><strong>MT113</strong> (uso interior/exterior coberto)</li>
                <li><strong>BT 200</strong> (uso interior/exterior coberto)</li>
                <li><strong>BT indoor</strong> (uso interior/exterior coberto)</li>
                <li><strong>Cairo</strong> (uso interior/exterior coberto)</li>
                <li><strong>Vinil</strong> (uso exterior)</li>
                <li><strong>Alumínio</strong> (uso interior e exterior)</li>
              </ul>
            </div>

            <div className='w-full'>
              <h3 className='text-fofalText font-brandon-800 text-2xl italic underline'>Personalização e Geometria</h3>
              <p className="font-brandon-400 text-2xl text-fofalText mb-3">Todos os tapetes são personalizáveis, com excepção do Cairo e do Alumínio.</p>

              <p className="font-brandon-400 text-2xl text-fofalText mb-3">Para Tapetes Personalizados e fora de geometria deverá enviar-nos um e-mail para comercial@fofal.pt.</p>

              <p className="font-brandon-400 text-2xl text-fofalText mb-3">Todos os tapetes personalizados, necessitamos do ficheiro vectorial da personalização ou de um pdf com boa resolução.</p>
            </div>

          </div>
        </div>
      </section>

      <section className="w-full h-2 bg-bgCards"></section>

      <section>
        <TapetesEntrada />
      </section>
    </>
  );
}

export default TapetesEntrance