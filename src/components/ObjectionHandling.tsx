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
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Jak přesně vám zaplníme volná křesla?
          </h2>
          <p className="text-gray-500 text-sm">(a proč se nemusíte bát slova „automatizace")</p>
        </AnimatedSection>

        <AnimatedSection delay={100} className="max-w-3xl mx-auto text-center mb-8">
          <p className="text-gray-400 leading-relaxed mb-6">
            Náš cíl je jednoduchý: Zajistit, aby se vaši klienti vraceli pravidelně, a nedopustit, abyste měli v kalendáři díry – ať už jde o stornovaný termín, nebo zkrátka jen prázdné okno, které si nikdo nevybral. Stavíme systém, který hlídá váš rezervační systém a v pravý čas se ozve správným klientům. Víme ale, že při slově „automatizace" si spousta barberů představí to samé: otravný spam, technické komplikace a naštvané zákazníky.
          </p>
          <p className="text-foreground font-bold text-lg">Jak to tedy funguje u nás?</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <AnimatedSection key={card.title} delay={200 + i * 150}>
              <div className="glass-card p-6 sm:p-8 h-full">
                <card.icon className="w-8 h-8 text-neon-blue mb-4" />
                <h3 className="text-lg font-bold mb-3">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectionHandling;
