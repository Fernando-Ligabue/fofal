import { Helmet } from 'react-helmet';
import TopSectionAuto from '@/components/TopSectionAuto';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { imgsEscritorio } from '@/lib/constants';

const AutoCapasBancosPage = () => {

  return (
    <>
      <Helmet>
        <title>FOFAL | Capas para bancos</title>
        <meta
          name="description"
          content="Fofal - Capas para bancos automóveis,personalizadas, à medida, impermeáveis e respiráveis"
        />
      </Helmet>

      <TopSectionAuto />

      <section className="w-full h-2 bg-bgCards"></section>

      <section className="w-full flex-center p-4 mb-10">
        <div className="w-full max-w-container mx-auto p-4 flex flex-col gap-8">
          <p className="sm:hidden font-brandon-800 text-3xl text-fofalText mb-2">Capas para bancos</p>
          <h1 className="font-brandon-800 text-3xl text-fofalText">Descrição</h1>
          <div className="lg:columns-2 gap-16">
            <p className="font-brandon-400 text-2xl text-fofalText mb-8">O fabrico de <strong>capas à medida</strong> pode ser realizado para bancos de todas as <strong>marcas e modelos</strong> automóveis. Trata-se de um trabalho <strong>artesanal</strong>, executado com o <strong>design</strong> de cada <strong>banco automóvel</strong>. Executamos este serviço em qualquer tipo de viatura.</p>

            <p className="font-brandon-400 text-2xl text-fofalText mb-8">As capas automóveis são uma <strong>proteção para bancos</strong> de automóvel novos ou para cobrir bancos com desgaste pelo que é recomendável sempre o uso de <strong>capas</strong>, quer em <strong>viaturas novas</strong>, quer em <strong>viaturas usadas</strong>.</p>

            <p className="font-brandon-400 text-2xl text-fofalText mb-8">Caso os bancos se encontrem muito deteriorados/espuma em desgaste recomenda-se que nos sejam enviadas uma ou mais imagens dos mesmo para avaliação prévia.</p>
          </div>
        </div>
      </section>

      <section className="w-full h-2 bg-bgCards"></section>

      <section className="w-full flex-center">
        <div className="w-full bg-banner my-10 flex flex-col lg:flex-row justify-between items-center gap-14"
        >
          <div className="w-full">
            <Carousel className="w-full max-w-full relative">
              <CarouselContent>
                {imgsEscritorio.map((item, index) => (
                  <CarouselItem key={index} className="relative">
                    <img src={item.imageUrl} alt="FOFAL" className="w-full object-cover" />
                    <span className='bg-white/60 absolute left-5 bottom-1 p-1.5 rounded-sm'>legenda</span>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute top-1/2 left-4" />
              <CarouselNext className="absolute top-1/2 right-4" />
            </Carousel>
          </div>
          <div className="w-full flex flex-col gap-6 py-10 p-4 lg:p-0">
            <p className="text-2xl font-brandon-400 text-fofalText max-w-full p-1 sm:pr-8">O fabrico de capas à medida pode ser realizado para bancos de todas as marcas e modelos automóveis. Trata-se de um trabalho artesanal, executado com o design de cada banco automóvel. Executamos este serviço em qualquer tipo de viatura.
            </p>

            <p className="text-2xl font-brandon-400 text-fofalText max-w-full p-1 sm:pr-8">As capas automóveis são uma proteção para bancos de automóvel novos ou para cobrir bancos com desgaste pelo que é recomendável sempre o uso de capas, quer em viaturas novas, quer em viaturas usadas.
            </p>

            <p className="text-2xl font-brandon-400 text-fofalText max-w-full p-1 sm:pr-8">Caso os bancos se encontrem muito deteriorados/espuma em desgaste recomenda-se que nos sejam enviadas uma ou mais imagens dos mesmo para avaliação prévia.
            </p>

            <p className="text-2xl font-brandon-400 text-fofalText max-w-full p-1 sm:pr-8">
              <strong>Materiais</strong>
              <br />
              Dispomos de materiais em opções lisas e com padrões (padrões apenas nos tecidos).
              <br />
              Existem duas soluções:
            </p>
            <ul className="text-2xl font-brandon-400 text-fofalText max-w-full p-1 sm:pr-8">
              <li><strong>Napel</strong> - Pele sintética</li>
              <li><strong>Tecido Lux</strong> - Tecido Original de estofos de várias marcas automóveis</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full flex-center pb-20 px-2">
        <Tabs defaultValue="design" className="w-full font-brandon-500 text-fofalText text-xl">
          <TabsList className="grid w-full max-w-screen-md grid-cols-2 mx-auto">
            <TabsTrigger value="design">Design</TabsTrigger>
            <TabsTrigger value="customization">Personalização</TabsTrigger>
          </TabsList>
          <TabsContent value="design">
            <div className='max-w-container mx-auto p-4'>
              <p className="text-2xl font-brandon-400 text-fofalText max-w-full p-1">
                As capas de Napel e Tecido são executadas com as costuras e formato dos bancos originais e apresentam um tecido bastante resistente, ambos reforçados. São criadas à medida, &quot;tipo alfaiate&quot; e as costuras apresentam um elevado detalhe (as quais pode personalizar com a cor que pretender). As capas vestem os bancos na íntegra.
              </p>
              <p className="text-2xl font-brandon-400 text-fofalText max-w-full p-1">
                O fabrico das capas automóveis respeita o conforto e a segurança dos estofos originais. Quando uma viatura for importada, tal informação deverá ser mencionada aquando da consulta.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="customization">
            <div className='max-w-container mx-auto p-4'>
              <p className="text-2xl font-brandon-400 text-fofalText max-w-full p-1">
                Na encomenda, deve escolher o material pretendido para as laterais e para a zona central, uma vez que pode optar por fazer tudo em <strong>tecido</strong> ou em <strong>napel</strong>, mas também enveredar pela <strong>solução mista</strong> - napa nas laterais e tecido na zona central. A costura com a qual são feitas as capas também pode ser escolhida a cor – ou no tom do material ou em outro escolhido por si.
              </p>
              <p className="text-2xl font-brandon-400 text-fofalText max-w-full p-1">
                As capas podem também ser <strong>personalizadas</strong> com a <strong>marca/modelo do veículo</strong> (personalização bordada na capa). Personalizações  fora do âmbito automóvel, deverá ser solicitada uma apreciação via e-mail.
              </p>

              <p className="text-2xl font-brandon-800 text-fofalText max-w-full p-1 pt-8">Opções de Fabrico</p>
              <p className="text-2xl font-brandon-400 text-fofalText max-w-full p-1">Fabricam-se capas nas seguintes opções:</p>

              <ul className="text-2xl font-brandon-400 text-fofalText max-w-full p-1 sm:pr-8">
                <li className='list-disc ml-6'><span className='underline'>Conjuntos completos</span>, isto é, para todos os bancos de uma viatura;</li>
                <li className='list-disc ml-6'><span className='underline'>Bancos em separado</span>, por exemplo, só para as frentes ou mesmo só para o banco do
                  condutor, ou do passageiro ou só bancos de trás.</li>
              </ul>

              <p className="text-2xl font-brandon-800 text-fofalText max-w-full p-1 pt-8">Encomenda</p>
              <p className="text-2xl font-brandon-400 text-fofalText max-w-full p-1">
                Para proceder à encomenda/orçamento de capas para a sua viatura, envie-nos um e-mail para <a href="mailto:comercial@fofal.pt" className="text-fofalYellow underline">comercial@fofal.pt</a>, com as seguintes informações:
              </p>
              <ul className="text-2xl font-brandon-400 text-fofalText max-w-full p-1 sm:pr-8">
                <li className='list-disc ml-6'>Marca, Modelo, Versão e Ano da Viatura</li>
                <li className='list-disc ml-6'>Número de Lugares</li>
                <li className='list-disc ml-6'>Quantidade (Conjunto completo, só banco condutor, …)</li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </section>



    </>
  )
}

export default AutoCapasBancosPage;