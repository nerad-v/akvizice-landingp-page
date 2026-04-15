import { CalendarX, RotateCcw, Heart, Zap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const blocks = [
  {
    icon: CalendarX,
    title: "Prázdná křesla",
    text: "Stornovaný termín nebo volné okno den nebo pár hodin předem → systém automaticky osloví klienty, kteří by přišli. Platini Barber takto zachránil 31 rezervací za 2 týdny.",
    highlight: "31 rezervací za 2 týdny",
  },
  {
    icon: RotateCcw,
    title: "Reaktivace",
    text: "Klient byl 90 dní pryč? Dostane zprávu, která ho přiměje vzpomenout si na vás — v momentě kdy je pravděpodobně zase po střihu.",
    highlight: null,
  },
  {
    icon: Heart,
    title: "Návratnost",
    text: "Personalizovaná zpráva po střihu, tip na péči o vousy, připomenutí ideálního intervalu. Zákazník cítí péči — a příště se vrátí k vám.",
    highlight: null,
  },
];

const WhatSystemDoes = () => {
  return (
    <section className="relative py-14 sm:py-20 md:py-28 px-5 sm:px-8 overflow-hidden">
      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "#398fff", opacity: 0.07, filter: "blur(140px)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-12 md:mb-20">
          <div className="flex items-center justify-center gap-2 mb-5 md:mb-7">
            <Zap className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary fill-primary/20" />
            <span className="text-xs md:text-sm font-medium tracking-[0.14em] uppercase text-label">
              Co systém dělá
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Co přesně za vás
            <br />
            <span className="serif-italic text-primary pt-2 md:pt-3 inline-block">systém řeší?</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {blocks.map((block, i) => (
            <AnimatedSection key={block.title} delay={150 + i * 120}>
              <div className="glass-card p-6 sm:p-8 md:p-10 h-full flex flex-col gap-4 md:gap-5 transition-all duration-300 hover:-translate-y-1 group">
                <div
                  className="w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, rgba(57,143,255,0.15), rgba(57,143,255,0.06))",
                    border: "1px solid rgba(57,143,255,0.25)",
                  }}
                >
                  <block.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground">{block.title}</h3>
                <p className="text-body text-base md:text-lg leading-relaxed">{block.text}</p>
                {block.highlight && (
                  <div
                    className="mt-auto pt-4 border-t"
                    style={{ borderColor: "rgba(57,143,255,0.15)" }}
                  >
                    <span className="text-primary font-semibold text-sm md:text-base">
                      → {block.highlight}
                    </span>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatSystemDoes;
