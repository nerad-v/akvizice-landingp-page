import { Heart, Settings, Users } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const cards = [
  {
    icon: Heart,
    title: "Není to spam, ale prvotřídní péče.",
    text: (
      <div className="text-muted-foreground text-base md:text-lg leading-relaxed">
        <p className="mb-3 md:mb-4">Žádné plošné slevy ani nátlak. Systém se ozve jen ve chvíli, kdy to dává smysl – např. <strong className="text-foreground font-semibold">4 týdny po návštěvě</strong>.</p>
        <p>Tím na dálku budujete vztah. Zákazník cítí péči, ne spam, a díky tomu vám <strong className="text-foreground font-semibold">jen tak neuteče ke konkurenci</strong>.</p>
      </div>
    ),
  },
  {
    icon: Settings,
    title: "Nečekají vás žádné technické složitosti.",
    text: (
      <div className="text-muted-foreground text-base md:text-lg leading-relaxed">
        <p className="mb-3 md:mb-4">Kompletní napojení na rezervační systém <strong className="text-foreground font-semibold">vyřešíme za vás</strong>.</p>
        <p>Vy jen schválíte design a texty. Poté už bude vaším jediným úkolem sledovat, <strong className="text-foreground font-semibold">jak naskakují nové rezervace</strong>.</p>
      </div>
    ),
  },
  {
    icon: Users,
    title: "Nenaháníme cizí lidi z reklam.",
    text: (
      <div className="text-muted-foreground text-base md:text-lg leading-relaxed">
        <p className="mb-3 md:mb-4">Nepotřebujete platit drahé kampaně na Facebooku.</p>
        <p>Pomáháme vám <strong className="text-foreground font-semibold">vytěžit maximum z vaší stávající databáze</strong> – oslovujeme pouze zákazníky, kteří vás už znají a mají k vám důvěru.</p>
      </div>
    ),
  },
];

const ObjectionHandling = () => {
  return (
    <section className="relative py-14 sm:py-20 md:py-28 px-5 sm:px-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] rounded-full" style={{ background: '#398fff', opacity: 0.08, filter: 'blur(160px)' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <AnimatedSection className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-3 md:mb-4">
            Jak přesně vám zaplníme
            <br />
            <span className="serif-italic text-primary pt-2 md:pt-3 inline-block">volná křesla?</span>
          </h2>
          <p className="text-base md:text-xl md:text-2xl text-muted-foreground mt-2 md:mt-4">(a proč se nemusíte bát slova „automatizace")</p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="max-w-3xl mx-auto text-base md:text-lg text-muted-foreground space-y-3 md:space-y-5 text-center mt-8 md:mt-20 mb-12 md:mb-24 leading-relaxed">
            <p><strong className="text-foreground font-semibold">Náš cíl je jednoduchý:</strong> Zajistit, abyste neměli v kalendáři díry – ať už po stornovaném termínu, nebo kvůli hluchým oknům.</p>
            <p>Náš systém hlídá váš rezervační systém a <strong className="text-foreground font-semibold">v pravý čas se ozve správným klientům</strong>.</p>
            <p>Víme ale, že slovo „automatizace" spoustu barberů děsí: představí si otravný spam, technické komplikace a naštvané zákazníky.</p>
            <p className="text-lg md:text-2xl text-foreground font-bold pt-4 md:pt-6">Jak to tedy funguje u nás?</p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {cards.map((card, i) => (
            <AnimatedSection key={card.title} delay={200 + i * 100}>
              <div className="glass-card p-6 sm:p-8 md:p-10 h-full flex flex-col gap-4 md:gap-5 transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105" style={{ background: 'linear-gradient(135deg, rgba(57,143,255,0.15), rgba(57,143,255,0.06))', border: '1px solid rgba(57,143,255,0.25)' }}>
                  <card.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-foreground">{card.title}</h3>
                {typeof card.text === 'string' ? <p className="text-body text-sm leading-relaxed">{card.text}</p> : card.text}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectionHandling;
