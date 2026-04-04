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
    <section id="calendly-section" className="relative py-20 sm:py-28 px-5 sm:px-8 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] rounded-full pointer-events-none" style={{ background: '#398fff', opacity: 0.1, filter: 'blur(160px)' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] mb-6">
            Zjistěte, kolik peněz
            <br />
            <span className="serif-italic text-primary pt-3 inline-block">vám leží v kalendáři.</span>
          </h2>
          <p className="text-body">15minutový hovor. Žádná smlouva. Žádný závazek.</p>
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
