import AboutImage from "../../assests/about.jpg";
import { HiDownload } from "react-icons/hi";
import CV from "../../assests/Rohit sharma-Resume.pdf";
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
            Hi, I'm Rohit Sharma, a third-year B.Tech student with a CGPA of
            9.00 as of the 4th semester and interested in web development and
            competitive programming.
          </p>
          <p>
            I am proficient in a variety of web development technologies [MERN]
            and along with that , I have a max rating of 1540 on CodeChef.{" "}
            <br />
            <br />
            In my spare time, I enjoy playing cricket , games , and spending
            time with my friends.
            <br /> <br />
            Thank you for taking the time to visit my website, and I look
            forward to connecting with you.
          </p>

          <a href={CV} download className="btn primary">
            Download cv <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
