import AboutUsSection from "./components/AboutUsSection"
import CampaignSection from "./components/CampaignSection"
import ContactUsSection from "./components/ContactUsSection"
import FAQSection from "./components/FAQSection"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import SpecialtiesSection from "./components/SpecialtiesSection"
import TestimonialsSection from "./components/TestimonialsSection"

function App() {

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
    </main>
    <Footer />
    </>
  )
}

export default App
