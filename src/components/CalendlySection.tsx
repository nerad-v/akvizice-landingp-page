import { useEffect } from "react";
import AnimatedSection from "./AnimatedSection";

const CalendlySection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="calendly-section" className="relative py-20 px-4 sm:px-6 overflow-hidden">
      <div className="radial-glow w-[600px] h-[600px] top-0 left-1/2 -translate-x-1/2 -translate-y-1/4" />

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Zjistěte, kolik peněz{" "}
            <br />
            <span className="font-serif italic text-primary">vám leží v kalendáři.</span>
          </h2>
          <p className="text-gray-400">15minutový hovor. Žádná smlouva. Žádný závazek.</p>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="glass-card overflow-hidden p-2">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/nerad-boostmail/jak-na-maximalne-plny-kalendar-15-min?background_color=000000&text_color=ffffff&primary_color=398fff"
              style={{ minWidth: "320px", height: "700px" }}
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CalendlySection;
