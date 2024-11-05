import "./App.css";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import InteractiveBackground from "./components/InteractiveBackground";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useState } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import { useEffect } from "react";
import SocialLinks from "./components/SocialButton";
import Footer from "./components/Footer";
function App() {
   const [isDark, setIsDark] = useState(
      JSON.parse(localStorage.getItem("isDark") == null ? "true" : localStorage.getItem("isDark"))
   );
   useEffect(() => {
      localStorage.setItem("isDark", isDark);
   }, [isDark]);
   return (
      <ThemeContext.Provider value={[isDark, setIsDark]}>
         <div className={`${isDark ? "dark" : ""}`}>
            {/* text-slate-700 */}
            <div className={`app-container select-none dark:text-white text-gray-700 bg-primary-light dark:bg-primary-dark`}>
               <NavBar />
               <div className="wrapper">
                  <InteractiveBackground />
                  <HeroSection />
               </div>
               <SocialLinks />
               <About />
               <Projects />
               <Contact />
               <Footer />
            </div>
         </div>
      </ThemeContext.Provider>
   );
}

export default App;
