import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import faqData from "../../data/faq.json";
import type { FAQs } from "../../types/faq";

const FAQSection = () => {
    return (
        <section className="w-full flex flex-col gap-10 p-10 sm:px-15 sm:py-15 lg:flex-row lg:gap-20 lg:items-start lg:px-20 lg:py-20 xl:px-30 xl:gap-26 2xl:max-w-[1580px]">
            <div>
                <h2 className="text-2xl font-bold w-fit border-t-2 border-primary pt-2 mb-5 lg:text-4xl lg:mb-10 2xl:text-5xl">Tem alguma dúvida?</h2>
                <p className="text-justify text-sm sm:max-w-md lg:text-lg">Confira as <b>perguntas frequentes</b> sobre nossos serviços! Se ainda restar alguma dúvida, é só chamar!</p>
            </div>
            <Accordion type="single" collapsible className="w-full rounded-sm border">
                {(faqData as FAQs).map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b px-4 last:border-b-0">
                        <AccordionTrigger className="w-full cursor-pointer xl:text-base hover:no-underline hover:text-primary font-semibold data-[state=open]:text-primary">{item.question}</AccordionTrigger>
                        <AccordionContent className="italic text-justify text-neutral-800 xl:text-base">
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    )
}

export default FAQSection;