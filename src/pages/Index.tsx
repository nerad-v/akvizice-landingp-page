import Header from "@/components/Header";
import ReadingProgress from "@/components/ReadingProgress";
import Hero from "@/components/Hero";
import Compatibility from "@/components/Compatibility";
import ObjectionHandling from "@/components/ObjectionHandling";
import CaseStudy from "@/components/CaseStudy";
import Guarantee from "@/components/Guarantee";
import CalendlySection from "@/components/CalendlySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ReadingProgress />
      <Header />
      <Hero />
      <Compatibility />
      <ObjectionHandling />
      <CaseStudy />
      <Guarantee />
      <CalendlySection />
      <Footer />
    </div>
  );
};

export default Index;
