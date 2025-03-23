import './App.css'
import AboutMeMain from './components/aboutMeSection/AboutMeMain'
import HelperSection from './components/HelperSection'
import HeroMain from './components/heroSection/HeroMain'
import NavbarMain from './components/navbar/NavbarMain'
import SkillsMain from './components/skillsSection/SkillsMain'

function App() {
  return (
   <main className="font-body">
      <NavbarMain />
      <HeroMain />
      <AboutMeMain />
      <SkillsMain />
      <HelperSection />
   </main>
  );
};

export default App;
