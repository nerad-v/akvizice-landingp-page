import { useState } from "react";
import { ChevronDown, Zap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    question: "Nebudou z toho klienti naštvaní jako ze spamu?",
    answer:
      "Ne — zprávy odcházejí jen v momentech kdy to dává smysl: 4 týdny po návštěvě, den před termínem, po 90 dnech bez návštěvy. Zároveň jsou všechny zprávy napsány s důrazem na osobní přístup. Klienti to cítí jako péči, ne jako reklamu.",
  },
  {
    question: "Musím něco nastavovat nebo technicky řešit?",
    answer:
      "Vůbec ne. Napojení na rezervační systém vyřešíme my. Vy jen schválíte texty a sledujete výsledky.",
  },
  {
    question: "Co když to u nás nefunguje?",
    answer:
      "Pak vrátíme peníze. Dáváme 60denní garanci — pokud systém nevydělá co jsme slíbili, vracíme celou platbu za nasazení. Bez diskuse.",
  },
  {
    question: "Jak rychle uvidím výsledky?",
    answer:
      "Všechny automatizace běží do 7 dní od tohoto dne už můžete vidět výsledky. Platini Barber měl prvních 31 rezervací za 2 týdny.",
  },
];

const FAQItem = ({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div
      className="glass-card overflow-hidden transition-all duration-300"
      style={{ borderColor: isOpen ? "rgba(57,143,255,0.25)" : undefined }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 md:p-7 text-left"
      >
        <span className="text-base md:text-lg font-semibold text-foreground leading-snug">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-5 sm:px-6 md:px-7 pb-5 sm:pb-6 md:pb-7 text-body text-sm md:text-base leading-relaxed">
          {faq.answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-14 sm:py-20 md:py-28 px-5 sm:px-8 overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-foreground/5" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <AnimatedSection className="text-center mb-10 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-5 md:mb-7">
            <Zap className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary fill-primary/20" />
            <span className="text-xs md:text-sm font-medium tracking-[0.14em] uppercase text-label">
              Časté otázky
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Asi se
            <br />
            <span className="serif-italic text-primary pt-2 md:pt-3 inline-block">ptáte…</span>
          </h2>
        </AnimatedSection>

        <div className="flex flex-col gap-3 md:gap-4">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={100 + i * 80}>
              <FAQItem
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
