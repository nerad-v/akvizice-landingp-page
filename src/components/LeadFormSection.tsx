import { useState, type FormEvent, type FocusEvent } from "react";
import { CircleCheck, CheckCircle2, Loader2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

type FormData = {
  name: string;
  shopName: string;
  rezervacniSystem: string;
  countryCode: string;
  phone: string;
};

const REZERVACNI_SYSTEMY = [
  "Reservio",
  "Reservanto",
  "Bookio",
  "MyFox",
  "Jiný",
  "Žádný / papírový kalendář",
];

const COUNTRY_CODES = [
  { code: "+420", label: "🇨🇿 +420" },
  { code: "+421", label: "🇸🇰 +421" },
];

// Web3Forms — email notifikace na nerad@boostmail.cz při každém submitu.
// Access key je veřejný (určený pro client-side použití).
const FORM_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "b30a8b8b-1f7d-41a4-9680-27d2ea7534e7";

const initialData: FormData = {
  name: "",
  shopName: "",
  rezervacniSystem: "",
  countryCode: "+420",
  phone: "",
};

const LeadFormSection = () => {
  const [data, setData] = useState<FormData>(initialData);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [started, setStarted] = useState(false);

  const handleFieldFocus = (_e: FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (started) return;
    setStarted(true);
    if (typeof window.fbq === "function") {
      window.fbq("trackCustom", "LeadFormStart");
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");

    // Fire Meta pixel Lead event — fires bez ohledu na backend, takže attribution funguje i při fetch failu
    if (typeof window.fbq === "function") {
      window.fbq("track", "Lead", {
        content_name: "Barbershop Discovery",
        content_category: data.rezervacniSystem,
      });
    }

    try {
      await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Nový lead — ${data.shopName}`,
          from_name: "Boostmail LP",
          name: data.name,
          shop_name: data.shopName,
          rezervacni_system: data.rezervacniSystem,
          phone: `${data.countryCode} ${data.phone}`.trim(),
        }),
      });
    } catch (err) {
      // Pixel už firnul — attribution je jistá. Log pro debug, ale UX ukážeme úspěch.
      console.error("Lead form submit error:", err);
    }

    setStatus("success");
  };

  if (status === "success") {
    const firstName = data.name.trim().split(/\s+/)[0];
    return (
      <section
        id="kontakt-section"
        className="relative pt-10 pb-16 sm:pt-16 sm:pb-20 md:pb-28 px-5 sm:px-8 overflow-hidden"
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] rounded-full pointer-events-none"
          style={{ background: "#398fff", opacity: 0.1, filter: "blur(160px)" }}
        />

        <div className="max-w-2xl mx-auto relative z-10 text-center">
          <AnimatedSection>
            <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shadow-[0_0_30px_rgba(57,143,255,0.25)]">
              <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-5 md:mb-6">
              Díky{firstName ? `, ${firstName}` : ""}!
            </h2>
            <div className="text-base md:text-lg text-foreground/80 space-y-3 md:space-y-4 leading-relaxed max-w-xl mx-auto">
              <p>
                Do 24 hodin vám zavolám na{" "}
                <strong className="text-foreground">
                  {`${data.countryCode} ${data.phone}`.trim()}
                </strong>
                .
              </p>
              <p>
                Domluvíme si termín krátkého videohovoru, kde vám systém ukážu a probereme,
                jestli by pro váš shop dával smysl.
              </p>
              <p className="pt-4 text-foreground/70">— Vojtěch</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    );
  }

  return (
    <section
      id="kontakt-section"
      className="relative pt-10 pb-16 sm:pt-16 sm:pb-20 md:pb-28 px-5 sm:px-8 overflow-hidden"
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] rounded-full pointer-events-none"
        style={{ background: "#398fff", opacity: 0.1, filter: "blur(160px)" }}
      />

      <div className="max-w-2xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4 md:mb-6">
            Zjistěte, kolik peněz
            <br />
            <span className="serif-italic text-primary pt-2 md:pt-3 inline-block">
              vám leží v databázi.
            </span>
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
          <p className="text-sm text-muted-foreground mb-6 italic text-center">
            Nechte kontakt, do 24 hodin vám zavolám a domluvíme si termín videohovoru.
          </p>

          <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-4 md:space-y-5">
            <div>
              <label htmlFor="lead-name" className="block text-sm font-medium mb-2 text-foreground/80">
                Jméno a příjmení
              </label>
              <input
                id="lead-name"
                type="text"
                autoComplete="name"
                required
                value={data.name}
                onFocus={handleFieldFocus}
                onChange={(e) => handleChange("name", e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-colors"
                placeholder="Jan Novák"
              />
            </div>

            <div>
              <label htmlFor="lead-shop" className="block text-sm font-medium mb-2 text-foreground/80">
                Název barbershopu
              </label>
              <input
                id="lead-shop"
                type="text"
                autoComplete="organization"
                required
                value={data.shopName}
                onFocus={handleFieldFocus}
                onChange={(e) => handleChange("shopName", e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-colors"
                placeholder="Barbershop Novák"
              />
            </div>

            <div>
              <label htmlFor="lead-system" className="block text-sm font-medium mb-2 text-foreground/80">
                Jaký rezervační systém používáte?
              </label>
              <div className="relative">
                <select
                  id="lead-system"
                  required
                  value={data.rezervacniSystem}
                  onFocus={handleFieldFocus}
                  onChange={(e) => handleChange("rezervacniSystem", e.target.value)}
                  className="w-full px-4 py-3 pr-10 rounded-lg bg-white/5 border border-white/10 text-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled className="bg-background text-foreground">
                    Vyberte...
                  </option>
                  {REZERVACNI_SYSTEMY.map((s) => (
                    <option key={s} value={s} className="bg-background text-foreground">
                      {s}
                    </option>
                  ))}
                </select>
                <svg
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>

            <div>
              <label htmlFor="lead-phone" className="block text-sm font-medium mb-2 text-foreground/80">
                Telefon
              </label>
              <div className="flex gap-2">
                <div className="relative shrink-0">
                  <select
                    aria-label="Předvolba"
                    value={data.countryCode}
                    onFocus={handleFieldFocus}
                    onChange={(e) => handleChange("countryCode", e.target.value)}
                    className="h-full pl-3 pr-8 rounded-lg bg-white/5 border border-white/10 text-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-colors appearance-none cursor-pointer"
                  >
                    {COUNTRY_CODES.map((c) => (
                      <option key={c.code} value={c.code} className="bg-background text-foreground">
                        {c.label}
                      </option>
                    ))}
                  </select>
                  <svg
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
                <input
                  id="lead-phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel-national"
                  required
                  value={data.phone}
                  onFocus={handleFieldFocus}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="flex-1 min-w-0 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-colors"
                  placeholder="777 888 999"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="neon-button w-full text-sm md:text-base py-4 mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Odesílám…</span>
                </>
              ) : (
                <span>Chci zjistit, co to přinese mému shopu</span>
              )}
            </button>

            <p className="text-xs text-muted-foreground text-center pt-1">
              Odesláním souhlasíte se{" "}
              <a href="/ochrana-udaju" className="underline hover:text-foreground transition-colors">
                zpracováním údajů
              </a>
              . Žádný spam, žádné sdílení s třetími stranami.
            </p>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default LeadFormSection;
