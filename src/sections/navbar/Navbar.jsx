import Logo from "../../assests/1111.jpg";
import data from "./data";
import "./navbar.css";
import { Switch } from "theme-ui";
import { useTheme } from "../../components/ThemeContext";
const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  let check = localStorage.getItem("theme");
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
