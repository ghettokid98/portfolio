import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import React, { useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  return (
    <div className={`app ${loading ? 'loading' : ''}`}>
      {loading ? (
        <HashLoader
          color={"#13c2de"}
          loading={loading}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div>
          <Header />
          <main>
            <Hero />
            <About />
            <Skills />
            <Works />
            <Reviews />
            <Contact />
            <Footer />
          </main>
        </div>
      )}
    </div>
  );
}

export default App;