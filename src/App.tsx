import Footer from './Global/Footer'
import Navbar from "./Global/Navbar";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Hero from "./Sections/Hero";
import Portfolio from "./Sections/Portfolio";
import Why from "./Sections/Why";

function App() {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center">
        <Navbar />
        <Hero />
        <div className="container">
          <About />
          <Why />
          <Portfolio />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
