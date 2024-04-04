import contacts from "./data";
import "./contact.css";
import { useTheme } from "../../components/ThemeContext";
const Contact = () => {
  const { theme } = useTheme();
  return (
    <section id="contact" className={`${theme}`}>
      <h2>Get In Touch</h2>
      <p>Send me a message</p>
      <div className="container contact__container" data-aos="fade-in">
        {contacts.map((contact) => (
          <a
            key={contact.id}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
