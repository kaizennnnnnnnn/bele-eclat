import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Sparkles, Heart, Award, Users, Star } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Stručan pristup",
    description: "Edukovani profesionalci sa dugogodišnjim iskustvom u beauty industriji.",
  },
  {
    icon: Shield,
    title: "Higijena & kvalitet",
    description: "Najviši standardi čistoće i sterilizacije opreme. Vaša bezbednost je prioritet.",
  },
  {
    icon: Sparkles,
    title: "Premium proizvodi",
    description: "Koristimo isključivo profesionalne brendove proverenog kvaliteta i efikasnosti.",
  },
  {
    icon: Heart,
    title: "Prijatan ambijent",
    description: "Elegantan prostor dizajniran za potpuno opuštanje i uživanje u tretmanima.",
  },
  {
    icon: Users,
    title: "Individualni pristup",
    description: "Svaki tretman prilagođavamo vašem tipu kože, željama i potrebama.",
  },
  {
    icon: Star,
    title: "Vidljivi rezultati",
    description: "Naše klijentkinje se vraćaju jer vide razliku — i osećaju je.",
  },
];

const WhyUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm tracking-[0.3em] uppercase font-medium">Zašto baš mi</span>
          <h2 className="section-title mt-4 mb-4">
            Razlozi da izaberete <span className="italic text-primary">Belle Éclat</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-8 text-center hover-lift"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                <reason.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-2">{reason.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
