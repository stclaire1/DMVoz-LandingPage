import CampaignSection from "./components/CampaignSection"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import SpecialtiesSection from "./components/SpecialtiesSection"

function App() {

  return (
    <>
    <HeroSection />
    <main className="flex flex-col items-center">
      <CampaignSection />
      <SpecialtiesSection />
    </main>
    <Footer />
    </>
  )
}

export default App
