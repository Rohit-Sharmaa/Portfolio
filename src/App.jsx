
import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';

import Services from './sections/services/Services';
import Portfolio from './sections/portfolio/Portfolio';
import Testimonials from './sections/testimonials/Testimonials';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import FloatingNav from './sections/floating-nav/FloatingNav';
import About from './sections/about/About';
import Faq from './sections/faq/Faq';



export const App = () => {
  return (
    <main>
   <Navbar/>
   <Header/>
   <About/>
 <Services/>
 <Portfolio/>
 <Testimonials/>
  <Faq/>
 <Contact/>
 <Footer/>
 <FloatingNav/>



    </main>
  )
}

export default App