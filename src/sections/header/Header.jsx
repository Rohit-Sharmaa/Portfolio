import { useEffect } from "react";
import HeaderImage from "../../assests/main.jpg";
import data from "./data";
import AOS from "aos";
import "aos/dist/aos.css";
import "./header.css";

const Header = ({ theme }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <header id="header" className={`${theme}`}>
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt=" Profile" />
        </div>
        <h3 data-aos="fade-up">Rohit Sharma</h3>
        <p data-aos="fade-up">
          Hi , I'm Rohit Sharma , a passionate full-Stack developer and a
          dedicated B.Tech student.
        </p>
        <div className="header__cta" data-aos="fade-up">
          <a href="https://github.com/Rohit-Sharmaa" className="btn primary">
            Github
          </a>
          <a href="#contact" className="btn light">
            Connect
          </a>
        </div>

        <div className="header__socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
