import { useEffect } from "react";
import HeaderImage from "../../assests/main.png";

// import { HiDownload } from "react-icons/hi";
import CV from "../../assests/Rohit Sharma Resume.pdf";
import data from "./data";
import AOS from "aos";
import "aos/dist/aos.css";
import "./header.css";
import { useTheme } from "../../components/ThemeContext";
const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const { theme } = useTheme();
  return (
    <header id="header" className={`${theme}`}>
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt=" Profile" />
        </div>
        <h3 className="header_name" data-aos="fade-up">
          <span className="header_text">Rohit Sharma</span>
        </h3>
        <p className="heading_para" data-aos="fade-up">
          Hi, I'm Rohit Sharma. a passionate &nbsp;
          <b className="header_paragraph_bold">FullStack Developer</b>
        </p>
        <div className="header__cta" data-aos="fade-up">
          <a href="https://github.com/Rohit-Sharmaa" className="btn primary">
            Github
          </a>
          <a href={CV} download className="btn light">
            Resume
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
