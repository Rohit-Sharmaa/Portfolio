
import AboutImage from '../../assests/about.jpg'
import {HiDownload} from 'react-icons/hi'
// import CV from '../../assests/cv.pdf'
import Card from '../../components/Card'
import data from './data';
import "./about.css";

const About = () => {
  return (
    <section id="about" data-aos ="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className='about__cards'>
            {
              data.map(item => (
                <Card key={item.id} className="about__card">
                  <span className='about__card-icon'>{item.icon}</span>

                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>

                </Card>
              ))
            }
          </div>
          <p>
          Hi , I'm Rohit Sharma a third-year B.Tech student interested in web development and competitive programming. 
          </p>
          <p>I am passionate about building web applications, and I am constantly learning new technologies and taking on new challenges.
          Thank you for taking the time to visit my website, and I look forward to connecting with you.
          </p>
          {/* <a href={CV} download className='btn primary'></a> */}
          <a href="" className='btn primary'>Download cv <HiDownload/></a>
        </div>
      </div>
    </section>

   
  );
};

export default About;
