import { Calendar, Moon, Clock } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const problems = [
  {
    icon: Calendar,
    title: "Storno nebo volné okno",
    text: "Klient napíše hodinu předem, že nepřijde. Nebo máte v kalendáři okno, které nikdo nezaplnil. Výsledek: Prázdné křeslo v obou případech — a vy nemáte čas to řešit.",
  },
  {
    icon: Moon,
    title: "Spící klienti",
    text: "Přišel jednou, dvakrát — pak nic. Nebyl nespokojený. Jen zapomněl přijít znovu.",
  },
  {
    icon: Clock,
    title: "Nepravidelné návraty",
    text: "Ideální interval u většiny střihů jsou 3–4 týdny. Většina klientů čeká 6–8. Ten rozdíl? Klidně 3–4 návštěvy za rok, co se prostě nekonají.",
  },
];

const ProblemAgitation = () => {
  return (
    <section className="relative py-14 sm:py-20 md:py-28 px-5 sm:px-8 overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-foreground/5" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-3 md:mb-4">
            Jak to vypadá
            <br />
            <span className="serif-italic text-primary pt-2 md:pt-3 inline-block">v každém barbershopu.</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {problems.map((problem, i) => (
            <AnimatedSection key={problem.title} delay={150 + i * 100}>
              <div className="glass-card p-6 sm:p-8 md:p-10 h-full flex flex-col gap-4 md:gap-5 transition-all duration-300 hover:-translate-y-1 group">
                <div
                  className="w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, rgba(57,143,255,0.15), rgba(57,143,255,0.06))",
                    border: "1px solid rgba(57,143,255,0.25)",
                  }}
                >
                  <problem.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground">{problem.title}</h3>
                <p className="text-body text-base md:text-lg leading-relaxed">{problem.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemAgitation;
