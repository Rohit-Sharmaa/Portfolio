import React, { useState, useEffect, lazy, Suspense } from "react";
import Loader from "./components/Loader";
import { ThemeProvider } from "./components/ThemeContext";

const Navbar = lazy(() => import("./sections/navbar/Navbar"));
const Header = lazy(() => import("./sections/header/Header"));
const Contact = lazy(() => import("./sections/contact/Contact"));
const Footer = lazy(() => import("./sections/footer/Footer"));
const FloatingNav = lazy(() => import("./sections/floating-nav/FloatingNav"));
const About = lazy(() => import("./sections/about/About"));
const Project = lazy(() => import("./sections/Projects/Project"));
const Exp = lazy(() => import("./sections/experiences/Exp"));

export const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      {loading ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
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
        </Suspense>
      )}
    </ThemeProvider>
  );
};

export default App;
