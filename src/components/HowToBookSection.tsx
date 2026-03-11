import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, MessageCircle, CalendarCheck } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Izaberite uslugu",
    description: "Pregledajte našu ponudu i odaberite tretman koji vam odgovara.",
  },
  {
    icon: MessageCircle,
    step: "02",
    title: "Pošaljite upit",
    description: "Kontaktirajte nas putem telefona, forme ili Instagram poruke.",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "Zakažite termin",
    description: "Dogovorimo termin koji vama odgovara i pripremamo sve za vaš dolazak.",
  },
];

const HowToBookSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm tracking-[0.3em] uppercase font-medium">Kako do termina</span>
          <h2 className="section-title mt-4 mb-4">
            Zakazivanje u <span className="italic text-primary">tri koraka</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6 relative">
                <s.icon className="w-8 h-8 text-accent" />
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {s.step}
                </span>
              </div>
              <h3 className="text-lg font-display font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToBookSection;
