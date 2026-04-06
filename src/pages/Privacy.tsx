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
        <h1 className="text-2xl font-bold mb-6">Zásady ochrany osobních údajů</h1>
        <p className="text-muted-foreground leading-relaxed">
          Provozovatel Lukáš Lang IČO: 23915455 zpracovává vaše údaje (jméno, e-mail, telefon) za účelem vyřízení rezervace v Calendly a pro marketingové účely (Meta Pixel). Vaše údaje jsou u nás v bezpečí a nikdy je neprodáme třetím stranám. Máte právo na přístup k údajům a jejich smazání. Kontakt:{" "}
          <a href="mailto:nerad@boostmail.cz" className="text-primary hover:underline">nerad@boostmail.cz</a>
        </p>
      </div>
    </div>
  );
};

export default Privacy;
