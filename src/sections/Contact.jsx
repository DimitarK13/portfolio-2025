import ContactCard from '../components/ContactCard';
import Button from '../components/Button';

import mailIcon from '../assets/images/mail-icon.svg';
import linkedinIcon from '../assets/images/linkedin-icon.svg';
import githubIcon from '../assets/images/github-icon.svg';
import styles from './Contact.module.css';

function Contact() {
  return (
    <>
      <div className={styles.grid}>
        <ContactCard icon={mailIcon} title="Email:" link="mailto:dimikalapocev@gmail.com">
          dimikalapocev@gmail.com
        </ContactCard>
        <ContactCard icon={linkedinIcon} title="LinkedIn:" link="https://www.linkedin.com/in/dimitar-kalapocev/">
          linkedin.com/in/dimitar-kalapocev
        </ContactCard>
        <ContactCard icon={githubIcon} title="GitHub:" link="https://github.com/DimitarK13/">
          github.com/DimitarK13
        </ContactCard>
      </div>

      <div className={styles.btn}>
        <Button link="/CV.pdf" isExternal>
          CV
        </Button>
      </div>
    </>
  );
}

export default Contact;
