
import contacts from './data'
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <p>Send me a message</p>
      <div className="container contact__container">
    {
      contacts.map(contact => <a key={contact.id} href={contact.link} target='_blank' rel='noopener noreferrer'>{contact.icon}</a>)
    }


      </div>
    </section>
  );
};

export default Contact;
