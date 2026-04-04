import { CalendarCheck, DollarSign, Clock, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const CaseStudy = () => {
  const stats = [
    { icon: CalendarCheck, value: "31", label: "zachráněných rezervací za dva týdny" },
    { icon: DollarSign, value: "0 Kč", label: "utracených za další propagaci." },
    { icon: Clock, value: "0 Hodin", label: "stráveného času nastavováním" },
  ];

  return (
    <section className="relative py-14 sm:py-20 md:py-28 px-5 sm:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-12 sm:mb-20 md:mb-24">
          <span className="text-xs md:text-sm font-medium tracking-[0.14em] uppercase text-label mb-5 md:mb-7 inline-block">
            Případová studie
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4 md:mb-6">
            Jak to vypadalo v praxi u
            <br />
            <span className="serif-italic text-primary pt-2 md:pt-3 inline-block">Platini Barber v Brně</span>
          </h2>
          <div className="text-body max-w-3xl mx-auto text-sm md:text-lg">
            <p className="mb-2 md:mb-3">Platini měl dva barbery a databázi 1 500 kontaktů. Kdykoliv někdo zrušil termín na poslední chvíli, znamenalo to prázdné křeslo a <strong className="text-foreground font-semibold">čistou ztrátu</strong>.</p>
            <p>Po napojení našeho řešení na jeho rezervační systém se stalo toto:</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200} className="mb-6 md:mb-10">
          <div className="glass-card p-6 sm:p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: '#398fff', opacity: 0.1, filter: 'blur(120px)' }} />
            <p className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-primary relative z-10">
              21 320 Kč
            </p>
            <p className="text-lg sm:text-2xl font-semibold mt-2 relative z-10">navíc v tržbách.</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300} className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 lg:gap-6 mb-10 md:mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card p-5 md:p-6 text-center">
              <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-primary mx-auto mb-2 md:mb-3" />
              <p className="text-xl md:text-2xl font-bold">{stat.value}</p>
              <p className="text-body text-xs md:text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </AnimatedSection>

        <AnimatedSection delay={400} className="max-w-3xl mx-auto mb-10 md:mb-16">
          <blockquote className="border-l-4 border-primary pl-5 md:pl-6 py-2">
            <p className="text-body text-sm md:text-base italic leading-relaxed">
              „Sakra, já vyhodil takový prachy za Google a vůbec to nebylo tak přesný, jak jste vy. To kdybych věděl dřív haha, nevadí 👏👏 Doporučím vás, kudy půjdu."
            </p>
            <footer className="mt-2 md:mt-3 text-xs md:text-sm text-muted-ref">– Michael majitel Platini Barber</footer>
          </blockquote>
        </AnimatedSection>

        <AnimatedSection delay={500} className="flex flex-col items-center">
          <a href="#calendly-section" className="neon-button px-6 py-3 text-sm md:text-base md:px-8 md:py-4 max-w-xs md:max-w-none">
            <span>Zjistěte co to přinese vašemu barbershopu</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-primary/80 text-sm md:text-base mt-2 md:mt-3">(rezervujte si 15 minutový videohovor zdarma)</p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CaseStudy;
