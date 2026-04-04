import { Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Hero = () => {
  const badges = [
    "Žádný spam, jen lepší péče o vaše klienty",
    "Pokud vám to nevydělá = vrátíme vám peníze",
    "Přímé napojení na váš Rezervační systém",
  ];

  return (
    <section className="relative pt-28 pb-20 px-4 sm:px-6 overflow-hidden">
      {/* Radial glow */}
      <div className="radial-glow w-[600px] h-[600px] top-0 left-1/2 -translate-x-1/2 -translate-y-1/4" />

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection className="text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl mx-auto mb-6">
            Už jste o nás slyšeli.{" "}
            <br />
            <span className="font-serif italic text-primary">Teď vám ukážu, proč to reálně funguje.</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Kolem barbershopů se točí desítky agentur, co slibují zázraky, a vy logicky nechcete kupovat zajíce v pytli. Nedivím se vám. Dejte mi ale{" "}
            <span className="text-foreground font-semibold">3 minuty a v tomto videu</span>{" "}
            vám ukážu, jak Platini Barber v Brně zaplnil 31 prázdných oken, aniž by hnul prstem.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200} className="max-w-4xl mx-auto mb-10">
          <div className="glass-card overflow-hidden">
            <div className="aspect-video">
              <iframe
                src="https://www.loom.com/embed/916481bf0d1a40db82d46a0a4b028382"
                frameBorder="0"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400} className="text-center">
          <a href="#calendly-section" className="neon-button inline-block text-base sm:text-lg mb-2">
            Chci vidět, kolik to vydělá mému barbershopu
          </a>
          <p className="text-gray-500 text-sm mb-10">(rezervujte si 15minutový videohovor zdarma)</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            {badges.map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-sm text-gray-300">
                <Check className="w-4 h-4 text-neon-blue flex-shrink-0" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;
