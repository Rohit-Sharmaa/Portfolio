import AboutImage from "../../assests/of.jpg";

import "./about.css";
import { useTheme } from "../../components/ThemeContext";
const About = () => {
  const { theme } = useTheme();
  return (
    <section id="about" data-aos="fade-in" className={`${theme}`}>
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="Rohit's" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <p>
            I'm Rohit Sharma , a pre-final year Bachelor of Technology (B. Tech)
            Student at Bhagwan Parshuram Institute of Technology.
          </p>
          <p>
            I am passionate about competitive programming and web development.
            Competitive Programming - pupil on codeforces and 3 star on
            Codechef. Web development - Full Stack developer
            <br />
            <br />
            In my spare time, I enjoy playing cricket , games , and spending
            time with my friends and family.
            <br /> <br />
            Thank you for taking the time to visit my website, and I look
            forward to connecting with you.
          </p>

          <a href="#contact" className="btn primary">
            Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
