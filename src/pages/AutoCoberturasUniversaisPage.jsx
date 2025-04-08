import CoberturasUniversais from '../components/CoberturasUniversais'
import { Helmet } from 'react-helmet';
import TopSectionAuto from '@/components/TopSectionAuto';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const AutoCoberturasUniversaisPage = () => {

  return (
    <>
      <Helmet>
        <title>FOFAL | Coberturas Universais</title>
        <meta
          name="description"
          content="Fofal - Coberturas Universais para automóveis, caravanas, autocaravanas, scooters"
        />
      </Helmet>

      <TopSectionAuto />

      <section className="w-full h-2 bg-bgCards"></section>

      <section className="w-full flex-center p-4 mb-10">
        <div className="w-full max-w-container mx-auto p-4 flex flex-col gap-8">
          <p className="sm:hidden font-brandon-800 text-3xl text-fofalText mb-2">Coberturas Universais</p>
          <h1 className="font-brandon-800 text-3xl text-fofalText">Descrição</h1>
          <div className="lg:columns-2 gap-16">
            <p className="font-brandon-400 text-2xl text-fofalText mb-8"><strong>As coberturas universais</strong> são para exterior e apesar do seu carácter mais temporário relativamente às Coberturas de Lona (PVC), são também <strong>impermeáveis</strong> e no seu verso são constituídas por uma <strong>camada fina de pelúcia</strong> para não riscar a viatura. Estas coberturas, possuem orifícios de ventilação que previnem a condensação.</p>

            <p className="font-brandon-400 text-2xl text-fofalText mb-8">Apresentam também furações na zona dianteira e traseira para prender a cobertura com uma corda. As coberturas universais já <strong>estão pré-fabricadas e estão categorizadas por tamanhos</strong>.</p>
          </div>
          <div>
            <Accordion type="single" collapsible className="w-full max-w-80">
              <AccordionItem value="item-1" className="border-none">
                <AccordionTrigger className="font-brandon-500 text-xl text-black">Tamanhos</AccordionTrigger>
                <AccordionContent>
                  <ul className='font-brandon-400 text-lg text-fofalText mb-4'>
                    <li>Tamanho S - 400 x 160 x 120</li>
                    <li>Tamanho M - 430 x 160 x 120</li>
                    <li>Tamanho L - 480 x 175 x 120</li>
                    <li>Tamanho XL - 530 x 175 x 120</li>
                    <li>Tamanho XXL1 - 463 x 173 x 143</li>
                    <li>Tamanho XXL2 - 491 x 194 x 146</li>
                    <li>Tamanho XXL3 - 508 x 198 x 145</li>
                  </ul>
                  <small className='font-brandon-400 text-md text-fofalText'>*Medidas Máximas em Centímetros (Comprimento x Largura x Altura).</small>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="w-full h-2 bg-bgCards"></section>

      <section>
        <CoberturasUniversais />
      </section>

    </>
  )
}

export default AutoCoberturasUniversaisPage;