import { Check, Zap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const differentiators = [
  "Pracujeme s tím, co už máte — žádné nové reklamy, žádné nahánění cizích lidí",
  "Vy neděláte nic — napojíme se, nastavíme, spustíme. Vy sledujete rezervace",
  "Výsledky do 7 dní — první zprávy odcházejí okamžitě po spuštění",
];

const Positioning = () => {
  return (
    <section className="relative py-14 sm:py-20 md:py-28 px-5 sm:px-8 overflow-hidden">
      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "#398fff", opacity: 0.07, filter: "blur(160px)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-10 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-5 md:mb-7">
            <Zap className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary fill-primary/20" />
            <span className="text-xs md:text-sm font-medium tracking-[0.14em] uppercase text-label">
              Jiný přístup
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6 md:mb-8">
            Nepotřebujete nové klienty.
            <br />
            <span className="serif-italic text-primary pt-2 md:pt-3 inline-block">
              Potřebujete, aby ti stávající přicházeli pravidelně.
            </span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <div className="glass-card p-7 sm:p-10 md:p-14 max-w-4xl mx-auto">
            <div className="text-body text-base md:text-lg leading-relaxed space-y-4 md:space-y-5 mb-10 md:mb-12">
              <p>
                Boostmail se napojí na váš rezervační systém a automaticky se ozve správným lidem ve
                správný čas — bez reklam, bez slevových akcí, bez toho abyste cokoliv dělali.
              </p>
              <p>
                <strong className="text-foreground font-semibold">Ne spam. Péče</strong> —
                personalizovaná, jménem klienta, ve chvíli kdy to dává smysl.
              </p>
            </div>

            <div className="space-y-4 md:space-y-5">
              {differentiators.map((item, i) => (
                <AnimatedSection key={i} delay={200 + i * 80}>
                  <div className="flex items-start gap-3 md:gap-4">
                    <div
                      className="w-6 h-6 md:w-7 md:h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                      style={{
                        background: "rgba(57,143,255,0.12)",
                        border: "1px solid rgba(57,143,255,0.25)",
                      }}
                    >
                      <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                    </div>
                    <p className="text-foreground/90 text-sm md:text-base font-medium leading-relaxed">
                      {item}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Positioning;
