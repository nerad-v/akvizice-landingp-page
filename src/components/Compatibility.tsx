import { Store } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const systems = [
  { name: "Reservio", sub: "Rezervační systém" },
  { name: "Bookio", sub: "Rezervační systém" },
  { name: "MyFox", sub: "Rezervační systém" },
  { name: "Booklux", sub: "Rezervační systém" },
];

const Compatibility = () => {
  return (
    <section className="relative py-14">
      <div className="gradient-divider w-full" />
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-14">
        <AnimatedSection>
          <p className="text-center mb-8 uppercase tracking-[0.14em] font-medium text-sm text-dimmed">
            Napojíme se na 90 % systémů v ČR a SR
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {systems.map((s) => (
              <div key={s.name} className="glass-pill flex items-center gap-3.5 transition-all duration-300 hover:-translate-y-0.5">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, rgba(57,143,255,0.12), rgba(57,143,255,0.05))', border: '1px solid rgba(57,143,255,0.2)' }}>
                  <Store className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-white font-medium">{s.name}</p>
                  <p className="text-xs text-muted-ref">{s.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
      <div className="pt-14">
        <div className="gradient-divider w-full" />
      </div>
    </section>
  );
};

export default Compatibility;
