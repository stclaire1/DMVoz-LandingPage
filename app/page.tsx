import HeroSection from "@/components/HeroSection";
import CampaignSection from "@/components/CampaignSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import AboutUsSection from "@/components/AboutUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactUsSection from "@/components/ContactUsSection";
import FloatingWhatsappBtn from "@/components/FloatingWhatsappBtn";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <HeroSection />
      <main className="flex flex-col items-center">
        <CampaignSection />
        <SpecialtiesSection />
        <AboutUsSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactUsSection />
        <FloatingWhatsappBtn />
      </main>
      <Footer />
    </>
  );
}
