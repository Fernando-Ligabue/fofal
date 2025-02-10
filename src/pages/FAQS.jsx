
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faqs, changes } from "@/lib/constants"

function FAQS() {

    return (
        <section className="w-full pt-60 sm:pt-48 pb-20">
            <div className="w-full max-w-screen-xl mx-auto p-4">
                <h1 className="text-5xl text-center font-brandon-800 mb-10">Perguntas Frequentes</h1>

                <div className="space-y-4">
                    <Accordion type="single" collapsible className="w-full max-w-screen-lg mx-auto space-y-4">
                        {faqs.map((faq) => (
                            <AccordionItem key={faq.id} value={faq.id} className="border border-zinc-300 px-2.5 rounded-[8px]">
                                <AccordionTrigger className="font-brandon-500 text-xl">{faq.question}</AccordionTrigger>
                                <AccordionContent className="font-brandon-300 text-lg">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
            <div className="w-full max-w-screen-xl mx-auto p-4">
                <h2 className="text-5xl text-center font-brandon-800 mb-10">Trocas e Devoluções</h2>

                <div className="space-y-4">
                    <Accordion type="single" collapsible className="w-full max-w-screen-lg mx-auto space-y-4">
                        {changes.map((change) => (
                            <AccordionItem key={change.id} value={change.id} className="border border-zinc-300 px-2.5 rounded-[8px]">
                                <AccordionTrigger className="font-brandon-500 text-xl">{change.question}</AccordionTrigger>
                                <AccordionContent className="font-brandon-300 text-lg">
                                    {change.answer} <br /><br /> {change.warn} <a href={change.url} className="text-fofalYellow font-brandon-500 hover:underline">{change.url}</a>.
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}

export default FAQS;
