import { ReactNode } from "react";
import { Zap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const steps: { number: string; title: string; text: ReactNode }[] = [
  {
    number: "01",
    title: "Napojení",
    text: (
      <>
        Reservio, Bookio, MyFox a desítky dalších —{" "}
        <strong className="text-foreground font-semibold">technické napojení vyřešíme my</strong>.
        Vy nám dáte přístup, my se postaráme o zbytek.
      </>
    ),
  },
  {
    number: "02",
    title: "Nastavení",
    text: (
      <>
        Schválíte texty zpráv a design, ať to přesně sedí vašemu stylu komunikace. Poté{" "}
        <strong className="text-foreground font-semibold">systém sám hlídá kalendář</strong> a ví,{" "}
        <strong className="text-foreground font-semibold">komu, kdy a co poslat</strong>.
      </>
    ),
  },
  {
    number: "03",
    title: "Výsledky",
    text: (
      <>
        Stornovaný termín?{" "}
        <strong className="text-foreground font-semibold">Systém do hodiny osloví klienty</strong> ze seznamu.
        Klient 3 měsíce pryč? Dostane připomenutí. Vy jen sledujete,{" "}
        <strong className="text-foreground font-semibold">jak naskakují rezervace</strong>.
      </>
    ),
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-14 sm:py-20 md:py-28 px-5 sm:px-8 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-foreground/5" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-12 md:mb-20">
          <div className="flex items-center justify-center gap-2 mb-5 md:mb-7">
            <Zap className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary fill-primary/20" />
            <span className="text-xs md:text-sm font-medium tracking-[0.14em] uppercase text-label">
              Jak to funguje
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-3 md:mb-4">
            Jak to funguje?
            <br />
            <span className="serif-italic text-primary pt-2 md:pt-3 inline-block text-2xl md:text-4xl">
              (a proč se nemusíte bát slova „automatizace")
            </span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={150 + i * 120}>
              <div className="glass-card p-6 sm:p-8 md:p-10 h-full flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-1">
                  <span
                    className="text-3xl md:text-4xl font-extrabold leading-none"
                    style={{
                      background: "linear-gradient(135deg, #398fff 0%, #1a5ada 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground">{step.title}</h3>
                <p className="text-body text-base md:text-lg leading-relaxed">{step.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
