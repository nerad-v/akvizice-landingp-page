import Header from "@/components/Header";
import ReadingProgress from "@/components/ReadingProgress";
import Hero from "@/components/Hero";
import ProblemAgitation from "@/components/ProblemAgitation";
import Positioning from "@/components/Positioning";
import HowItWorks from "@/components/HowItWorks";
import WhatSystemDoes from "@/components/WhatSystemDoes";
import CaseStudy from "@/components/CaseStudy";
import Compatibility from "@/components/Compatibility";
import FAQ from "@/components/FAQ";
import Guarantee from "@/components/Guarantee";
import LeadFormSection from "@/components/LeadFormSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ReadingProgress />
      <Header />
      <Hero />
      <ProblemAgitation />
      <Positioning />
      <HowItWorks />
      <WhatSystemDoes />
      <CaseStudy />
      <Compatibility />
      <FAQ />
      <Guarantee />
      <LeadFormSection />
      <Footer />
    </div>
  );
};

export default Index;
