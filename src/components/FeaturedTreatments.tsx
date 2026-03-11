import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import bridalImg from "@/assets/treatment-bridal.jpg";
import antiageImg from "@/assets/treatment-antiage.jpg";

const treatments = [
  {
    title: "Luksuzni tretman lica",
    subtitle: "Dubinska nega & sjaj",
    description: "Kompletna regeneracija kože lica sa premium serumima, enzimskim pilingom i kolagen maskom. Vaša koža dobija sjaj, čvrstinu i mladolik izgled.",
    price: "6.500 RSD",
    image: antiageImg,
  },
  {
    title: "Bridal Makeup",
    subtitle: "Savršenstvo za vaš dan",
    description: "Profesionalna šminka za mladenke sa probnim terminom. Dugotrajnost, elegancija i fotografičnost garantovani. Vaš najlepši dan zaslužuje savršen look.",
    price: "12.000 RSD",
    image: bridalImg,
  },
];

const FeaturedTreatments = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm tracking-[0.3em] uppercase font-medium">Izdvojeno</span>
          <h2 className="section-title mt-4 mb-4">
            Premium <span className="italic text-primary">tretmani</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Posebno kreirani tretmani za one koji žele vrhunsku negu i izuzetan rezultat.
          </p>
        </motion.div>

        <div className="space-y-12 lg:space-y-20">
          {treatments.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="rounded-2xl overflow-hidden shadow-elegant">
                  <img
                    src={t.image}
                    alt={t.title}
                    className="w-full h-[350px] lg:h-[450px] object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <span className="text-accent text-xs tracking-[0.2em] uppercase font-medium">{t.subtitle}</span>
                <h3 className="text-2xl lg:text-4xl font-display font-semibold mt-3 mb-4">{t.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{t.description}</p>
                <p className="text-2xl font-display font-semibold text-accent mb-6">{t.price}</p>
                <Button variant="hero" size="lg" onClick={scrollToContact}>
                  Zakaži ovaj tretman
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTreatments;
