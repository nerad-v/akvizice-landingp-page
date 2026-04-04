import { Check, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Hero = () => {
  const badges = [
    "Žádný spam, jen lepší péče o vaše klienty",
    "Pokud vám to nevydělá = vrátíme vám peníze",
    "Přímé napojení na váš Rezervační systém",
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-24 sm:pb-32 px-5 sm:px-8 overflow-hidden">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] rounded-full pointer-events-none" style={{ background: '#398fff', opacity: 0.12, filter: 'blur(160px)' }} />

      <div className="relative z-10 max-w-4xl mx-auto w-full text-center flex flex-col items-center">
        <AnimatedSection className="w-full">
          <h1 className="text-5xl md:text-7xl lg:text-[80px] font-bold tracking-tight leading-[1.1] mb-6">
            Už jste o nás slyšeli.
            <br />
            <span className="serif-italic text-primary font-sans text-6xl py-0 my-0 pt-0 text-center">Teď vám ukážu, proč to reálně funguje.</span>
          </h1>
          <p className="text-body text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            Kolem barbershopů se točí desítky agentur, co slibují zázraky, a vy logicky nechcete kupovat zajíce v pytli. Nedivím se vám. Dejte mi ale{" "}
            <span className="text-white font-semibold">3 minuty a v tomto videu</span>{" "}
            vám ukážu, jak Platini Barber v Brně zaplnil 31 prázdných oken, aniž by hnul prstem.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200} className="w-full mb-12">
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
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
            <a href="#calendly-section" className="neon-button text-base">
              <span>Chci vidět, kolik to vydělá mému barbershopu</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <p className="text-muted-ref text-sm mb-8">(rezervujte si 15minutový videohovor zdarma)</p>

          <div className="flex items-center justify-center gap-6 sm:gap-8 flex-wrap">
            {badges.map((badge) => (
              <span key={badge} className="inline-flex items-center gap-2 text-sm text-muted-ref">
                <Check className="w-3.5 h-3.5 text-primary/70 flex-shrink-0" />
                <span>{badge}</span>
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;
