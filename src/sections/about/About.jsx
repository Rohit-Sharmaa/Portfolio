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
            Hi, I'm Rohit Sharma, a final-year B. Tech student at Bhagwan
            Parshuram Institute of Technology.
          </p>
          <p className="animated-paragraph paragraph-2">
            I've completed <strong>3 internships</strong>: an SDE Intern at
            Cha-Chi Communications, a Frontend Developer Intern at UPL Limited,
            and Teaching Assistant for Data Structures and Algorithms (DSA) at
            Apna College.
          </p>
          <p className="animated-paragraph paragraph-3">
            As a Full Stack Developer skilled in the MERN stack, I've built 10+
            projects. In competitive programming, I've tackled over 1000+ DSA
            problems on Leetcode and Codeforces, holding a Pupil badge and a
            3-star rating.
          </p>
          <p className="animated-paragraph paragraph-4">
            Outside of coding, I enjoy playing cricket, gaming, and spending
            time with friends and family. Thanks for visiting my website—I look
            forward to connecting with you!
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
