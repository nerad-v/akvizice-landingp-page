import AnimatedSection from "./AnimatedSection";

const Guarantee = () => {
  return (
    <section className="relative py-28 sm:py-36 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-medium tracking-[0.14em] uppercase text-label mb-7 inline-block">
            Garance výsledku
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] mb-6">
            Buď vám zaplníme kalendář,
            <br />
            <span className="serif-italic text-primary">nebo vám vrátíme peníze!</span>
          </h2>
          <p className="text-body mb-4">
            Víme, že náš systém funguje, a proto za něj dáváme ruku do ohně.
          </p>
          <p className="text-body max-w-2xl mx-auto leading-relaxed mb-10">
            Naším cílem je přinést vám reálný zisk, ne vás uvázat k nesmyslným smlouvám. Pokud vám systém do 60 dnů nepřinese výsledky, na kterých jsme se předem dohodli, vrátíme vám plnou částku za jeho nasazení.
          </p>
          <p className="text-3xl sm:text-4xl font-bold text-primary mb-12">
            Vy nic neriskujete. My ano.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="glass-card p-8 sm:p-12 text-center">
            <p className="text-lg sm:text-xl text-body-strong font-medium">
              Vaší jedinou starostí bude stříhat tu spoustu klientů, kteří díky nám přijdou.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Guarantee;
