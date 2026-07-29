import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TrustIndicators from "./components/TrustIndicators";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUs from "./components/WhyChooseUs";
import HowItWorks from "./components/HowItWorks";
import AreasSection from "./components/AreasSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ScrollReveal from "./components/ScrollReveal";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-white">
      <ScrollReveal />
      <Navbar />
      <HeroSection />
      <TrustIndicators />
      <div className="max-w-xs mx-auto my-8 border-t border-slate-800" />
      <ServicesSection />
      <WhyChooseUs />
      <HowItWorks />
      <AreasSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
