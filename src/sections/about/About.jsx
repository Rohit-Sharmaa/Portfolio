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
          <p className="animated-paragraph paragraph-1">
            I'm Rohit Sharma, a final year Bachelor of Technology (B. Tech)
            Student at Bhagwan Parshuram Institute of Technology.
          </p>
          <p className="animated-paragraph paragraph-2">
            I am passionate about Full Stack development and Competitive
            Programming. In Competitive Programming - I'm rated with a badge
            pupil on Codeforces and 3-star on Codechef.
          </p>
          <p className="animated-paragraph paragraph-3">
            In my spare time, I enjoy playing cricket, games, and spending time
            with my friends and family. Thank you for taking the time to visit
            my website, and I look forward to connecting with you.
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
