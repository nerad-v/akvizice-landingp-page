import { Store, Plus } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const systems = [
  { name: "Reservio", sub: "Rezervační systém", icon: Store },
  { name: "Reservanto", sub: "Rezervační systém", icon: Store },
  { name: "MyFox", sub: "Rezervační systém", icon: Store },
  { name: "...a další desítky systémů", sub: "Rezervační systém", icon: Plus },
];

const Compatibility = () => {
  return (
    <section className="relative py-24 md:py-32 px-5 sm:px-8 overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-foreground/5" />
      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-foreground/5" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none" style={{ background: '#398fff', opacity: 0.05, filter: 'blur(100px)' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-16 text-center">
            Napojíme se na 90 %
            <br />
            <span className="serif-italic text-primary pt-3 inline-block">systémů v ČR a SR</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="flex flex-wrap items-stretch justify-center gap-5">
            {systems.map((s) => (
              <div
                key={s.name}
                className="glass-card p-6 flex items-center gap-4 min-w-[220px] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
                style={{ borderColor: 'rgba(255,255,255,0.1)' }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, rgba(57,143,255,0.15), rgba(57,143,255,0.06))', border: '1px solid rgba(57,143,255,0.25)' }}>
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-base text-foreground font-medium">{s.name}</p>
                  <p className="text-xs text-muted-ref">{s.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Compatibility;
