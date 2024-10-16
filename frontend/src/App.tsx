import Navbar from "./Global/Navbar";
import About from "./Sections/About";
// import Contact from "./Sections/Contact";
import Hero from "./Sections/Hero";
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
          {/* <Contact /> */}
        </div>
      </div>
    </>
  );
}

export default App;
