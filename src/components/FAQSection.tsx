import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Kako zakazujem termin?",
    a: "Termin možete zakazati putem telefona, kontakt forme na sajtu ili Instagram poruke. Javite nam željenu uslugu i termin koji vam odgovara, a mi ćemo potvrditi vaš dolazak.",
  },
  {
    q: "Da li je potrebna prethodna najava?",
    a: "Da, preporučujemo zakazivanje unapred kako bismo vam obezbedili željeni termin i dovoljno vremena za kvalitetan tretman.",
  },
  {
    q: "Koliko traju tretmani?",
    a: "Trajanje zavisi od vrste tretmana — od 30 minuta za brže usluge poput manikira, do 90 minuta za kompleksnije tretmane lica. Tačno trajanje saznajete pri zakazivanju.",
  },
  {
    q: "Koje proizvode koristite?",
    a: "Koristimo isključivo profesionalne brendove proverenog kvaliteta i efikasnosti, prilagođene različitim tipovima kože.",
  },
  {
    q: "Da li mogu da dobijem savet oko izbora tretmana?",
    a: "Naravno! Naš tim rado će vam pomoći da odaberete tretman koji najbolje odgovara vašim potrebama i tipu kože.",
  },
  {
    q: "Gde se salon nalazi?",
    a: "Salon Belle Éclat nalazi se na adresi Knez Mihailova 25, Beograd. Lako smo dostupni javnim prevozom i automobilom.",
  },
  {
    q: "Da li radite vikendom?",
    a: "Da, subotom radimo od 09:00 do 16:00. Nedeljom je salon zatvoren.",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm tracking-[0.3em] uppercase font-medium">FAQ</span>
          <h2 className="section-title mt-4 mb-4">
            Najčešća <span className="italic text-primary">pitanja</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass-card px-6 border-none"
              >
                <AccordionTrigger className="text-left font-display font-medium text-base hover:no-underline hover:text-primary py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
