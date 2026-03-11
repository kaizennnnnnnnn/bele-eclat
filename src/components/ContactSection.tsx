import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Ime je obavezno").max(100),
  phone: z.string().trim().min(1, "Telefon je obavezan").max(30),
  email: z.string().trim().email("Unesite ispravan email").max(255),
  service: z.string().trim().max(200),
  message: z.string().trim().min(1, "Poruka je obavezna").max(1000),
});

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", service: "", message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    toast({
      title: "Upit je uspešno poslat!",
      description: "Javićemo vam se u najkraćem roku. Hvala vam!",
    });
    setFormData({ name: "", phone: "", email: "", service: "", message: "" });
  };

  const inputClass = "w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all";

  return (
    <section id="contact" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm tracking-[0.3em] uppercase font-medium">Kontakt</span>
          <h2 className="section-title mt-4 mb-4">
            Zakažite svoj <span className="italic text-primary">termin</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Pišite nam ili nas pozovite — rado ćemo odgovoriti na sva vaša pitanja i pomoći vam da odaberete savršen tretman.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input name="name" value={formData.name} onChange={handleChange} placeholder="Vaše ime" className={inputClass} maxLength={100} />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Telefon" className={inputClass} maxLength={30} />
                  {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" type="email" className={inputClass} maxLength={255} />
                  {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                </div>
              </div>
              <select name="service" value={formData.service} onChange={handleChange} className={inputClass}>
                <option value="">Izaberite uslugu (opciono)</option>
                <option>Tretman lica</option>
                <option>Hydrafacial</option>
                <option>Manikir</option>
                <option>Pedikir</option>
                <option>Nadogradnja trepavica</option>
                <option>Lash lift</option>
                <option>Brow styling</option>
                <option>Depilacija</option>
                <option>Šminka</option>
                <option>Masaža</option>
                <option>Bridal paket</option>
                <option>Drugo</option>
              </select>
              <div>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Vaša poruka..." className={`${inputClass} min-h-[120px] resize-none`} maxLength={1000} />
                {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
              </div>
              <Button variant="hero" size="xl" type="submit" className="w-full">
                Pošalji upit
              </Button>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {[
                { icon: Phone, label: "Telefon", value: "+381 11 123 4567", href: "tel:+381111234567" },
                { icon: Mail, label: "Email", value: "info@belleeclat.rs", href: "mailto:info@belleeclat.rs" },
                { icon: Instagram, label: "Instagram", value: "@belleeclat", href: "https://instagram.com/belleeclat" },
                { icon: MapPin, label: "Adresa", value: "Knez Mihailova 25, Beograd", href: null },
                { icon: Clock, label: "Radno vreme", value: "Pon-Pet: 09-20h | Sub: 09-16h", href: null },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-foreground font-medium hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden h-[250px] bg-muted border border-border">
              <iframe
                title="Lokacija Belle Éclat"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.3!2d20.457!3d44.817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDQ5JzAxLjIiTiAyMMKwMjcnMjUuMiJF!5e0!3m2!1ssr!2srs!4v1"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
