import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
     <Header/>
     <main>
      <Hero/>
      <About/>
      <Skills/>
      <Works/>
      <Reviews/>
      <Contact/>
      <Footer/>
     </main>
    </>
  );
}

export default App;
