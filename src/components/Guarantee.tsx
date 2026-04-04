import AnimatedSection from "./AnimatedSection";

const Guarantee = () => {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-8">
          <span className="text-neon-blue text-sm font-semibold tracking-widest uppercase">
            Garance výsledku
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-3 mb-3">
            Buď vám zaplníme kalendář,{" "}
            <br />
            <span className="font-serif italic text-primary">nebo vám vrátíme peníze!</span>
          </h2>
          <p className="text-gray-400 mb-4">
            Víme, že náš systém funguje, a proto za něj dáváme ruku do ohně.
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
            Naším cílem je přinést vám reálný zisk, ne vás uvázat k nesmyslným smlouvám. Pokud vám systém do 60 dnů nepřinese výsledky, na kterých jsme se předem dohodli, vrátíme vám plnou částku za jeho nasazení.
          </p>
          <p className="text-2xl sm:text-3xl font-bold text-neon-blue mb-10">
            Vy nic neriskujete. My ano.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="glass-card p-8 sm:p-12 text-center">
            <p className="text-lg sm:text-xl text-gray-300 font-medium">
              Vaší jedinou starostí bude stříhat tu spoustu klientů, kteří díky nám přijdou.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Guarantee;
