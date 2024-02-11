import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import Services from "./sections/services/Services";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import FloatingNav from "./sections/floating-nav/FloatingNav";
import About from "./sections/about/About";
import Project from "./sections/Projects/Project";
import Exp from "./sections/experiences/Exp";

import { useState } from "react";
import { useEffect } from "react";

export const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light__theme"
  );

  const [check, setCheck] = useState(theme === "light__theme" ? false : true);

  const toggleTheme = () => {
    if (theme === "light__theme") {
      setTheme("dark__theme");
      setCheck(!check);
    } else {
      setTheme("light__theme");
      setCheck(!check);
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <main>
      <Navbar theme={theme} check={check} toggleTheme={toggleTheme} />
      <Header theme={theme} />
      <About theme={theme} />

      <Exp theme={theme} />
      <Services theme={theme} />
      <Project theme={theme} />
      <Contact theme={theme} />
      <Footer theme={theme} />
      <FloatingNav theme={theme} />
    </main>
  );
};

export default App;
