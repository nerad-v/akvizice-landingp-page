import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-8 px-5 sm:px-8">
      <div className="gradient-divider w-full mb-8" />
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-dimmed text-sm whitespace-pre-line">
          © 2026 Boostware. Všechna práva vyhrazena.{"\n"}
          Provozovatel: Lukáš Lang IČO: 23915455 Sídlo: okres Strakonice
        </p>
        <Link to="/ochrana-udaju" className="text-muted-foreground hover:text-foreground text-xs mt-3 inline-block transition-colors">
          Zásady ochrany osobních údajů
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
