import { Heart, Settings, Users } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const cards = [
  {
    icon: Heart,
    title: "Není to spam, ale prvotřídní péče.",
    text: "Nebudeme vašim zákazníkům posílat slevy ani je do ničeho tlačit. Systém jim napíše jen tehdy, když to dává smysl – například když uplynuly 4 týdny od návštěvy a účes už potřebuje oživit. Tímto způsobem na dálku budujete pevný vztah, díky kterému vám klient jen tak neuteče ke konkurenci.",
  },
  {
    icon: Settings,
    title: "Nečekají vás žádné technické složitosti.",
    text: "O veškeré nastavování a napojení na váš rezervační systém se postaráme my. Vy si pouze prohlédnete a schválíte připravené texty a design emailů. Poté už bude vašim jediným úkolem sledovat, jak naskakují nové rezervace.",
  },
  {
    icon: Users,
    title: "Nenaháníme cizí lidi z reklam.",
    text: "Nepotřebujete platit drahé kampaně na Facebooku. Pomáháme vám vytěžit maximum z vaší stávající databáze – oslovujeme pouze zákazníky, kteří vás už znají a mají k vám důvěru.",
  },
];

const ObjectionHandling = () => {
  return (
    <section className="relative py-28 sm:py-36 px-5 sm:px-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] rounded-full" style={{ background: '#398fff', opacity: 0.08, filter: 'blur(160px)' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-20 sm:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] mb-4">
            Jak přesně vám zaplníme
            <br />
            <span className="serif-italic text-primary pt-3 inline-block">volná křesla?</span>
          </h2>
          <p className="text-muted-ref text-sm">(a proč se nemusíte bát slova „automatizace")</p>
        </AnimatedSection>

        <AnimatedSection delay={100} className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-body leading-relaxed mb-6 whitespace-pre-line">
            {`Náš cíl je jednoduchý: 
 Zajistit, aby se vaši klienti vraceli pravidelně, a nedopustit, abyste měli v kalendáři díry – ať už jde o stornovaný termín, nebo zkrátka jen prázdné okno, které si nikdo nevybral. 


Stavíme systém, který hlídá váš rezervační systém a v pravý čas se ozve správným klientům.


Víme ale, že při slově „automatizace" si spousta barberů představí to samé: 
otravný spam, technické komplikace a naštvané zákazníky.`}
          </p>
          <p className="text-white font-bold text-lg">Jak to tedy funguje u nás?</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {cards.map((card, i) => (
            <AnimatedSection key={card.title} delay={200 + i * 100}>
              <div className="glass-card p-8 sm:p-10 h-full flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105" style={{ background: 'linear-gradient(135deg, rgba(57,143,255,0.15), rgba(57,143,255,0.06))', border: '1px solid rgba(57,143,255,0.25)' }}>
                  <card.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                <p className="text-body text-sm leading-relaxed">{card.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectionHandling;
