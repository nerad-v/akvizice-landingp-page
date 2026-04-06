import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground px-5 sm:px-8 py-12">
      <div className="max-w-2xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Zpět na hlavní stránku
        </Link>
        <h1 className="text-2xl font-bold mb-8">Zásady ochrany osobních údajů</h1>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">1. Správce údajů</h2>
            <p>
              Správcem osobních údajů je Lukáš Lang, IČO: 23915455, se sídlem v České republice (dále jen „Správce"). Kontaktovat nás můžete na e-mailu:{" "}
              <a href="mailto:nerad@boostmail.cz" className="text-primary hover:underline">nerad@boostmail.cz</a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">2. Jaké údaje zpracováváme a proč?</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-foreground">Rezervace schůzky (Calendly):</strong> Zpracováváme vaše jméno, e-mail a telefonní číslo. Tyto údaje používáme výhradně k tomu, abychom s vámi mohli domluvit a realizovat konzultaci.
              </li>
              <li>
                <strong className="text-foreground">Marketing a analytika (Meta Pixel):</strong> Na webu používáme cookies třetích stran (Meta Platforms, Inc.) pro měření návštěvnosti a efektivitu našich reklam. Díky tomu vám můžeme zobrazovat relevantní video obsah na Facebooku a Instagramu.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">3. Zabezpečení a sdílení dat</h2>
            <p>
              Vaše údaje jsou u nás v naprostém bezpečí. Nikdy je neprodáváme ani neposkytujeme třetím stranám pro jejich marketingové účely. Data jsou zpracovávána pouze v rámci ověřených platforem (Calendly, Meta, Google).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">4. Vaše práva</h2>
            <p>
              Podle nařízení GDPR máte právo na přístup ke svým údajům, jejich opravu, nebo úplné smazání z naší databáze. Pokud si přejete svá data smazat, napište nám na{" "}
              <a href="mailto:nerad@boostmail.cz" className="text-primary hover:underline">nerad@boostmail.cz</a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">5. Souhlas s cookies</h2>
            <p>
              Používáním tohoto webu berete na vědomí používání souborů cookies pro účely analytiky a cílení reklam. Cookies můžete kdykoliv zakázat v nastavení svého prohlížeče.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
