import CoberturasUniversais from '../components/CoberturasUniversais'
import { Helmet } from 'react-helmet';
import TopSectionAuto from '@/components/TopSectionAuto';

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
            <p className="font-brandon-400 text-2xl text-fofalText mb-8"><strong>As coberturas universais</strong> são a escolha ideal para quem busca uma solução <strong>prática, acessível e eficaz</strong> para proteger o automóvel. Projetadas para se adaptar a uma ampla gama de modelos e tamanhos de veículos, elas oferecem <strong>proteção completa</strong> contra fatores externos, como <strong>poeira, chuva, raios UV, excrementos de pássaros e seiva de árvores</strong>.
            </p>

            <p className="font-brandon-400 text-2xl text-fofalText mb-8">Além de preservar a <strong>pintura</strong>, as coberturas universais também protegem os componentes <strong>plásticos</strong> e de <strong>borracha</strong>, ajudando a evitar <strong>ressecamento</strong> e desgastes prematuros. Fabricadas com <strong>materiais duráveis e resistentes</strong>, elas garantem uma barreira confiável contra as <strong>intempéries</strong>, sendo perfeitas para uso em ambientes externos e internos.</p>

            <p className="font-brandon-400 text-2xl text-fofalText mb-8">Se você valoriza a <strong>conservação</strong> do seu veículo e quer mantê-lo sempre protegido, as coberturas universais são uma solução prática e eficiente para prolongar sua vida útil e manter sua aparência como nova.</p>
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