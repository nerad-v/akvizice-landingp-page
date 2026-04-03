import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex-shrink-0">
          <img src={logo} alt="Boostware" className="h-6 w-auto" />
        </a>
        <a href="#calendly-section" className="ghost-button text-sm">
          Ukázka systému zdarma
        </a>
      </div>
    </header>
  );
};

export default Header;
