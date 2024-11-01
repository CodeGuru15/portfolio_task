import About from "./components/About";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SideNav from "./components/SideNav";

const App = () => {
  return (
    <div id="home">
      <Navbar />
      <SideNav />
      <HeroSection />
      <div id="about" className="h-screen">
        <About />
      </div>
      <div id="portfolio" className=" h-screen ">
        <Portfolio />
      </div>
      <div id="contact" className=" h-screen ">
        <Contact />
      </div>
    </div>
  );
};
export default App;
