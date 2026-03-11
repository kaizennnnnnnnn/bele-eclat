import { Phone, Mail, MapPin, Instagram } from "lucide-react";

const Footer = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-display text-2xl font-semibold mb-4">
              Belle <span className="text-accent">Éclat</span>
            </h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Premium kozmetički salon u srcu Beograda. Lepota, nega i profesionalna briga na jednom mestu.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider">Navigacija</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "O salonu", href: "#about" },
                { label: "Usluge", href: "#services" },
                { label: "Galerija", href: "#gallery" },
                { label: "Tim", href: "#team" },
                { label: "FAQ", href: "#faq" },
                { label: "Kontakt", href: "#contact" },
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-sm text-primary-foreground/60 hover:text-accent transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider">Kontakt</h4>
            <div className="space-y-3">
              <a href="tel:+381111234567" className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" /> +381 11 123 4567
              </a>
              <a href="mailto:info@belleeclat.rs" className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                <Mail className="w-4 h-4" /> info@belleeclat.rs
              </a>
              <a href="https://instagram.com/belleeclat" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                <Instagram className="w-4 h-4" /> @belleeclat
              </a>
              <p className="flex items-start gap-2 text-sm text-primary-foreground/60">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" /> Knez Mihailova 25, Beograd
              </p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider">Radno vreme</h4>
            <div className="space-y-2 text-sm text-primary-foreground/60">
              <p>Ponedeljak - Petak: 09:00 - 20:00</p>
              <p>Subota: 09:00 - 16:00</p>
              <p>Nedelja: Zatvoreno</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-sm text-primary-foreground/40">
            © {new Date().getFullYear()} Belle Éclat. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
