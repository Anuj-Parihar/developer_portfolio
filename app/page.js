// "use client";

// import AboutSection from "./components/homepage/about";
// import ContactSection from "./components/homepage/contact";
// import Education from "./components/homepage/education";
// import Experience from "./components/homepage/experience/index.jsx";
// import HeroSection from "./components/homepage/hero-section";
// import Projects from "./components/homepage/projects";
// import Skills from "./components/homepage/skills";

// export default function Home() {
//   return (
//     <div suppressHydrationWarning>
//       <HeroSection />
//       <AboutSection />
//       <Experience />
//       <Skills />
//       <Projects />
//       <Education />
//       <ContactSection />
//     </div>
//   );
// }


"use client";

import dynamic from 'next/dynamic';
import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
// import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

// Optionally load components that might use browser APIs dynamically
const DynamicHeroSection = dynamic(() => import('./components/homepage/hero-section'), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <DynamicHeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <ContactSection />
    </div>
  );
}