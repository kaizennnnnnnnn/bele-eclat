import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import treatmentFace from "@/assets/treatment-face.jpg";
import treatmentNails from "@/assets/treatment-nails.png";
import treatmentLashes from "@/assets/treatment-lashes.jpg";
import treatmentBody from "@/assets/treatment-body.jpg";
import { Sparkles, Flower2, Eye, Hand, Scissors, Palette } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Tretmani lica",
    description: "Dubinsko čišćenje, hydrafacial, anti-age tretmani i masaža lica za blistav ten.",
    benefit: "Vidljivi rezultati već nakon prvog tretmana",
    price: "od 3.500 RSD",
    image: treatmentFace,
  },
  {
    icon: Hand,
    title: "Manikir & Pedikir",
    description: "Klasičan i gel manikir, spa pedikir, nail art i nega ruku i stopala.",
    benefit: "Savršeni nokti i negovane ruke",
    price: "od 2.000 RSD",
    image: treatmentNails,
  },
  {
    icon: Eye,
    title: "Trepavice & Obrve",
    description: "Lash lift, nadogradnja trepavica, brow styling i laminacija obrva.",
    benefit: "Izražajan pogled bez šminke",
    price: "od 2.500 RSD",
    image: treatmentLashes,
  },
  {
    icon: Flower2,
    title: "Tretmani tela",
    description: "Relaks masaža, anticelulitni tretmani, body wrapping i nega kože tela.",
    benefit: "Opuštanje i vidljivo lepša koža",
    price: "od 4.000 RSD",
    image: treatmentBody,
  },
  {
    icon: Scissors,
    title: "Depilacija",
    description: "Voskom ili šećernom pastom, za glatku i negovanu kožu bez iritacija.",
    benefit: "Nežna i dugotrajna glatkoća",
    price: "od 1.000 RSD",
    image: null,
  },
  {
    icon: Palette,
    title: "Profesionalna šminka",
    description: "Dnevna, večernja, svečana i bridal šminka vrhunskim proizvodima.",
    benefit: "Savršen izgled za svaku priliku",
    price: "od 4.500 RSD",
    image: null,
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm tracking-[0.3em] uppercase font-medium">Naše usluge</span>
          <h2 className="section-title mt-4 mb-4">
            Tretmani kreirani <span className="italic text-primary">za vas</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Svaka usluga osmišljena je da vam pruži vidljive rezultate, opuštanje i profesionalnu negu u luksuznom ambijentu.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card overflow-hidden hover-lift group"
            >
              {service.image && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-6 lg:p-8">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">{service.description}</p>
                <p className="text-xs text-primary font-medium mb-4">✦ {service.benefit}</p>
                <span className="text-accent font-display font-semibold text-lg">{service.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
