import { useEffect } from "react";
import { CircleCheck } from "lucide-react";
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
    <section id="calendly-section" className="relative pt-10 pb-16 sm:pt-16 sm:pb-20 md:pb-28 px-5 sm:px-8 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] rounded-full pointer-events-none" style={{ background: '#398fff', opacity: 0.1, filter: 'blur(160px)' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4 md:mb-6">
            Zjistěte, kolik peněz
            <br />
            <span className="serif-italic text-primary pt-2 md:pt-3 inline-block">vám leží v kalendáři.</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-10 mt-5 md:mt-8 mb-8 md:mb-12">
            <div className="flex items-center gap-2 text-foreground font-medium text-sm md:text-lg">
              <CircleCheck className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              <span>15minutový hovor</span>
            </div>
            <div className="flex items-center gap-2 text-foreground font-medium text-sm md:text-lg">
              <CircleCheck className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              <span>Žádná smlouva</span>
            </div>
            <div className="flex items-center gap-2 text-foreground font-medium text-sm md:text-lg">
              <CircleCheck className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              <span>Žádný závazek</span>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="glass-card overflow-hidden p-1 md:p-2">
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
