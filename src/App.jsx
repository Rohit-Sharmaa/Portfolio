import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";

import Services from "./sections/services/Services";

import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import FloatingNav from "./sections/floating-nav/FloatingNav";
import About from "./sections/about/About";
import Project from "./sections/Projects/Project";

export const App = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Project/>
      <Contact />
      <Footer />
      <FloatingNav />
    </main>
  );
};

export default App;
