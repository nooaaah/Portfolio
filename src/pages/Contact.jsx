import styles from "../styles/Contact.module.scss";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact</h2>
      <p>
        Vous pouvez me joindre directement via les informations ci-dessous :
      </p>

      <div className={styles.contactCards}>
        <div className={styles.card}>
          <h3>Email</h3>
          <a href="mailto:noah.bernardi12@gmail.com">noah.bernardi12@gmail.com</a>
        </div>

        <div className={styles.card}> 
          <h3>LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/noah-bernardi-8a7068241/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/noah-bernardi
          </a>
        </div>

        <div className={styles.card}>          
          <h3>GitHub</h3>
          <a
            href="https://github.com/nooaaah"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/nooaaah
          </a>
        </div>
      </div>
    </section>
  );
}
