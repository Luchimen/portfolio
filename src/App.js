import "./App.css";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { ServicesSection } from "./components/ServicesSection";
import { SkillsSection } from "./components/SkillsSection";
import { TeamSection } from "./components/TeamSection";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutSection />
      <ServicesSection />
      <SkillsSection />
      <TeamSection />
      <ContactSection />
    </>
  );
}

export default App;
