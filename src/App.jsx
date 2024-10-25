import "./App.css";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import InteractiveBackground from "./components/InteractiveBackground";
import NavBar from "./components/NavBar";

function App() {
   return (
      <>
         <NavBar />
         <div className="wrapper absolute">
            <InteractiveBackground />
            <HeroSection />
            <About />
         </div>
      </>
   );
}

export default App;
