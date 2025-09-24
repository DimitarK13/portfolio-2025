import Input from '../components/inputs/Input';
import Select from '../components/inputs/Select';
import Textarea from '../components/inputs/Textarea';

import icon from '../assets/images/mail-icon.svg';
import styles from './ContactForm.module.css';

function ContactForm() {
  return (
    <section className={styles.contact}>
      <div className="container">
        <form className={styles.form} name="contact" method="POST">
          <input type="hidden" name="form-name" value="contact" />

          <Input name="name" type="text" label="Full Name" />
          <Input name="email" type="email" label="Email" />
          <Select
            options={['', 'Web Development', 'UX/UI Design', 'Mentoring']}
            name="service"
            label="Service"
          />
          <Textarea name="message" label="Message" />

          <div className={styles.actions}>
            <button type="submit" className="btn btn-primary">
              Send
            </button>

            <a href="mailto:dimikalapocev@gmail.com" target="_blank">
              <img src={icon} alt="Mail Icon" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
