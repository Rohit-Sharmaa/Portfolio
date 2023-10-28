import { links, socials } from "./data";

import "./footer.css";

const Footer = ({theme}) => {
  return (
    <footer className={`${theme}`}>
      <div className="container footer__container">
        <ul className="nav__menu">
          {links.map((flink) => (
            <li key={flink.id}>
              <a href={flink.link}>{flink.title}</a>
            </li>
          ))}
        </ul>

        <div className="footer__socials">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.icon}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>


      
    </footer>
  );
};

export default Footer;
