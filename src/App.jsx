import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import FloatingNav from "./sections/floating-nav/FloatingNav";
import About from "./sections/about/About";
import Project from "./sections/Projects/Project";
import Exp from "./sections/experiences/Exp";
import { ThemeProvider } from "./components/ThemeContext";

export const App = () => {
  const [loading, setLoading] = useState(true);

  const handleLoading = () => {
    setTimeout(() => {
      setLoading(false);
    }, 2 * 1000);
  };

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);

  return (
    <ThemeProvider>
      {loading ? (
        <Loader />
      ) : (
        <main>
          <Navbar />
          <Header />
          <About />
          <Exp />
          <Project />
          <Contact />
          <Footer />
          <FloatingNav />
        </main>
      )}
    </ThemeProvider>
  );
};

export default App;
