import Logo from "../../assests/logo.jpg";
import data from "./data";
import { MdOutlineLightMode } from "react-icons/md";
import "./navbar.css";
import { Switch } from "theme-ui";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [check, setCheck] = useState(false);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setCheck(!check);
    } else {
      setTheme("light");
      setCheck(!check);
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <nav className={`${theme}`}>
      <div className="container nav__container">
        <a href="index.html" className="nav__logo ">
          <img src={Logo} alt="Logo" />
        </a>
        <ul className="nav__menu">
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <div>
          <Switch
            id="theme__icon"
            checked={check}
            onClick={toggleTheme}
            className={check ? "theme__icon-checked" : ""}
       >
          </Switch>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
