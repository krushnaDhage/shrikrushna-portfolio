import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { CustomCursor } from './components/CustomCursor';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { CurrentlyBuilding } from './components/CurrentlyBuilding';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Achievements } from './components/Achievements';
import { CodingProfiles } from './components/CodingProfiles';
import { GitHubActivity } from './components/GitHubActivity';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { useScrollSpy } from './hooks/useScrollSpy';

const sectionIds = [
  'home',
  'about',
  'skills',
  'projects',
  'experience',
  'achievements',
  'contact'
];

function PortfolioApp() {
  const [isLoading, setIsLoading] = useState(true);
  const activeSection = useScrollSpy(sectionIds, 150);

  return (
    <div className="min-h-screen relative bg-[#07080d] dark:bg-[#07080d] light:bg-[#f8fafc] text-slate-100 dark:text-slate-100 light:text-slate-900 transition-colors duration-300">
      {/* Loading Screen */}
      {isLoading && (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      )}

      {/* Custom Desktop Cursor */}
      <CustomCursor />

      {/* Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Page Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <CurrentlyBuilding />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <CodingProfiles />
        <GitHubActivity />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top floating control */}
      <ScrollToTop />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
