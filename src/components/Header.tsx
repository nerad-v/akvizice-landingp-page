import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex-shrink-0">
          <img src={logo} alt="Boostware" className="h-6 w-auto opacity-90 hover:opacity-100 transition-opacity duration-200" />
        </a>
        <a href="#kontakt-section" className="ghost-button text-sm">
          <span>Ukázka systému zdarma</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </header>
  );
};

export default Header;
