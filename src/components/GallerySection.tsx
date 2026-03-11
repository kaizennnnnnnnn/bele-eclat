import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import heroImage from "@/assets/hero-salon.jpg";
import aboutImage from "@/assets/about-salon.jpg";

const images = [
  { src: heroImage, alt: "Glavni prostor salona", span: "col-span-2 row-span-2" },
  { src: gallery1, alt: "Beauty detalji", span: "" },
  { src: gallery2, alt: "Čekaonica salona", span: "row-span-2" },
  { src: gallery3, alt: "Premium proizvodi", span: "" },
  { src: gallery4, alt: "Soba za tretmane", span: "" },
  { src: gallery5, alt: "Makeup alati", span: "" },
  { src: gallery6, alt: "Manikir detalj", span: "" },
  { src: aboutImage, alt: "Tretman soba", span: "" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm tracking-[0.3em] uppercase font-medium">Galerija</span>
          <h2 className="section-title mt-4 mb-4">
            Zavirite u naš <span className="italic text-primary">salon</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Prostor kreiran za opuštanje, eleganciju i vrhunske rezultate.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`${img.span} rounded-xl overflow-hidden cursor-pointer group`}
              onClick={() => setLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full min-h-[180px] object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              onClick={() => setLightbox(null)}
              aria-label="Zatvori"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
