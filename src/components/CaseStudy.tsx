import { CalendarCheck, DollarSign, Clock, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const CaseStudy = () => {
  const stats = [
    { icon: CalendarCheck, value: "31", label: "zachráněných rezervací" },
    { icon: DollarSign, value: "0 Kč", label: "utracených za další propagaci." },
    { icon: Clock, value: "0 Hodin", label: "stráveného času nastavováním" },
  ];

  return (
    <section className="relative py-28 sm:py-36 px-5 sm:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-20 sm:mb-24">
          <span className="text-sm font-medium tracking-[0.14em] uppercase text-label mb-7 inline-block">
            Případová studie
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] mb-6">
            Jak to vypadalo v praxi u
            <br />
            <span className="serif-italic text-primary pt-3 inline-block">Platini Barber v Brně</span>
          </h2>
          <div className="text-body max-w-3xl mx-auto text-lg">
            <p className="mb-3">Platini měl dva barbery a databázi 1 500 kontaktů. Kdykoliv někdo zrušil termín na poslední chvíli, znamenalo to prázdné křeslo a <strong className="text-foreground font-semibold">čistou ztrátu</strong>.</p>
            <p>Po napojení našeho řešení na jeho rezervační systém se stalo toto:</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200} className="mb-10">
          <div className="glass-card p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: '#398fff', opacity: 0.1, filter: 'blur(120px)' }} />
            <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary relative z-10">
              21 320 Kč
            </p>
            <p className="text-xl sm:text-2xl font-semibold mt-2 relative z-10">navíc v tržbách.</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300} className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card p-6 text-center">
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-body text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </AnimatedSection>

        <AnimatedSection delay={400} className="max-w-3xl mx-auto mb-16">
          <blockquote className="border-l-4 border-primary pl-6 py-2">
            <p className="text-body italic leading-relaxed">
              „Sakra, já vyhodil takový prachy za Google a vůbec to nebylo tak přesný, jak jste vy. To kdybych věděl dřív haha, nevadí 👏👏 Doporučím vás, kudy půjdu."
            </p>
            <footer className="mt-3 text-sm text-muted-ref">– Michael majitel Platini Barber</footer>
          </blockquote>
        </AnimatedSection>

        <AnimatedSection delay={500} className="text-center">
          <a href="#calendly-section" className="neon-button text-base mb-3">
            <span>Zjistěte co to přinese vašemu barbershopu</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-muted-ref text-sm">(rezervujte si 15 minutový videohovor zdarma)</p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CaseStudy;
