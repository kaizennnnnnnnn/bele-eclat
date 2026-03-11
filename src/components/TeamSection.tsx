import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import team1 from "@/assets/team-member-1.jpg";
import team2 from "@/assets/team-member-2.jpg";

const members = [
  {
    name: "Jelena Petrović",
    role: "Vlasnica & Kozmetičar",
    description: "Specijalista za tretmane lica sa preko 10 godina iskustva. Sertifikovana za hydrafacial i anti-age protokole.",
    image: team1,
  },
  {
    name: "Marija Nikolić",
    role: "Lash & Brow Artist",
    description: "Stručnjak za nadogradnju trepavica, lash lift i brow styling. Njena preciznost i kreativnost garantuju savršen pogled.",
    image: team2,
  },
];

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm tracking-[0.3em] uppercase font-medium">Naš tim</span>
          <h2 className="section-title mt-4 mb-4">
            Upoznajte naše <span className="italic text-primary">stručnjake</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Posvećene profesionalke koje svaki tretman pretvaraju u iskustvo za pamćenje.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {members.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card overflow-hidden hover-lift group"
            >
              <div className="h-80 overflow-hidden">
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-display font-semibold">{m.name}</h3>
                <p className="text-accent text-sm font-medium mt-1 mb-3">{m.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
