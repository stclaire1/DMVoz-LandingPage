import CampaignSection from "./components/CampaignSection"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"

function App() {

  return (
    <>
    <HeroSection />
    <main className="flex flex-col items-center p-10 sm:px-15 sm:py-15 lg:px-20 lg:py-20 xl:px-30 2xl:px-40">
      <CampaignSection />
    </main>
    <Footer />
    </>
  )
}

export default App
