import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import aboutImage from "@/assets/about-salon.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-accent text-sm tracking-[0.3em] uppercase font-medium">O nama</span>
            <h2 className="section-title mt-4 mb-6">
              Prostor gde se lepota <span className="italic text-primary">neguje sa stilom</span>
            </h2>
            <div className="space-y-4 section-subtitle">
              <p>
                Belle Éclat je više od kozmetičkog salona — to je mesto gde se spajaju stručnost, elegancija i istinska briga o vašoj koži i izgledu. Svaki tretman prilagođavamo vašim potrebama, koristeći isključivo premium proizvode proverenog kvaliteta.
              </p>
              <p>
                Naš tim stručnjaka posvećen je tome da svaka klijentkinja ode sa osmehom, osećajući se negovano, opušteno i samouvereno. Higijena, profesionalnost i individualni pristup temelj su svega što radimo.
              </p>
              <p>
                Dolazite po kvalitet. Ostajete zbog iskustva.
              </p>
            </div>
            <div className="mt-8 flex gap-12">
              <div>
                <span className="text-3xl font-display font-semibold text-accent">8+</span>
                <p className="text-sm text-muted-foreground mt-1">Godina iskustva</p>
              </div>
              <div>
                <span className="text-3xl font-display font-semibold text-accent">2500+</span>
                <p className="text-sm text-muted-foreground mt-1">Zadovoljnih klijentkinja</p>
              </div>
              <div>
                <span className="text-3xl font-display font-semibold text-accent">15+</span>
                <p className="text-sm text-muted-foreground mt-1">Premium tretmana</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={aboutImage}
                alt="Enterijer Belle Éclat salona"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl bg-accent/10 -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-rose-light/50 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
