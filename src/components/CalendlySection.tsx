import { useEffect } from "react";
import { CircleCheck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const CalendlySection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Track Calendly booking in Meta pixel — fires from parent window, bypasses iframe restrictions
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.origin !== "https://calendly.com") return;
      if (e.data?.event === "calendly.event_scheduled") {
        if (typeof window.fbq === "function") {
          window.fbq("track", "Schedule");
        }
      }
    };
    window.addEventListener("message", handleCalendlyEvent);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener("message", handleCalendlyEvent);
    };
  }, []);

  return (
    <section id="calendly-section" className="relative pt-10 pb-16 sm:pt-16 sm:pb-20 md:pb-28 px-5 sm:px-8 overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] rounded-full pointer-events-none"
        style={{ background: "#398fff", opacity: 0.1, filter: "blur(160px)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4 md:mb-6">
            Zjistěte, kolik peněz
            <br />
            <span className="serif-italic text-primary pt-2 md:pt-3 inline-block">vám leží v databázi.</span>
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
          <p className="text-sm text-muted-foreground mb-4 italic text-center">
            Vyberte si čas, který vám vyhovuje. Zabere to 30 sekund.
          </p>
          <div className="glass-card overflow-hidden p-1 md:p-2">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/nerad-boostmail/kolik-penez-vam-lezi-v-kalendari-15-min-clone?hide_gdpr_banner=1&background_color=000000&text_color=ffffff&primary_color=1a5ada"
              style={{ minWidth: "320px", height: "700px" }}
            />
          </div>
        </AnimatedSection>

        <div className="mt-6 flex justify-center w-full">
          <a
            href="https://calendly.com/nerad-boostmail/kolik-penez-vam-lezi-v-kalendari-15-min-clone"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-300 px-5 py-2.5 rounded-full border border-border/30 hover:border-border/60 bg-muted/5 hover:bg-muted/10"
          >
            <span>Nezobrazuje se kalendář správně? Otevřít v novém okně</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >
              <path d="M15 3h6v6" />
              <path d="M10 14 21 3" />
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CalendlySection;
