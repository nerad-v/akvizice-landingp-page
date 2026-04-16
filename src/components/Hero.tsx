import { ArrowRight, Star, Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Hero = () => {
  const badges = [
    "Žádný spam, jen lepší péče o vaše klienty",
    "Pokud vám to nevydělá = vrátíme vám peníze",
    "Přímé napojení na váš rezervační systém",
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 md:pt-40 pb-16 sm:pb-32 px-5 sm:px-8 overflow-hidden">
      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] rounded-full pointer-events-none"
        style={{ background: "#398fff", opacity: 0.12, filter: "blur(160px)" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto w-full text-center flex flex-col items-center">
        {/* Stars badge */}
        <AnimatedSection className="flex flex-col items-center justify-center md:flex-row md:gap-4 mb-8 md:mb-10">
          <div className="flex items-center gap-0.5 mb-2 md:mb-0">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary fill-primary" />
            ))}
          </div>
          <span className="text-xs uppercase tracking-widest text-primary/80 font-medium text-center">
            Prověřeno na CZ/SK barbershopech
          </span>
        </AnimatedSection>

        {/* Main headline */}
        <AnimatedSection delay={100} className="w-full mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-[72px] font-bold tracking-tight leading-[1.1] mb-6 md:mb-8">
            Máte volná okna.
            <br />
            Máte databázi klientů.
            <br />
            <span className="serif-italic text-primary font-sans text-3xl md:text-5xl lg:text-6xl pt-2 md:pt-4 inline-block">
              Proč jedno neřeší druhé?
            </span>
          </h1>

          {/* Stat callout */}
          <div
            className="inline-flex items-center gap-3 px-5 py-3 rounded-xl mb-6 md:mb-8"
            style={{
              background: "rgba(57,143,255,0.08)",
              border: "1px solid rgba(57,143,255,0.2)",
            }}
          >
            <span className="text-2xl md:text-3xl font-extrabold text-primary whitespace-nowrap">40 %</span>
            <span className="text-sm md:text-base text-foreground/80 text-left leading-tight">
              klientů přijde jednou nebo dvakrát — a pak zmizí. Jen zapomněli přijít znovu.
            </span>
          </div>

          <div className="text-body max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            <p>
              Náš systém se jim automaticky ozve ve správný čas, správnou zprávou.{" "}
              <strong className="text-foreground font-semibold">Vy nic neřešíte.</strong>
            </p>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={300} className="flex flex-col items-center">
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-4 md:mb-5">
            <a
              href="#calendly-section"
              className="neon-button px-6 py-3 text-sm md:text-base md:px-8 md:py-4"
            >
              <span>Zjistěte, kolik peněz vám leží v databázi</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <p className="text-primary/80 text-sm md:text-base mt-1 md:mt-2 mb-10 md:mb-14">
            (15minutový hovor zdarma — žádná smlouva, žádný závazek)
          </p>

          {/* Trust badges */}
          <div className="w-full max-w-3xl mx-auto">
            <div className="flex flex-col items-center md:flex-row md:justify-center gap-3 md:gap-0 md:divide-x md:divide-border">
              {badges.map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-2 md:gap-3 md:px-8 first:md:pl-0 last:md:pr-0"
                >
                  <div
                    className="w-6 h-6 md:w-7 md:h-7 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(57,143,255,0.12)",
                      border: "1px solid rgba(57,143,255,0.25)",
                    }}
                  >
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
