import { CalendarCheck, BookOpen, Laptop, Calendar } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const systems = [
  { name: "Reservio", icon: CalendarCheck },
  { name: "Bookio", icon: BookOpen },
  { name: "MyFox", icon: Laptop },
  { name: "Booklux", icon: Calendar },
];

const Compatibility = () => {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Napojíme se na 90 % systémů v ČR a SR
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={200} className="flex flex-wrap justify-center gap-4">
          {systems.map((s) => (
            <div key={s.name} className="glass-pill flex items-center gap-3">
              <s.icon className="w-5 h-5 text-neon-blue" />
              <span className="font-medium">{s.name}</span>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Compatibility;
