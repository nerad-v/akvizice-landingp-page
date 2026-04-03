import { CalendarCheck, DollarSign, Clock } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const CaseStudy = () => {
  const stats = [
    { icon: CalendarCheck, value: "31", label: "zachráněných rezervací" },
    { icon: DollarSign, value: "0 Kč", label: "utracených za další propagaci." },
    { icon: Clock, value: "0 Hodin", label: "stráveného času nastavováním" },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-6">
          <span className="text-neon-blue text-sm font-semibold tracking-widest uppercase">
            Případová studie
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-3 mb-4">
            Jak to vypadalo v praxi u Platini Barber v Brně
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Platini měl dva barbery a databázi 1 500 kontaktů. Kdykoliv někdo zrušil termín na poslední chvíli, znamenalo to prázdné křeslo a čistou ztrátu. Po napojení našeho řešení na jeho rezervační systém, se stalo toto:
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200} className="mb-10">
          <div className="glass-card p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="radial-glow w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neon-blue relative z-10">
              21 320 Kč
            </p>
            <p className="text-xl sm:text-2xl font-semibold mt-2 relative z-10">navíc v tržbách.</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300} className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card p-6 text-center">
              <stat.icon className="w-6 h-6 text-neon-blue mx-auto mb-3" />
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </AnimatedSection>

        <AnimatedSection delay={400} className="max-w-3xl mx-auto mb-12">
          <blockquote className="border-l-4 border-neon-blue pl-6 py-2">
            <p className="text-gray-400 italic leading-relaxed">
              „Sakra, já vyhodil takový prachy za Google a vůbec to nebylo tak přesný, jak jste vy. To kdybych věděl dřív haha, nevadí 👏👏 Doporučím vás, kudy půjdu."
            </p>
            <footer className="mt-3 text-sm text-gray-500">– Michael majitel Platini Barber</footer>
          </blockquote>
        </AnimatedSection>

        <AnimatedSection delay={500} className="text-center">
          <a href="#calendly-section" className="neon-button inline-block text-base sm:text-lg mb-2">
            Zjistěte co to přinese vašemu barbershopu
          </a>
          <p className="text-gray-500 text-sm">(rezervujte si 15 minutový videohovor zdarma)</p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CaseStudy;
