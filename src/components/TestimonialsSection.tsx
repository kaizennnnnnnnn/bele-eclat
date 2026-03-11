import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Milica S.",
    text: "Oduševljena sam tretmanom lica! Koža mi nikad nije bila lepša. Osoblje je izuzetno ljubazno, a salon predivan. Definitivno moj novi omiljeni salon.",
    rating: 5,
  },
  {
    name: "Ana M.",
    text: "Već godinu dana dolazim na nadogradnju trepavica i svaki put izlazim prezadovoljna. Profesionalnost, higijena i rezultat su na visokom nivou.",
    rating: 5,
  },
  {
    name: "Jovana P.",
    text: "Bridal makeup je bio savršen! Šminka je trajala ceo dan, a svi su komentarisali koliko je izgledalo prirodno i elegantno. Hvala vam!",
    rating: 5,
  },
  {
    name: "Tamara R.",
    text: "Konačno salon gde se osećam opušteno i sigurno. Hydrafacial je bio fantastičan, koža mi je bukvalno sijala. Preporučujem svima!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
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
          <span className="text-accent text-sm tracking-[0.3em] uppercase font-medium">Recenzije</span>
          <h2 className="section-title mt-4 mb-4">
            Šta naše klijentkinje <span className="italic text-primary">kažu</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 lg:p-8 hover-lift"
            >
              <Quote className="w-8 h-8 text-accent/30 mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="font-display font-semibold text-sm">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
