import { ShieldCheck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Guarantee = () => {
  return (
    <section className="relative pt-20 pb-12 sm:pt-28 sm:pb-16 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-medium tracking-[0.14em] uppercase text-label mb-7 inline-block">
            Garance výsledku
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15]">
            Buď vám zaplníme kalendář,
            <br />
            <span className="serif-italic text-primary pt-3 inline-block">nebo vám vrátíme peníze!</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="flex flex-col items-center w-full max-w-4xl mx-auto mt-12 mb-16">
            <div className="relative w-full bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 text-center overflow-hidden group hover:border-primary/30 transition-all duration-500">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-primary/10 blur-[80px] rounded-full pointer-events-none" />

              <div className="relative mx-auto w-20 h-20 bg-gradient-to-b from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center mb-8 border border-primary/20 shadow-[0_0_30px_rgba(57,143,255,0.15)]">
                <ShieldCheck className="w-10 h-10 text-primary" />
              </div>

              <div className="relative z-10 text-base md:text-lg text-muted-foreground space-y-5 max-w-2xl mx-auto leading-relaxed">
                <p>Víme, že náš systém funguje, a proto za něj dáváme ruku do ohně. Naším cílem je přinést vám reálný zisk, ne vás uvázat k nesmyslným smlouvám.</p>
                <p>Pokud vám systém do 60 dnů nepřinese výsledky, na kterých jsme se předem dohodli, <strong className="text-foreground font-semibold">vrátíme vám plnou částku za jeho nasazení</strong>.</p>
              </div>

              <div className="relative z-10 mt-10 pt-8 border-t border-white/10">
                <h3 className="text-2xl md:text-3xl font-bold text-primary">Vy nic neriskujete. My ano.</h3>
              </div>
            </div>

            <div className="mt-8 px-6 py-4 bg-white/5 border border-white/10 rounded-full text-center max-w-2xl mx-auto">
              <p className="text-muted-foreground text-sm md:text-base">Vaší jedinou starostí bude stříhat tu spoustu klientů, kteří díky nám přijdou.</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Guarantee;
