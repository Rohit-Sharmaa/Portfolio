import HeaderImage from "../../assests/main.jpg";
import data from './data'
import "./header.css";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt=" Profile Image" />
        </div>
        <h3>Rohit Sharma</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam doloremque corporis exercitationem, illo, vero neque numquam </p>
        <div className="header__cta">
          <a href="#contact" className="btn primary">Let's Talk</a>
          <a href="#portfolio" className="btn light">My Work</a>
        </div>

        <div className="header__socials">
          {
         data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
          }

        </div>
      </div>
    </header>
  );
};

export default Header;
