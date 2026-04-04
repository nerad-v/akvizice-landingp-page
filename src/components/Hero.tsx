import { Check, ArrowRight, Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Hero = () => {
  const badges = [
    "Žádný spam, jen lepší péče o vaše klienty",
    "Pokud vám to nevydělá = vrátíme vám peníze",
    "Přímé napojení na váš Rezervační systém",
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 md:pt-40 pb-16 sm:pb-32 px-5 sm:px-8 overflow-hidden">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] rounded-full pointer-events-none" style={{ background: '#398fff', opacity: 0.12, filter: 'blur(160px)' }} />

      <div className="relative z-10 max-w-4xl mx-auto w-full text-center flex flex-col items-center">
        <AnimatedSection className="w-full">
          <h1 className="text-4xl md:text-5xl lg:text-[80px] font-bold tracking-tight leading-[1.1] mb-6 md:mb-12">
            Už jste o nás slyšeli.
            <br />
            <span className="serif-italic text-primary font-sans text-3xl md:text-6xl pt-2 md:pt-3 text-center inline-block">Teď vám ukážu, proč to reálně funguje.</span>
          </h1>
          <div className="text-body max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-8 md:mb-12">
            <p className="mb-3 md:mb-4">Kolem barbershopů se točí desítky agentur, co slibují zázraky, a vy logicky nechcete kupovat zajíce v pytli. Nedivím se vám.</p>
            <p>Dejte mi ale <strong className="text-foreground font-semibold">3 minuty a v tomto videu</strong> vám ukážu, jak Platini Barber v Brně zaplnil <strong className="text-foreground font-semibold">31 prázdných oken, aniž by hnul prstem</strong>.</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200} className="w-full mb-8 md:mb-12">
          <div className="w-full aspect-video rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 0 100px rgba(57,143,255,0.08), 0 25px 50px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)' }}>
            <iframe
              src="https://www.loom.com/embed/916481bf0d1a40db82d46a0a4b028382?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
              frameBorder="0"
              allowFullScreen
              className="w-full h-full"
              title="Boostware — ukázka"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400} className="flex flex-col items-center">
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-4 md:mb-6">
            <a href="#calendly-section" className="neon-button px-6 py-3 text-sm md:text-base md:px-8 md:py-4 max-w-xs">
              <span>Chci vidět, kolik to vydělá mému barbershopu</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <p className="text-primary/80 text-sm md:text-base mt-2 md:mt-3 mb-6 md:mb-10">(rezervujte si 15minutový videohovor zdarma)</p>

          <div className="w-full max-w-3xl mx-auto">
            <div className="flex flex-col items-center md:flex-row md:justify-center gap-3 md:gap-0 md:divide-x md:divide-border">
              {badges.map((badge) => (
                <div key={badge} className="flex items-center gap-2 md:gap-3 md:px-8 first:md:pl-0 last:md:pr-0">
                  <div className="w-6 h-6 md:w-7 md:h-7 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'rgba(57,143,255,0.12)', border: '1px solid rgba(57,143,255,0.25)' }}>
                    <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                  </div>
                  <span className="text-sm md:text-base font-medium text-foreground/90">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;
