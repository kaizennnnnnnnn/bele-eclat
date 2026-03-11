import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-salon.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Belle Éclat kozmetički salon - luksuzan enterijer"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block text-accent font-body text-sm tracking-[0.3em] uppercase mb-6"
          >
            Premium kozmetički salon
          </motion.span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-semibold leading-[1.1] mb-6 text-primary-foreground">
            Lepota, nega i profesionalna briga{" "}
            <span className="italic text-accent">na jednom mestu</span>
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/80 font-body leading-relaxed mb-10 max-w-xl">
            Profesionalni tretmani za negu lica i tela u prijatnom ambijentu. Vaša lepota zaslužuje vrhunsku pažnju.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl" onClick={() => scrollTo("#contact")}>
              Zakaži termin
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={() => scrollTo("#services")}
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              Pogledaj usluge
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
