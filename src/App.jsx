import './styles/reset.css'
import { Header } from "./components/Header"
import { HomeSection } from "./components/Sections/HomeSection"
import { AboutMeSection } from "./components/Sections/AboutMeSection"
import { TechnologiesSection } from "./components/Sections/TechnologiesSection"
import { ProjectsSection } from "./components/Sections/ProjectsSection"
import { Footer } from "./components/Footer"

function App() {

  return (
    <>
      <Header />
      <main>
        <HomeSection />
        <AboutMeSection />
        <TechnologiesSection />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  )
}

export default App