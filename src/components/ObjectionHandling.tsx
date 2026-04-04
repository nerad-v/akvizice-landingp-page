import { Heart, Settings, Users } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const cards = [
  {
    icon: Heart,
    title: "Není to spam, ale prvotřídní péče.",
    text: (
      <div className="text-white/70 text-base md:text-lg leading-relaxed space-y-4">
        <p>Nebudeme vašim zákazníkům posílat slevy ani je do ničeho tlačit.</p>
        <p>Systém jim napíše jen tehdy, když to dává smysl – například když uplynuly <strong className="text-foreground font-semibold">4 týdny od návštěvy</strong> a účes už potřebuje oživit.</p>
        <p>Tímto způsobem na dálku budujete pevný vztah, díky kterému vám klient <strong className="text-foreground font-semibold">jen tak neuteče ke konkurenci</strong>.</p>
      </div>
    ),
  },
  {
    icon: Settings,
    title: "Nečekají vás žádné technické složitosti.",
    text: (
      <div className="text-white/70 text-base md:text-lg leading-relaxed space-y-4">
        <p>O veškeré nastavování a napojení na váš rezervační systém <strong className="text-foreground font-semibold">se postaráme my</strong>.</p>
        <p>Vy si pouze prohlédnete a schválíte připravené texty a design emailů.</p>
        <p>Poté už bude vašim jediným úkolem sledovat, <strong className="text-foreground font-semibold">jak naskakují nové rezervace</strong>.</p>
      </div>
    ),
  },
  {
    icon: Users,
    title: "Nenaháníme cizí lidi z reklam.",
    text: (
      <div className="text-white/70 text-base md:text-lg leading-relaxed space-y-4">
        <p>Nepotřebujete platit drahé kampaně na Facebooku.</p>
        <p>Pomáháme vám <strong className="text-foreground font-semibold">vytěžit maximum z vaší stávající databáze</strong> – oslovujeme pouze zákazníky, kteří vás už znají a mají k vám důvěru.</p>
      </div>
    ),
  },
];

const ObjectionHandling = () => {
  return (
    <section className="relative py-28 sm:py-36 px-5 sm:px-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] rounded-full" style={{ background: '#398fff', opacity: 0.08, filter: 'blur(160px)' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <AnimatedSection className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] mb-4">
            Jak přesně vám zaplníme
            <br />
            <span className="serif-italic text-primary pt-3 inline-block">volná křesla?</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mt-4">(a proč se nemusíte bát slova „automatizace")</p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="max-w-3xl mx-auto text-lg text-muted-foreground space-y-4 text-center mt-10 mb-16">
            <p><strong className="text-foreground font-semibold">Náš cíl je jednoduchý:</strong> Zajistit, aby se vaši klienti vraceli pravidelně, a nedopustit, abyste měli v kalendáři díry – ať už jde o stornovaný termín, nebo zkrátka jen prázdné okno, které si nikdo nevybral.</p>
            <p>Stavíme systém, který hlídá váš rezervační systém a <strong className="text-foreground font-semibold">v pravý čas se ozve správným klientům</strong>.</p>
            <p>Víme ale, že při slově „automatizace" si spousta barberů představí to samé: otravný spam, technické komplikace a naštvané zákazníky.</p>
            <p className="text-xl md:text-2xl text-foreground font-bold pt-6">Jak to tedy funguje u nás?</p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {cards.map((card, i) => (
            <AnimatedSection key={card.title} delay={200 + i * 100}>
              <div className="glass-card p-8 sm:p-10 h-full flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105" style={{ background: 'linear-gradient(135deg, rgba(57,143,255,0.15), rgba(57,143,255,0.06))', border: '1px solid rgba(57,143,255,0.25)' }}>
                  <card.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
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
