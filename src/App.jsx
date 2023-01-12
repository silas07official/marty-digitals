import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Service from "./components/Service";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Contact />
    </div>
  );
}

export default App;
