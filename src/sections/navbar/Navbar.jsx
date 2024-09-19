import Logo from "../../assests/ofl.jpg";
import data from "./data";
import "./navbar.css";
import { Switch } from "theme-ui";
import { useTheme } from "../../components/ThemeContext";
import { useState } from "react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeLink, setActiveLink] = useState(1);
  const handleClick = (id) => {
    setActiveLink(id);
  };

  let check = localStorage.getItem("theme");
  if (check === "light__theme") {
    check = false;
  } else {
    check = true;
  }

  return (
    <nav className={`${theme}`}>
      <div className="container nav__container">
        <a href="index.html" className="nav__logo ">
          <img src={Logo} alt="Logo" />
        </a>
        <ul className="nav__menu">
          {data.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                onClick={() => handleClick(item.id)}
                className={activeLink === item.id ? "active" : ""}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <div>
          {/* <Switch
            id="theme__icon"
           checked={check}
           onClick={toggleTheme}
            className={check ? "theme__icon-checked" : ""}
       >
          </Switch> */}

          <Switch
            id="theme__icon"
            defaultChecked={check}
            onClick={toggleTheme}
            className={check ? "theme__icon-checked" : ""}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
